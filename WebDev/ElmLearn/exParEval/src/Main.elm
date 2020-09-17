
 
module Main exposing (main)

import Browser
import Html exposing (Html, button, div, text, br)
import Html.Events exposing(..)
import String exposing (toFloat)


---------------------------------------------------- MODEL ---------------------------------------

type alias Calculator =
    {
        displayValue : String
        , firstOperand : Float
        , calculation : Float -> Float -> Float
        , append : Bool
        , waitingForSecondOperand : Bool
    }

calculator : Calculator
calculator = 
    {
         displayValue = "0"
        , firstOperand = 0
        , calculation = (\x y -> y)
        , append = False
        , waitingForSecondOperand = True
    }
   
type alias Operations = 
    {
        add : Float->Float->Float 
        , sub : Float->Float->Float
        , mul : Float->Float->Float
        , div : Float->Float->Float
    }

operations : Operations
operations  = 
    {
        add = (\x y -> x + y) 
        , sub = (\x y -> x - y)
        , mul = (\x y -> x * y)
        , div = (\x y -> x / y)
    }


--------------------------------------------------- UPDATE  ----------------------------------------

type Msg = 
        Add 
        | Sub
        | Mul
        | Div
        | Equal
        | Clear
        | Number Int
        | Zero 
        | Decimal

updateCalc : Msg -> Calculator -> Calculator
updateCalc msg onCalculator =
    case msg of 
        Add ->
            updateResult onCalculator operations.add
        Sub -> 
            updateResult onCalculator operations.sub
        Mul -> 
            updateResult onCalculator operations.mul
        Div -> 
            updateResult onCalculator operations.div   
        Equal -> 
            equal onCalculator
        Clear -> 
            calculator
        Number number -> 
            updateDisplay onCalculator number
        Decimal -> 
            dot onCalculator         -- Dot -> dot model -- 
        Zero -> 
            zero onCalculator


updateResult : Calculator -> (Float -> Float -> Float) -> Calculator 
updateResult modelC op =
    let
        result = convToSting modelC
    in
        if  String.isEmpty modelC.displayValue then
            modelC
        else if modelC.waitingForSecondOperand then
            {
                modelC 
                    | calculation = op
                    , displayValue = result
                    , firstOperand = convToFloat result
                    , append = False
            }
        else
            {
                modelC 
                    | calculation = op
                    , firstOperand = convToFloat calculator.displayValue
                    , append = False
                    , waitingForSecondOperand = True
            }


updateDisplay : Calculator -> Int -> Calculator
updateDisplay  modelC number = 
        if modelC.append then
            {modelC | displayValue = modelC.displayValue ++ String.fromInt(number) } 
        else
            {
                modelC 
                    | displayValue =  String.fromInt(number)
                    , append = True
            }

equal : Calculator -> Calculator
equal x =  
        if String.isEmpty x.displayValue then 
            x
        else if x.append then
            {   
                x 
                    | displayValue = convToSting x
                    , firstOperand = convToFloat x.displayValue
                    , append = False
                    , waitingForSecondOperand = False
            }
        else { 
                x 
                    | displayValue = x.calculation ( convToFloat x.displayValue) x.firstOperand 
                        |> String.fromFloat
                    , append = True
                    , waitingForSecondOperand = False
            }

zero : Calculator -> Calculator
zero modelCalc = 
        if String.isEmpty modelCalc.displayValue || not modelCalc.append then
            {modelCalc | displayValue = "0", append = False}
        else 
            {modelCalc | displayValue = modelCalc.displayValue ++ "0"}

dot : Calculator -> Calculator
dot modelCalc = 
        if not (String.isEmpty modelCalc.displayValue) && modelCalc.append then
            {modelCalc | displayValue = appendDecimal modelCalc.displayValue}
        else 
            {modelCalc | displayValue = "0.", append = True}

appendDecimal : String -> String
appendDecimal string = 
        if String.contains "." string then
            string
        else 
            string ++ "."



convToFloat : String -> Float
convToFloat input = Maybe.withDefault 0 (String.toFloat input)

convToSting : Calculator -> String
convToSting x = 
        x.calculation x.firstOperand (convToFloat x.displayValue) 
        |> String.fromFloat

---------------------------------------------------- VIEW ----------------------------------------------------

calcInterface : Calculator -> Html Msg
calcInterface x =
    div []
    [
        div []
            [text (x.displayValue)]
        ,div [][
            calculatorButton (Number 9) "9"
            , calculatorButton (Number 8) "8"
            , calculatorButton (Number 7) "7"
            , br [][]
            , calculatorButton (Number 6) "6"
            , calculatorButton (Number 5) "5"
            , calculatorButton (Number 4) "4"
            , br [][]
            , calculatorButton (Number 3) "3"
            , calculatorButton (Number 2) "2"
            , calculatorButton (Number 1) "1"
        ]  
        ,div [][
            calculatorButton Add "+"
            , calculatorButton Sub "-"
            , calculatorButton Mul "*"
            , calculatorButton Div "/"
        ]
        ,div[][
            calculatorButton Clear "AC"
            , calculatorButton Zero "0"
            , calculatorButton Decimal "."
            , calculatorButton Equal "="
        ]    
    ]

---------- Buttons ------------------------

calculatorButton : Msg -> String -> Html Msg
calculatorButton  msg buttonText = 
        button [onClick msg][text buttonText]



-------------------------------- Main Function ------------------------------------------------

main = Browser.sandbox { init = calculator, update = updateCalc, view = calcInterface }
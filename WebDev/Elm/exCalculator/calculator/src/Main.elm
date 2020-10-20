module Main exposing (..)

import Browser
import Html exposing (..)
import Html.Events exposing (..)
import Html.Attributes exposing (..)

-------------- Model
type alias Model = 
    {
        result : Float
        , prevValue : Float
        , nextValue : Float

    }

init : Model
init = 
    {
        result = 0
        , prevValue = 0
        , nextValue = 0
    }


-- Update
type Msg
    = Add
    | Sub
    | Mul
    | Div

update: Msg -> Model -> Model
update msg model =
    case msg of
        Add ->
           { model | result = model.prevValue + model.nextValue }
        
        Sub ->
            {model | result = model.prevValue - model.nextValue}

        Div ->
            {model | result = model.prevValue / model.nextValue}

        Mul ->
            {model | result = model.prevValue * model.nextValue}

--- View
view : Model -> Html Msg
view model= 
    div[][
        div[][text (String.fromFloat model.result)]
        ,div[][
            button [onClick Add][text "1"]
            , button [onClick Add][text "2"]
            , button [onClick Add][text "3"]
            , br [][]
            , button [onClick Add][text "4"]
            , button [onClick Add][text "5"]
            , button [onClick Add][text "6"]
            , br [][]
            , button [onClick Add][text "7"]
            , button [onClick Add][text "8"]
            , button [onClick Add][text "9"]
            , br [][]
            , button [onClick Add][text "-"]
            , button [onClick Add][text "+"]
            , button [onClick Add][text "*"]
            , button [onClick Add][text "/"]
            
        ]
    ]



main = Browser.sandbox{ init = init, update = update, view = view }
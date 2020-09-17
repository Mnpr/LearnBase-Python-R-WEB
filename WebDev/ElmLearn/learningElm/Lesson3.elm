module Lesson3 exposing (main)

import Html exposing (text)

type alias Employee =                   --type alias (giving a new name to a type)
    { 
        name : String
        , age : Int
    }

employee = 
    { name = "Max"
    , age = 29
    }

renderEmployee : Employee -> String     -- takes type Employee as reference type and returns String
renderEmployee emp = 
        emp.name ++ ", is " ++ (String.fromInt emp.age) ++ " years old."
    
main = text <| renderEmployee employee  --text <| String.fromInt <| .age employee -- .name function takes records and returns record value
 
        
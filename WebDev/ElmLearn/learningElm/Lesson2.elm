module Lesson2 exposing (main)

import Html exposing (text) --Html function takes string and converts into Html node


another : String -> String
another str =
    "Hi Sarah !! " ++ str

                                 --elm does type inference but 
ask : String -> String -> String --type definitions
ask thing place=  
    "where is the " 
        ++ thing 
        ++ " that was on the " 
        ++ place 
        ++ "?"                   --string concatenation


askAnother : String -> String        -- use point free style \||/
askAnother =  another <<(ask "key")  -- Function composition (taking two fn with compatible I/O and build one fn out of it )
    


main = text <| askAnother "floor"    
          --<| another            -- partial application of the function
          --<| ask "key" "table"  -- all function in elm are curried by default
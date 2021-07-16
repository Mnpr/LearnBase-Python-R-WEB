module Lesson4 exposing (main)

import Html exposing (..)

type alias Employee =                   --type alias (giving a new name to a type)
    { 
        name : String
        , age : Int
    }

people = [
        { name = "nico", age = 25 }
        , {name = "nami", age = 20}
    ]

names : List Employee -> List String
names fetch =
    List.map (\x -> x.name) fetch

findEmployee : String -> List Employee -> Maybe Employee 
findEmployee name pList =
    List.foldl 
        (\x y ->
            case y of 
                Just _ -> 
                    y
                Nothing -> 
                    if x.name == name then
                        Just x
                    else
                        Nothing
               )


main = text <| Debug.toString <| findEmployee "nico"







-- foo = ["one ", "two", "three"]


-- main = text <| Debug.toString <| foo 
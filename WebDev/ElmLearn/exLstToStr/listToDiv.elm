
import Html exposing (..)



divOutput = ["i ", "dont ", " know"]

putDiv: List String -> Html msg
putDiv listInput = 
    listInput
        |> List.map((\x -> div [][text x]))
        |> div []
        
main =
    putDiv divOutput

port module Main exposing (main)

import Browser exposing (UrlRequest(..))
import Browser.Navigation as Nav
import Html exposing (Html, a, br, button, div, h1, text)
import Html.Attributes exposing (class, href)
import Html.Events exposing (onClick)
import Json.Decode as D exposing (field)
import Json.Encode as E
import List exposing (concat)
import Url
import Url.Parser as Url exposing ((</>), Parser)


type Page
    = Index
    | Cats
    | User Int


urlToPage : Url.Url -> Page
urlToPage url =
    -- We start with our URL
    url
        -- Send it through our URL parser (located below)
        |> Url.parse urlParser
        -- And if it didn't match any known pages, return Index
        |> Maybe.withDefault Index


urlParser : Parser (Page -> a) a
urlParser =
    -- We try to match one of the following URLs
    Url.oneOf
        -- Url.top matches root (i.e. there is nothing after 'https://example.com')
        [ Url.map Index Url.top

        -- Url.s matches URLs ending with some string, in our case '/cats'
        , Url.map Cats (Url.s "cats")

        -- Again, Url.s matches a string. </> matches a '/' in the URL, and Url.int matches any integer and "returns" it, so that the user page value gets the user ID
        , Url.map User (Url.s "user" </> Url.int)
        ]



-- Model


type alias Model =
    { navKey : Nav.Key
    , page : Page
    , token : String
    }



-- Init


init : E.Value -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
    ( { navKey = key
      , page = urlToPage url
      , token =
            case D.decodeValue decoder flags of
                Ok token ->
                    token

                Err e ->
                    D.errorToString e
      }
    , Cmd.none
    )


type Msg
    = LinkClicked UrlRequest
    | UrlChange Url.Url
    | SetToken



-- Update


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked urlRequest ->
            case urlRequest of
                Internal url ->
                    ( model
                    , Nav.pushUrl model.navKey (Url.toString url)
                    )

                External url ->
                    ( model
                    , Nav.load url
                    )

        UrlChange url ->
            ( { model | page = urlToPage url }
            , Cmd.none
            )

        SetToken ->
            ( { model | token = "hello" }
            , setToken "hello"
            )



-- View


view model =
    { title = "Hello app"
    , body =
        [ div []
            [ h1 [] [ text "Our awesome app" ]
            , case model.page of
                Index ->
                    text "Index!"

                Cats ->
                    text "Cats!"

                User userId ->
                    text <|
                        "User with id: "
                            ++ String.fromInt userId
            , br [] []
            , viewLink "/cats" "cats"
            , br [] []
            , viewLink "/" "home"
            , button [ onClick SetToken ] [ text "hi" ]
            ]
        ]
    }


viewLink link name =
    a [ href link, class "link" ] [ text name ]



-- Json encode and decode


encode model =
    ( "token", E.string model.token )


decoder =
    field "token" D.string



-- Ports


port setToken : String -> Cmd msg



-- Program


main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = always Sub.none
        , onUrlRequest = LinkClicked
        , onUrlChange = UrlChange
        }

module Main exposing (main)

import Browser exposing (UrlRequest(..))
import Browser.Navigation as Nav
import Html exposing (Html, a, br, button, div, h1, text)
import Html.Attributes exposing (class, href)
import Html.Events exposing (onClick)
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


type alias Model =
    { navKey : Nav.Key
    , page : Page
    }


init : () -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
    ( { navKey = key
      , page = urlToPage url
      }
    , Cmd.none
    )


type Msg
    = LinkClicked UrlRequest
    | UrlChange Url.Url


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


view : Model -> Browser.Document Msg
view model =
    { title = "Example app"
    , body =
        [
            div []
            [ h1 [] [ text "Our awesome app" ]
               , case model.page of
                   Index ->
                       text "Index!"

                   Cats ->
                       text "Cats!"

                   User userId ->
                       text
                       <| "User with id: " ++ String.fromInt userId
               , br [] []
               , viewLink "/cats" "cats"
               , br [] []
               , viewLink "/" "home"
            ]

        ]

    }


viewLink link name =
    a [href link, class "link"] [text (name)]

main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = always Sub.none
        , onUrlRequest = LinkClicked
        , onUrlChange = UrlChange
        }

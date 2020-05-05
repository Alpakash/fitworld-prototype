port module Main exposing (main)

import Browser exposing (UrlRequest(..))
import Browser.Navigation as Nav
import Html exposing (Html, a, br, button, div, h1, input, label, text)
import Html.Attributes exposing (class, href, placeholder, type_)
import Html.Events exposing (onClick)
import Json.Decode as D exposing (field)
import Json.Encode as E
import List exposing (concat)
import Url
import Url.Parser as Url exposing ((</>), Parser)



-- ROUTING


type Page
    = Login
    | Dashboard
    | NotFound


urlToPage : Url.Url -> Page
urlToPage url =
    url
        |> Url.parse urlParser
        |> Maybe.withDefault NotFound


urlParser : Parser (Page -> a) a
urlParser =
    Url.oneOf
        [ Url.map Login Url.top
        , Url.map Dashboard (Url.s "dashboard")
        ]



-- MODEL


type alias Model =
    { navKey : Nav.Key
    , page : Page
    , token : String
    }



-- INIT


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



-- UPDATE


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



-- VIEW


isAuthTokenSet : Model -> Bool
isAuthTokenSet model =
    String.length model.token > 0


view model =
    { title = "Fitworld - " ++ titleHandler model
    , body =
        [ div []
            [ viewNavigation
            , pageHandler
                model

            --, h1 [] [ text "Some footer thing here" ]
            ]
        ]
    }


viewNavigation =
    div [] []


viewUnauthenticated =
    text "You are unauthenticated for this page."


viewPage page authenticated =
    if authenticated then
        page

    else
        viewUnauthenticated


pageHandler : Model -> Html Msg
pageHandler model =
    let
        authentication =
            isAuthTokenSet model

        noAuthentication =
            True
    in
    case model.page of
        Login ->
            viewPage (viewLogin model) noAuthentication

        Dashboard ->
            viewPage (viewDashboard model) authentication

        NotFound ->
            viewPage (viewNotFound model) noAuthentication



-- TITLE


titleHandler model =
    case model.page of
        Login ->
            "Login"

        Dashboard ->
            "Dashboard"

        NotFound ->
            "Not Found"



-- RENDER PAGES


viewLogin model =
    div [ class "columns page-container is-vcentered is-centered" ]
        [ div [ class "column is-two-fifths" ]
            [ div [ class "has-background-light has-padding-1" ]
                [ h1 [ class "title class-1" ] [ text "Login" ]
                , renderTextInput "Email"
                , renderPasswordInput "Password"
                , button [ class "button is-primary " ] [ text "Login" ]
                ]
            ]
        ]


renderTextInput labelText =
    div [ class "field" ]
        [ label [ class "label" ]
            [ text labelText ]
        , div [ class "control" ]
            [ input [ class "input", placeholder ("Insert your " ++ labelText ++ ".."), type_ "text" ]
                []
            ]
        ]


renderPasswordInput labelText =
    div [ class "field" ]
        [ label [ class "label" ]
            [ text labelText ]
        , div [ class "control" ]
            [ input [ class "input", placeholder ("Insert your " ++ labelText ++ ".."), type_ "password" ]
                []
            ]
        ]


viewDashboard model =
    text "Hi from dashboard!"


viewNotFound model =
    text "404 Not found"



-- HELPERS


viewNavLink link name =
    a [ href link, class "nav-link" ] [ text name ]



-- JSON ENCODE/DECODE


encode model =
    ( "token", E.string model.token )


decoder =
    field "token" D.string



-- PORTS


port setToken : String -> Cmd msg



-- PROGRAM


main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = always Sub.none
        , onUrlRequest = LinkClicked
        , onUrlChange = UrlChange
        }

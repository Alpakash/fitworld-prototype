import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./routes/login/Login";
import { Register } from "./routes/register/Register";
import { Cache, CacheType } from "./Cache";
import AuthenticatedRoute from "./routes/AuthenticatedRoute";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "https://api.fitworld.io/graphql",
    }),
});

export const CacheContext = React.createContext(Cache.cache);

class Main extends React.Component {
    render() {
        if (!Cache.cache) {
            Cache.get();
        }

        return (
            <React.StrictMode>
                <ApolloProvider client={client}>
                    <CacheContext.Provider value={Cache.cache}>
                        <Router>
                            <Route path="/" exact={true}>
                                <Login />
                            </Route>
                            <Route path="/register">
                                <Register />
                            </Route>
                            <AuthenticatedRoute path="/cats">
                                Hi from cats
                            </AuthenticatedRoute>
                        </Router>
                    </CacheContext.Provider>
                </ApolloProvider>
            </React.StrictMode>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

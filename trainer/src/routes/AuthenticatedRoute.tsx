import React from "react";
import {CacheContext} from "../index";
import {Redirect, Route, matchPath, withRouter} from "react-router-dom";
import {omit} from "lodash";
import {RouteProps} from "react-router";

interface P extends RouteProps {
}

//@ts-ignore
export default withRouter(class AuthenticatedRoute extends React.Component<P> {

    render() {
        return (
            <CacheContext.Consumer>
                {value => {
                    console.log("authenticatedroute", value);
                    if (!!value && value.token) {
                        return <Route {...omit(this.props, ["children"])}>
                            {this.props.children}
                        </Route>
                    } else {
                        if (!this.props.location) {
                            throw new Error("location not in props of authenticated route")
                        }
                        if (matchPath(this.props.location?.pathname, this.props)) {
                            return <Redirect to="/"/>
                        }

                    }
                }
                }
            </CacheContext.Consumer>
        );
    }
});

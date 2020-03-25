import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Intro from './pages/intro/Introduction'
import LoggedIn from './pages/LoggedIn'
import Initializing from './pages/intro/Initializing'

function App() {
return  (
    <Router>
      <Switch>
        <Route exact path="/"><Intro/></Route>
        <Route path={"/loggedIn"}><LoggedIn/></Route>
        <Route path={ "/init" }><Initializing/></Route>
      </Switch>
    </Router>
)
}

export default App

import React from 'react'
import './App.css'
import './menubar.css'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import Frame from './components/frame/frame'
import Query from './components/query'
import Mutation from './components/mutation'
import Grid from './components/grid'
import Button from './components/Button'

export const client = new ApolloClient({
  uri: 'https://swapi.graph.cool/'
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header>
          <Frame/>
          <div className="App-header">
            Yo Fitworld!
            <Button text={"Come on"} backgroundColor="green" />
              {/* Query and mutation via the Starwars API*/}
              <Query/>
              <Mutation/>
          </div>
        </header>
        <Grid/>
      </div>
    </ApolloProvider>
  )
}

export default App

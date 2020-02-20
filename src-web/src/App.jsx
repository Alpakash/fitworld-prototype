import React from 'react'
import './menubar.css'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import Frame from './components/frame/frame'
import Wrapper from './components/grid'
import Header from './components/Header'
import Food from './assets/images/food.svg'

export const client = new ApolloClient({
  uri: 'https://swapi.graph.cool/'
})


function App() {
  return (
    <ApolloProvider client={client}>
        <div className="App">
          <header>
            <Header/>
          </header>
          <Wrapper/>
          <Food/>
        </div>
    </ApolloProvider>
  )
}

export default App

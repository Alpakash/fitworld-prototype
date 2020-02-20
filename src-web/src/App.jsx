import React from 'react'
import './menubar.css'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import Header from './components/Header'
import ThemeContextProvider from './theme/ThemeContext'

export const client = new ApolloClient({
  uri: 'https://swapi.graph.cool/'
})


function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeContextProvider value={'dark'}>
        <Header/>
      </ThemeContextProvider>
    </ApolloProvider>
  )
}

export default App

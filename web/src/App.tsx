import React from 'react'
import Routes from './routes/routes'
import { useQuery } from "@apollo/react-hooks";
import { useApolloClient } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_TOKEN = gql`
    {
        mySuperSecretToken @client
    }
`;

function App() {
  const { data, client } = useQuery(GET_TOKEN);
  return (
    <>
      <button onClick={() => {
        client.writeData({
          data: {
            mySuperSecretToken: "helloworld"
          }
        })
      }}>
        yoi
      </button>
      <h1>cached message is: {JSON.stringify(data, null, 4)}</h1>
  <Routes />
  </>
  )
}

export default App

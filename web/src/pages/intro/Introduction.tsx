import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const GET_TOKEN = gql`
    {
        token @client
    }
`;
const Introduction = () => {
  const {data, client} = useQuery(GET_TOKEN);

  return (
    <div>
      <h1>Introduction page</h1>
      <Link to={ '/init' }>Go to init page</Link>

      <button style={{display: "block", marginTop: "20px"}} onClick={() => {
        client.writeData({
          data: {
            token: "hello world"
          }
        })
      }}>
        write {(data.token !== undefined) ? JSON.stringify(data.token, null, 4) : null} to cache
      </button>
      <h1>cached message is: {JSON.stringify(data, null, 4)}</h1>
    </div>
  );
}

export default Introduction

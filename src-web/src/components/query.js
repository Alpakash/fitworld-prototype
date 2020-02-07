import React from 'react'
import gql from "graphql-tag"
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Queries, Mutations } from '../lib/index';

// Query
const RANDOM_WORLD = Queries.hello;

const Query = () => {
  // fetch data
  const { loading, error, data } = useQuery(RANDOM_WORLD);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return (
    // Show Query
    <pre>
      {data.allFilms.map(hi => hi.director)}
      {/*{JSON.stringify(data, null, 4)}*/}
    </pre>
  )
}

export default Query
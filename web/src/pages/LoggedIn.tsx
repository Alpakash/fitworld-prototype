import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Authentication from '../utils/Authentication'
import { useQuery } from '@apollo/react-hooks'
import { Queries } from 'fitworld-common'

const LoggedIn = () => {
    const { loading, error, data } = useQuery(Queries.getPeople);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: ${ error } </p>;

  return (
      <div style={ { marginBottom: 30 } }>
        <h1>Logged In</h1>

        <Link to={ "/" } style={ { textDecoration: "none", color: "blue", fontWeight: "bold" } }>
          Go to intro page. </Link>

        {data.allPersons.map(({id, name, gender, height}: any, index: number) =>
          <div key={id}>
            <ul>
              <li>{name} - {gender} - {height}CM</li>
            </ul>
          </div>
        )}

        <Authentication/>
      </div>
  )
}

export default LoggedIn

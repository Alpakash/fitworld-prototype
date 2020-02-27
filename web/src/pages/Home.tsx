import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <div style={ { marginBottom: 30 } }>
        <Link to={ "/intro" } style={ { textDecoration: "none", color: "lightgreen", fontWeight: "bold" } }>App
          nested in Routing; Go to intro page. </Link>
      </div>
  )
}

export default Home

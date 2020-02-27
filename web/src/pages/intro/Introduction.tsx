import React from 'react'
import { Link } from 'react-router-dom'

const Introduction = () => {
  return (
    <div>
      <h1>Introduction page</h1>
      <Link to={ '/init' }>Go to init page</Link>
    </div>
  )
}

export default Introduction

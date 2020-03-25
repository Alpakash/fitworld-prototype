import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Authentication = () => {
  const [name, setName] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        const names = persons.map((a: any)=> a.name)
        setName(names);
      })}, [])

  // curl -X POST "https://api.fitworld.io/auth/trainer/register" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"email\":\"thomas@thomas.nl\",\"password\":\"helloworld\"}"
  // curl -X POST "https://api.fitworld.io/auth/trainer/login" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"email\":\"thomas@thomas.nl\",\"password\":\"helloworld\"}"

  // curl -X POST "https://api.fitworld.io/auth/anon" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"magicString\":\"h5o4a6ow92kmm1JWiodwjidWJDioJWIODJWIODJOAKLSJDKWHDKWAwjd92dj282\"}"
  // curl -X POST "https://api.fitworld.io/auth/usrpwd/register" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"email\":\"thomas@thomas.nl\",\"password\":\"helloworld\"}"
  // curl -X POST "https://api.fitworld.io/auth/usrpwd/login" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"email\":\"thomas@thomas.nl\",\"password\":\"helloworld\"}"

  // GET https://1jcscuy2ui.execute-api.eu-west-1.amazonaws.com/p/auth/me/ - Headers Authorization => Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5NDAwOGNiLTkyZDUtNDU3Ny1hYWMyLTE2MTZhNjVmMmU3YSIsInVzZXJUeXBlIjoiQW5vbnltb3VzIiwic2FsdCI6IjdlMTczZDgwLTY1MmMtNDliNC1hMzA2LTU2ZTgxMjUwYzlhZCIsImlhdCI6MTU4NDk5NTU0NSwiZXhwIjozMzE0MjU5NTU0NSwiaXNzIjoiZml0d29ybGQuaW8ifQ.3IOxZfc63w62q4DLxO-3GJX2nPlvaIFpkO4PxQaGMkM

  //     "createdAt": "2020-03-23T20:32:25.225Z",
  //     "updatedAt": "2020-03-23T20:32:25.225Z",
  //     "id": "994008cb-92d5-4577-aac2-1616a65f2e7a",
  //     "email": "",
  //     "role": 0,
  //     "type": "Anonymous"

  return (
    <div>

    </div>
  )
}

export default Authentication

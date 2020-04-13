import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Text, View } from 'react-native'
import _ from 'lodash'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_TOKEN = gql`{ token @client }`;

const AuthGet = () => {
  const { data: tokenData} = useQuery(GET_TOKEN)
  const [data, setData] = useState({
    id: undefined,
    type: undefined
  })

  useEffect(() => {
    const fetchData = async () => {
      if ( tokenData !== undefined ) {
      const userData = await axios(
        'https://api.fitworld.io/auth/me',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ tokenData.token }`
          }
        }
      )

      setData(userData.data)
      }
    }

    fetchData().then(r => r)
  }, [])

  return (
    <>
      <View><Text>fetched data id: { JSON.stringify(data.id, null, 4) }</Text></View>
      <View><Text>fetched data type: { JSON.stringify(data.type, null, 4) }</Text></View>
    </>
  )
}

export default AuthGet

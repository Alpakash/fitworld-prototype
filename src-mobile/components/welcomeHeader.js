import React from 'react'
import styled from 'styled-components'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableHighlight, View } from 'react-native'

const Stack = createStackNavigator()

const WelcomeHeader = (props, { navigation }) => {
  return (
    <View>
      <TouchableHighlight style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        position: 'absolute',
        top: 10,
        left: 10
      }}
                          onPress={() => alert('image clicked')}>
        <Avatar source={require('../assets/avatar.jpg')}/>
      </TouchableHighlight>

      <TitleBar>
        <Title>{props.title}</Title>
        <Name>{props.name}</Name>
      </TitleBar>
    </View>
  )
}

export default WelcomeHeader

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  background: black;
  border-radius: 50px;
`

const TitleBar = styled.View`
	margin: 15px 0 45px 0;
	padding-left: 130px;
`

const Title = styled.Text`
	font-size: 20px;
	margin-top: 25px;
	font-weight: 500;
	color: #b8bece;
`

const Name = styled.Text`
	font-size: 20px;
	color: #3c4560;
	font-weight: bold;
`
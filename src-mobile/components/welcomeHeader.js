import React from 'react'
import styled from 'styled-components'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Button from './Button'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const WelcomeHeader = (props) => {
  return (
    <>
      <View>
        <TouchableHighlight style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          position: 'absolute',
          top: 10,
          left: 10
        }}
                            onPress={props.onPress}>
          <Avatar source={require('../assets/avatar.jpg')}/>
        </TouchableHighlight>

        <TitleBar>
          <Title>{props.title}</Title>
          <Name>{props.name}</Name>
        </TitleBar>
      </View>

      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 200, backgroundColor: '#673AB7' }}>
        <Text
          onPress={props.onPress}
          style={styles.title}>Welcome to Fitworld!</Text>
      </View>
      <View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Step One</Text>
          <Text style={[styles.sectionDescription, { color: 'grey', marginBottom: 50 }]}>
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits...
          </Text>
        </View>
      </View>
    </>
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

const styles = StyleSheet.create({
  text: {
    fontSize: 42
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.white
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  }
})
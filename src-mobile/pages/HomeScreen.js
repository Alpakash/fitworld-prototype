import React, { useState } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Button from '../components/Button';
import WelcomeHeader from '../components/welcomeHeader'
import RNComponents from '../components/RN-components'

const HomeScreen = ({navigation}) => {

  return (
    <>
      <StatusBar
        currentHeight
        backgroundColor="orange"
        barStyle="dark-xcontent" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <WelcomeHeader onPress={() => navigation.navigate("Profile")} title={"Welcome back"} name={"Avatar, the last air bender"}/>
          <RNComponents/>

          <View style={{flex: 1, justifyContent: "center", alignItems: "center", height: 200, backgroundColor: "#673AB7"}}>
            <Text
              onPress={() => navigation.navigate("Profile")}
              style={styles.title}>Welcome to Fitworld!</Text>
          </View>
          <View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={[styles.sectionDescription, {color: "grey", marginBottom: 50}]}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits...
              </Text>
              <Button textColor={"white"} text={"helloooo"}/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 42
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.white
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default HomeScreen;

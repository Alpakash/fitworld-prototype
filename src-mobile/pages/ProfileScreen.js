import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Button from '../components/Button';
import WelcomeHeader from '../components/welcomeHeader'

const ProfileScreen = ({navigation}) => {
  return (
    <>

      <StatusBar backgroundColor="orange" barStyle="dark-xcontent" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <WelcomeHeader title={"Welcome to"} name={"to profile"}/>
          <View style={{flex: 1, justifyContent: "center", alignItems: "center", height: 200, backgroundColor: "#673AB7"}}>
            <Text
              onPress={() => navigation.navigate("Home")}
              style={styles.title}>PROFILE PAGE!</Text>
          </View>
          <View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step Two</Text>
              <Text style={[styles.sectionDescription, {color: "grey", marginBottom: 50}]}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                ATTACCCCKK...
              </Text>
              <Button textColor={"red"} text={"PROFILEEEEE"}/>
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

export default ProfileScreen;

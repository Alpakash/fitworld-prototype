/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const screenWidth = Dimensions.get('window').width
const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop'
]
const imgProfileUrl =
  'https://images.unsplash.com/photo-1557626211-3046857aa1a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
const localImg = require('../assets/avatar.jpg')
const Insta = () => {
  const navigation = useNavigation()
  {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imgProfileContainer}>
            <Image source={localImg} style={styles.imgProfile}/>
          </View>
          <View style={styles.userInfoContainer}>
              <Text style={styles.username}>Avatar Akash</Text>
            <View style={styles.userInfo}>
              <View style={styles.figure}>
                <Text style={styles.posts}>Posts</Text>
                <Text style={styles.post}>20</Text>
              </View>
              <View style={styles.figure}>
                <Text style={styles.followers}> Followers</Text>
                <Text style={styles.followers}>110304</Text>
              </View>
              <View style={styles.figure}>
                <Text style={styles.following}>following</Text>
                <Text style={styles.following}>1103</Text>
              </View>
            </View>
            <View styles={styles.actionButtons}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.editProfileButton}>
                <Text>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {images.map((item, index) => (
              <View key={'key' + index} style={styles.itemGallery}>
                <Image source={{ uri: item }} style={styles.imgGallery}/>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default Insta

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 0.3,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userInfoContainer: {
    flex: 1,
    padding: 10,
    marginRight: 15
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between'
  },
  imgProfileContainer: {
    padding: 10,
    flexDirection: 'row'
  },
  imgProfile: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  username: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 10,
    color: 'gray'
  },
  followers: {
    fontSize: 12,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center'
  },
  posts: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  following: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  actionButtons: {},
  editProfileButton: {
    margin: 10,
    backgroundColor: '#f4f4f4',
    shadowOffset: { width: 2, height: 4 },
    shadowColor: '#fff',
    padding: 4,
    alignItems: 'center'
  },
  imgGalleryContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imgGallery: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#fff'
  },
  itemGallery: {
    width: screenWidth / 4
  }
})
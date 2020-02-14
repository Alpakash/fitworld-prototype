import React, {useState} from 'react'
import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  LayoutAnimationStatic as LayoutAnimation,
  TouchableOpacity,
} from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen"

const RNComponents = () => {
  const [value, onChangeText] = useState('Placeholder');
  const [expanded, adjustExpand] = useState(false);

  return (
    <>
      <View alignItems={"center"}>
        <Text style={{ fontSize: 20}}>Menu</Text>
      </View>
      
      <ScrollView showsHorizontalScrollIndicator={false}
                  horizontal style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit ametac
        </Text>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          paddingHorizontal: 20,
          marginVertical: 20
        }}>
        <View style={{ flexGrow: 1 }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </View>
        <View style={{ backgroundColor: 'gray', flex: 0.2 }}/>
      </View>
    </>
  )
}

export default RNComponents

const styles = StyleSheet.create({
  scrollView: {
      backgroundColor: Colors.lighter,
  },
  text: {
    fontSize: 42
  }
});
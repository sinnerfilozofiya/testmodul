import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native"
import { StyleSheet } from 'react-native'

export default function Dex({navigation}) {
  return (
   <SafeAreaView>
    <View style={trashStyle.main}>
      <Image source={require('../assets/comingsoon.jpg')} style={trashStyle.trashImg} ></Image>
      <TouchableOpacity style={trashStyle.stopButton} onPress = {() => {
        navigation.navigate("Home")
      }}>
        <Text style={{ color: "black", fontWeight: "600" }}>Go back to Main Menu</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

const trashStyle = StyleSheet.create({
  main : {
      height : '100%',
      marginTop : '10%',
      backgroundColor : 'white',
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center'
      
  },
  trashImg : {

      width : '100%',
      height : '60%'
  },

  stopButton : {
      backgroundColor : '#54B049',
      width : '35%',
      height: '5%',
      justifyContent : 'center',
      alignItems : "center",
      borderRadius : 6,
      color : '#141823',
      marginTop : 15
      
  }
})


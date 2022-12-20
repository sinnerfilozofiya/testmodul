import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'

export default function Trash({navigation}) {
  return (
    <View style={trashStyle.main}>
      <Image source={require('../assets/trash.gif')} style={trashStyle.trashImg} ></Image>
      <TouchableOpacity style={trashStyle.stopButton} onPress = {() => {
        navigation.navigate("Home")
      }}>
        <Text style={{ color: "white", fontWeight: "600" }}>Stop the Recycling</Text>
      </TouchableOpacity>
    </View>
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
      height : '20%'
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


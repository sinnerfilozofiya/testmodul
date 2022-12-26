import React from 'react'
import {

    View,
    Text,

    TouchableOpacity,
    TextInput

} from "react-native"
import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useState } from 'react';
import { RNCamera } from 'react-native-camera';

export default function Serialcode({ navigation }) {
    const [enteredcode, setenteredcode] = useState('');


    function codehandel(enteredtext) {
        setenteredcode(enteredtext);
    }
    function submit(){
        props.onAddGoal(enteredcode);
        setenteredcode('');
    }





    const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);

    const toggleFlash = () => {
      if (flash === RNCamera.Constants.FlashMode.off) {
        setFlash(RNCamera.Constants.FlashMode.on);
      } else {
        setFlash(RNCamera.Constants.FlashMode.off);
      }
    };









    return (
        
        <View
            style={{
                marginTop: '40%',
                marginHorizontal: SIZES.padding * 3,
            }}
        >
            {/* Full Name */}
            <View style={{ marginTop: SIZES.padding * 3 }}>
                <Text style={{ color: COLORS.black, ...FONTS.body3 }}>Enter trash can serial number  :</Text>
                <TextInput
                    style={{
                        marginVertical: SIZES.padding,
                        borderBottomColor: COLORS.white,
                        borderBottomWidth: 1,
                        backgroundColor: COLORS.emerald,
                        height: 40,
                        color: COLORS.white,
                        ...FONTS.body3,
                        borderRadius: 10

                    }}
                    placeholder=""
                    placeholderTextColor={COLORS.white}
                    selectionColor={COLORS.white}
                    onChangeText={codehandel}
                    value={enteredcode}

                />
                <View style={{justifyContent:'center', alignContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={trashStyle.Button} onPress={() => {
                    console.log(enteredcode); submit;


                }}>
                    <Text style={{ color: "black", fontWeight: "600" }}>submit</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={{
                height: '40%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                
                <TouchableOpacity style={trashStyle.Button} onPress={() => {
                    //navigation.navigate("Scan");
                    toggleFlash;


                }}>
                    <Text style={{ color: "black", fontWeight: "600" }}>flashlight??</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const trashStyle = StyleSheet.create({
    main: {
        height: '100%',
        marginTop: '10%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },


    Button: {
        backgroundColor: '#54B049',
        width: '35%',
        height: '30%',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 6,
        color: '#141823',
        marginTop: 15,



    }
})


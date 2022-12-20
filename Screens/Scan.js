import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import {
    
    
    Image,
    TouchableOpacity
} from "react-native"
import { COLORS, FONTS, SIZES, icons, images } from "../constants";




const Scan = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return <View />;
}
if (hasPermission === false) {
    return <Text>No access to camera</Text>;
}

  function renderHeader() {
    return (
        <View style={{ flexDirection: 'row', marginTop: SIZES.padding * 4, paddingHorizontal: SIZES.padding * 3 }}>
            <TouchableOpacity
                style={{
                    width: 45,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => navigation.navigate("Home")}
            >
                <Image
                    source={icons.close}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.white
                    }}
                />
            </TouchableOpacity>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Scan for Payment</Text>
            </View>

            <TouchableOpacity
                style={{
                    height: 45,
                    width: 45,
                    backgroundColor: COLORS.green,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => console.log("Info")}
            >
                <Image
                    source={icons.info}
                    style={{
                        height: 25,
                        width: 25,
                        tintColor: COLORS.white
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

function renderScanFocus() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Image
                source={images.focus}
                resizeMode="stretch"
                style={{
                    marginTop: "-55%",
                    width: 200,
                    height: 300
                }}
            />
        </View>
    )
}

function renderPaymentMethods() {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 220,
                padding: SIZES.padding * 3,
                borderTopLeftRadius: SIZES.radius,
                borderTopRightRadius: SIZES.radius,
                backgroundColor: COLORS.white
            }}
        >
            <Text style={{ ...FONTS.h4 }}>Another payment methods</Text>

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginTop: SIZES.padding * 2
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    onPress={() => console.log("Phone Number")}
                >
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: COLORS.lightpurple,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={icons.phone}
                            resizeMode="cover"
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: COLORS.purple
                            }}
                        />
                    </View>
                    <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4 }}>Phone Number</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: SIZES.padding * 2
                    }}
                    onPress={() => console.log("Barcode")}
                >
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: COLORS.lightGreen,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={icons.barcode}
                            resizeMode="cover"
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: COLORS.primary
                            }}
                        />
                    </View>
                    <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4 }}>Barcode</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function onBarCodeRead(result) {
    console.log(result.data)
}

return (
    <View style={{ flex: 1, backgroundColor: COLORS.transparent }}>


            
                <View style={styles.barcodebox}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={{ height: 400, width: 400 }} />
                </View>
                <Text style={styles.maintext}>{text}</Text>

                {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
                {scanned && <Button title={'Start'} onPress={() => {
                    navigation.navigate('Trash')
                }} color='#54B049'></Button>}

            
            
            {renderPaymentMethods()}
       
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    marginTop:50,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 400,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});


export default Scan;
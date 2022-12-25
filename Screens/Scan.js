import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { BarCodeScanner } from 'expo-barcode-scanner';
import serialcode from './serialcode';

export default function Scan({ navigation }) {
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
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>
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
      <View>
        <TouchableOpacity
          style={{ marginBottom: SIZES.padding * 2, width: 60, alignItems: 'center' }}
          onPress={() => {
            navigation.navigate('Serial code')
        }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              marginBottom: 5,
              borderRadius: 20,
              backgroundColor: COLORS.lightpurple,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              source={icons.phone}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.purple
              }}
            />
          </View>
          <Text style={{ textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4 }}>serial code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
}); 
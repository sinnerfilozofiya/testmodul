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
  Modal,
  TextInput,
} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scan({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')
  const [isSerial, setSerial] = useState(false)

  const [modalVisible, setModalVisible] = useState(false);
  const [enteredcode, setenteredcode] = useState('');

  function codehandel(enteredtext) {
    setenteredcode(enteredtext);
  }
  function submit() {
    props.onAddGoal(enteredcode);
    setenteredcode('');
  }

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

  const serialCodeScreen = 
      <View>
        <View style={styles.modalComp}>
            <View
              style={{
                marginTop: '40%',
                marginHorizontal: SIZES.padding * 3,
                height: '50%'
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
                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity style={styles.Button} onPress={() => {
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

                <TouchableOpacity style={styles.Button} onPress={() => setSerial(false)} >
                  <Text style={{ color: "black", fontWeight: "600" }}>Persian People fuck german</Text>
                </TouchableOpacity>

              </View>
            </View>
        </View>

      </View>
  

  const cameraScreen = 

      <View  >
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
            onPress={() => setSerial(true)}
          /////       this button will pop up the modal screen
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

  // Return the View
  return (
    <View style={styles.container}>
        {cameraScreen}
        {isSerial ? serialCodeScreen : null}
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
    backgroundColor: 'tomato',
    position : "absolute",
    zIndex : 0
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
  },

  modalComp: {
    height: '80%',
    backgroundColor: 'red',
    width: "100%",
    position : 'relative',
    alignSelf: 'center',
    zIndex : 1
    
  }
}); 
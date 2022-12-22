import React from 'react';
import { useEffect, useState, useRef } from 'react';
import MapView,{ PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Platform, Dimensions ,Image} from 'react-native';
import { Marker } from 'react-native-maps';
import { Linking } from 'react-native'
import {  icons } from "../constants"



export default function Map() {



    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',

        }}>
        <View style={styles.container}>
            <MapView style={styles.map}
            provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 39.781929831582154,
                    longitude: 32.820331917893114,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >

                <Marker
                    coordinate={{
                        latitude: 39.781929831582154,
                        longitude: 32.820331917893114,
                    }}
                    icon ={icons.Flag }
                    

               />

                <Marker
                    coordinate={{
                        latitude: 39.78559801172713,
                        longitude: 32.81127182507178,
                    }}
                    icon ={icons.Flag }
                    

               />
                <Marker
                    coordinate={{
                        latitude: 39.79008804191174,
                        longitude: 32.81510011010867,
                    }}
                    icon ={icons.Flag }
                    

               />
            </MapView>

        </View>
        </View>

    );
}

const styles = StyleSheet.create({

    container: {

        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        overflow: 'hidden',
    },
    map: {
        flex: 1,
        width: '75%',
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 650,
        width: 375,

        backgroundColor: 'tomato',

    }

});
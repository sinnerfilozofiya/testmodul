import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function Map() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',

        }}>
            <View style={styles.container}>
                <MapView style={styles.map} />
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
        width: '75%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 650,
        width: 375,

        backgroundColor: 'tomato',

    }

});
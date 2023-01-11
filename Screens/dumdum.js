import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
    const animation = useRef(null);
    useEffect(() => {
        // You can control the ref programmatically, rather than using autoPlay
        // animation.current?.play();
    }, []);

    return (
        <View >
            <LottieView
                autoPlay
                speed={5}
                ref={animation}
                style={{
                    width: 400,
                    height: 299,
                    backgroundColor: 'transparent',
                    alignSelf: 'center'
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('../assets/99833-edupia-loading.json')}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});
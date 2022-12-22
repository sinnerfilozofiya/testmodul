/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { Home, SignUp, TierList } from "./Screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Tabs from "./navigation/tabs";
import Trash from './Screens/Trash';
import { SafeAreaView } from 'react-native-safe-area-context';
import Dex from './Screens/Dex';
import Map from './Screens/Map';
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    })

    if (!loaded) {
        return null;
    }
    return (

        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={'Home1'}
            >


                {Tabs}
                <Stack.Screen name="Homee" component={Tabs} />

                <Stack.Screen name='Trash'
                    component={Trash}

                    options={
                        {
                            headerShown: false,

                        }
                    }></Stack.Screen>


                {/*  down below is screen for wallet connect no need for log in at entry*/}

                <Stack.Screen name='SignUp'
                    component={SignUp}
                    options={
                        {
                            headerShown: true,

                        }
                    }></Stack.Screen>

                {/* <Stack.Screen name="Scan" component={Scan} /> */}

                <Stack.Screen name='Dex'
                    component={Dex}
                    options={
                        {
                            headerShown: false,

                        }
                    }></Stack.Screen>


                <Stack.Screen name='Map'
                    component={Map}
                    options={
                        {
                            headerShown: false,

                        }
                    }></Stack.Screen>


                <Stack.Screen name='Tier List'
                    component={TierList}
                    options={
                        {
                            headerShown: false,

                        }
                    }></Stack.Screen>


            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default App;

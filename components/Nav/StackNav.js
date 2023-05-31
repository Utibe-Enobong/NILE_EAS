import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../Students/Index';

const Stack= createNativeStackNavigator();

const StackNav = () => {
    <Stack.Navigator>
        <Stack.Group>
            <Stack.Screen name="Index" component={Index}></Stack.Screen>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
        </Stack.Group>
    </Stack.Navigator>
}

export default StackNav
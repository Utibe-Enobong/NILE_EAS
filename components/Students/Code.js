import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import QRGen from '../Others/QRGen'
import colors from '../../app/config/colors';

const student = {
    image: require('../../app/assets/images/photograph.png'),
    name: 'John Doe',
    number: '123456789',
    eligibility: 'Eligible',
};

const Code = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* Close Button */}
                <Pressable onPress= {() => {}}>
                    <Ionicons name="md-close" size={24} color="black" />
                </Pressable>   
            </View>

            <View>
            </View>
            <View style={styles.qr}>
                <View>
                    <QRGen student={student}></QRGen>
                </View>
            </View>

            <View style={{marginTop: 10}}>
                <Text style={styles.course}>SEN 441</Text>
                <Text style={styles.course}>2023</Text>
            <View/>
        </View>
    </View>
  )
}

export default Code

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '80%',
        borderWidth: 1,
        borderRadius: 16
    },

    course: {
        fontSize: 20,
        fontWeight: 500,
        marginVertical: 2,
        textAlign: 'center',
    },
    header: {
        alignSelf: 'flex-start',
        padding: 10
    },

    qr: {},
})
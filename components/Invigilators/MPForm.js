import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import colors from '../../app/config/colors'
import MPFormContent from './MalpracticeForm/MPFormContent';

const MPForm = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={colors.blue}/>
        <View style={styles.header}>
            <Pressable style={styles.back}>
                <Ionicons name="chevron-back" size={24} color= {colors.white} />
                <Text style={{color: colors.white, fontSize: 15}}>Back</Text>
            </Pressable>
            <View style={{width: '70%', marginLeft: 15}}>
                <Text style={styles.headerText}>Examination Malpractice Form</Text>
            </View>
        </View>
        <MPFormContent/>
    </View>
  )
}

export default MPForm

const styles = StyleSheet.create({
    back: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    container: {
        flex: 1,
    },

    header: {
        flexDirection: 'row',
        backgroundColor: colors.blue,
        paddingTop: 20,
    },

    headerText: {
        textTransform: 'uppercase',
        color: colors.white,
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center',
    }
})
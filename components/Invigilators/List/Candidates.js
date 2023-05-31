import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

import colors from '../../../app/config/colors';

const Candidates = ({regNo, name}) => {
    const [isChecked, setIsChecked] = useState(true)
    const check = () => {
        setIsChecked(!isChecked)
    }

    const styles2 = StyleSheet.create({
        check: {
            display: isChecked === true ? 'flex' : 'none',
        },

        unCheck: {
            display: isChecked === false ? 'flex' : 'none',
        },
    })

    return (
        <View style={styles.container}>

            <View style= {[{height: 'auto', padding: 1.5}, styles2.unCheck]}>
                <View style={styles.uncheck} />
            </View>
    
            {/* Image */}
            <View style={styles.img}>
                <Ionicons name="person-circle-outline" size={110} color="white" style={{marginTop: -3}}/>
            </View>
    
            {/* Student's Details */}
            <View style={styles.details}>
    
              {/* ID Number */}
              <Text style={styles.detailsText}>{regNo}</Text>
    
              {/* Name */}
              <Text style={[styles.detailsText, {fontWeight: 500, paddingRight: 2, paddingLeft: 2}]}>{name}</Text>
            </View>
        </View>
    )
}

const CandidatesEMP = ({regNo, name}) => {

    return (
        <View style={styles.container}>
    
            {/* Checked box */}
            <View style={styles.check}>
    
              {/* Icon */}
              <Ionicons name="checkmark-circle" size={24} color= {colors.green} />
    
              {/* Venue */}
              <Text style={{fontSize: 14, fontWeight: 500, paddingTop: 2, textAlign: 'right'}}>A125</Text>
            </View>

            <View style= {{height: 'auto', padding: 1.5}}>
                <View style={styles.uncheck} />
            </View>
    
            {/* Image */}
            <View style={styles.img} />
    
            {/* Student's Details */}
            <View style={styles.details}>
    
              {/* ID Number */}
              <Text style={styles.detailsText}>{regNo}</Text>
    
              {/* Name */}
              <Text style={[styles.detailsText, {fontWeight: 500, paddingRight: 2, paddingLeft: 2}]}>{name}</Text>
            </View>
        </View>
    )
}

export{ Candidates, CandidatesEMP }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: 150,
        height: 'auto',
        alignItems: 'center',
        paddingBottom: 20,
    },

    check: {
        flexDirection: 'row',
        width: 'auto',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: -9,
    },

    uncheck:{
        width: 24,
        height: 24,
        marginBottom: 5,
        borderRadius: 24,
        borderWidth: 1.6,
        paddingBottom: 2,
    },

    img: {
        flexDirection: 'column',
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: colors.blue,
    },

    details: {
        width: 150,
        height: 'auto',
        alignItems: 'center',
    },

    detailsText: {
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'center',
    }
})
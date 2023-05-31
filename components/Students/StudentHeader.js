import { Platform, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons  } from '@expo/vector-icons';

import colors from '../../app/config/colors';
import { useState } from 'react';


const StudentHeader = ({f_name, courses, exams}) => {
  const [currentC, setCurrentC]= useState(true)
  const [currentE, setCurrentE]= useState(false)

  const switchSections = () => {
    setCurrentC(!currentC)
    setCurrentE(!currentE) 
  }

  const styles2 = StyleSheet.create({
    container2: {
      ...Platform.select({
        ios: {
          backgroundColor: colors.white,
          shadowColor: colors.grey,
          shadowOffset: {
            width: 5, 
            height: 10
          },
          shadowOpacity: 1,
        },
      
        android: {
          backgroundColor: colors.white,
        }
      })
    },

    container3: {
      ...Platform.select({
        ios: {
          backgroundColor: colors.white,
        },
      
        android: {
          backgroundColor: colors.shadow,
        }
      })
    }

  })
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.blue} barStyle={'light-content'}/>

      <View style={{flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'space-between', padding: 10}}>
        <View>
          <Text>
            <Text style={{fontSize: 30, fontWeight: 400, color: 'white'}}>Hey, </Text>
            <Text style={{fontSize: 30, fontWeight: 600, textTransform: 'capitalize', color: 'white'}}>{f_name}! </Text>
          </Text>
        </View>
        <View>
          <Ionicons name="person-circle-outline" size={40} color="white" />
        </View>
      </View>
      <View style= {{flexDirection: 'row', width: 300, justifyContent: 'space-between'}}>

        <TouchableOpacity  onPress={switchSections} style= {[styles.container2, currentC ? styles2.container2 : styles2.container3]}>
            <Text style={styles.numbers}>{courses}</Text>
            <Text style={styles.text}>Courses this semester</Text>
        </TouchableOpacity>    

        <TouchableOpacity onPress={switchSections} style= {[styles.container2, currentE ? styles2.container2 : styles2.container3]}>
            <Text style={styles.numbers}>{exams}</Text>
            <Text style={styles.text}>Eligible Exams this semester</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const StudentHeader2 = ({f_name, courses, exams}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.blue} barStyle={'light-content'}/>

      <View style={{flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-between', padding: 10}}>
        <View>
          <Text>
            <Text style={{fontSize: 30, fontWeight: 400, color: 'white'}}>Hey, </Text>
            <Text style={{fontSize: 30, fontWeight: 600, textTransform: 'capitalize', color: 'white'}}>{f_name}! </Text>
          </Text>
        </View>
        <View>
          <Ionicons name="person-circle-outline" size={40} color="white" />
        </View>
      </View>
      <View style= {{flexDirection: 'row', width: 300, justifyContent: 'space-between'}}>
        <Pressable style= {styles.container21} onPress={()=> console.log('pressed')}>
            <Text style={styles.numbers}>{courses}</Text>
            <Text style={styles.text}>Courses this semester</Text>
        </Pressable>    
        <Pressable style= {styles.container2} onPress={()=> console.log('pressed')}>
            <Text style={styles.numbers}>{exams}</Text>
            <Text style={styles.text}>Eligible Exams this semester</Text>
        </Pressable>
      </View>
      <View style= {{flexDirection: 'row', alignSelf: 'flex-end', marginTop: 15, marginBottom: -15, marginRight: 10}}>
        <Text style={{fontSize: 15}}>Generate All</Text>
      </View>
    </View>
  )
}


export {StudentHeader, StudentHeader2};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,    
    borderBottomRightRadius: 36,
    borderBottomLeftRadius: 36,
    borderBottomWidth: 1,
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    backgroundColor: colors.blue
  },

  container2: {
    height: 100,
    width: 130,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },


  text: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 14,
    width: 100,
    paddingLeft: 6
  },

  numbers: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 600,
  }
})
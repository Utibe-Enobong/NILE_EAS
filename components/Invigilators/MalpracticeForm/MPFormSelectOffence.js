import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../app/config/colors';

const ContinueButton = ({text, style}) => {
  return (
    <View style={style}>
      <Pressable style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
        <Text style={styles.text}>Continue</Text>
      </Pressable>
    </View>
  )
}

const MPFormSelectOffence = () => {
  const [isCheckedA, setCheckedA] = useState(false);
  const [isCheckedB, setCheckedB] = useState(false);
  const [isCheckedC, setCheckedC] = useState(false);
  const [isCheckedD, setCheckedD] = useState(false);
  const [isCheckedE, setCheckedE] = useState(false);
  const [isCheckedF, setCheckedF] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Close Button */}
        <Pressable>
            <Ionicons name="md-close" size={24} color="black" />
        </Pressable>   
        <Text style={{fontSize: 20, fontWeight: 600, flex: 1, marginRight: "10%", textAlign: 'center'}}>Select Offence</Text>
      </View>

      <View style={styles.offences}>
        <View style={styles.section}>
          <Checkbox style={styles.checkbox} value={isCheckedA} onValueChange={setCheckedA} />
          <Text style={styles.offenceText}>Cheating</Text>
        </View>
        <View style={styles.section}>
          <Checkbox style={styles.checkbox} value={isCheckedB} onValueChange={setCheckedB} />
          <Text style={styles.offenceText}>Bringing in Foreign Material</Text>
        </View>
        <View style={styles.section}>
          <Checkbox style={styles.checkbox} value={isCheckedC} onValueChange={setCheckedC} />
          <Text style={styles.offenceText}>Violation of exam Rules</Text>
        </View>
        <View style={styles.section}>
          <Checkbox style={styles.checkbox} value={isCheckedD} onValueChange={setCheckedD} />
          <Text style={styles.offenceText}>Disobeying the Invigilator</Text>
        </View>
        <View style={styles.section}>
          <Checkbox style={styles.checkbox} value={isCheckedE} onValueChange={setCheckedE} />
          <Text style={styles.offenceText}>Causing Disturbance</Text>
        </View>
        <View style={styles.section}>
          <Checkbox style={styles.checkbox} value={isCheckedF} onValueChange={setCheckedF} />
          <Text style={styles.offenceText}>Others (Please Explain)</Text>
        </View>
      </View>

      <ContinueButton/>
    </View>
  )
}

export default MPFormSelectOffence

const styles = StyleSheet.create({
  button: {
    borderRadius: 68,
    width: 150,
    padding: 10,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  checkbox: {
    margin: 10,
  },

  container: {
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    width: '90%', 
    alignSelf: 'center'
  },

  header: {
    flexDirection: 'row',
  },

  offences:{
    padding: 20,
    paddingTop: 10
  },

  offenceText: {
    fontSize: 16,
    fontWeight: 500
  },

  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontSize: 16,
    fontWeight: 400,
    color: 'white'
  },
})
import { Platform, StyleSheet, Text, View } from 'react-native'

import MPCandidatesList from '../List/MPCandidatesList'
import MPFormStudents from './MPFormStudents'

const MPFormSelectStudent = () => {
  return (
    <View style={styles.container}>
        <MPFormStudents/>
        <MPCandidatesList/>
      </View>
  )
}

export default MPFormSelectStudent

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 60 : 20,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        borderWidth: 1,
        paddingTop: 10,
    }
})
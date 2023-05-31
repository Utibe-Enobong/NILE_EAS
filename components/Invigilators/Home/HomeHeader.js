import { StatusBar, StyleSheet, Text, View } from 'react-native'

import colors from '../../../app/config/colors'

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor={colors.blue} barStyle={'light-content'}/>
      <View style={styles.headerDetails}>
        <View style={styles.userIcon}><Text style={styles.userName}>DU</Text></View>
        <View ><Text style={styles.pageTitle}>Assigned Exams</Text></View>
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  header: {
    height: Platform.OS === 'android' ? 65 : 120,
    padding: 8,
    backgroundColor: colors.blue,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
    
  headerDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginBottom: 10
  },

  pageTitle: {
    fontWeight: 800,
    fontSize: 24,
    color: colors.white
  },  

  userIcon: {
    width: 42,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 2,
    backgroundColor: 'white',
  },

  userName: {
    color: colors.blue,
    fontSize: 20, 
    fontWeight: 700
  },
})
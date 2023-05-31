import { StyleSheet, Text, View } from 'react-native'

import HomeHeader from './Home/HomeHeader'
import ExamsList from './Home/ExamsList'

const Home = () => {
  return (
    <View>
        <HomeHeader/>
        <ExamsList/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
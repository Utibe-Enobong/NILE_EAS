import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { StudentHeader } from './StudentHeader'
import CoursesList from './CoursesList'

const Index = () => {
  return (
    <View>
        <StudentHeader f_name='Nathaniel' courses='5' exams= '3'/>
        <CoursesList/>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})
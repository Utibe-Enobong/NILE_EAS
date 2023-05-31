import { FlatList, StyleSheet } from 'react-native'

import Course from './Course'

const data = [
    {
        courseCode: 'SEN 401',
        courseName: 'Software Configuration Management',
        attendance: 50
    },
    
    {
        courseCode: 'SEN 403',
        courseName: 'Software Project Management',
        attendance: 70
    },
    
    {
        courseCode: 'SEN 407',
        courseName: 'Software Engineering professional Practice',
        attendance: 40
    },
    
    {
        courseCode: 'SEN 410',
        courseName: 'Software Architecture',
        attendance: 100
    },
    
    {
        courseCode: 'SEN 441',
        courseName: 'Human-Computer Interaction',
        attendance: 90
    },

]

const CoursesList = () => {
  return (
    <FlatList
        data= {data}
        keyExtractor={item=>item.courseCode}
        renderItem={({item}) => <Course courseCode={item.courseCode} courseName={item.courseName} attendance={item.attendance} />}
    />
  )
}

export default CoursesList

const styles = StyleSheet.create({})
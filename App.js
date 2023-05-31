import { StyleSheet, Text, View, StatusBar, ScrollView, Platform, SafeAreaView } from 'react-native';

import colors from './app/config/colors';

import ExamsList from './components/Invigilators/Home/ExamsList';
import Course from './components/Students/Course';
import HomeHeader from './components/Invigilators/Home/HomeHeader';
import CoursesList from './components/Students/CoursesList';
import Home from './components/Invigilators/Home';
import Index from './components/Students/Index';
import List from './components/Invigilators/List';
import { SearchHeaderiOS } from './components/Invigilators/List/SearchHeader';
import CandidatesList from './components/Invigilators/List/CandidatesList';
import Options from './components/Others/Options';
import MPFormContent from './components/Invigilators/MalpracticeForm/MPFormContent';
import MPFormHeader from './components/Invigilators/MalpracticeForm/MPFormStudents';
import MPForm from './components/Invigilators/MalpracticeForm/MPFormSelectStudent';
import { SubmitButtoniOS, SubmitButtonAndroid } from './components/Others/SubmitButton';
import MPFormSelectStudent from './components/Invigilators/MalpracticeForm/MPFormSelectStudent';
import MPFormSelectOffence from './components/Invigilators/MalpracticeForm/MPFormSelectOffence';
import Scanner from './components/Invigilators/Scanner/Scanner';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    // <View style= {styles.container}>
      // {/* <Text>abcde</Text> */}
      //<MPFormSelectStudent/>
    // </View>
    <StackNavigator/>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

});

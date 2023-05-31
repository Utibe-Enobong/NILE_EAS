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
import { SubmitButtoniOS, SubmitButtonAndroid } from './components/Others/SubmitButton';
import MPFormSelectStudent from './components/Invigilators/MalpracticeForm/MPFormSelectStudent';
import MPFormSelectOffence from './components/Invigilators/MalpracticeForm/MPFormSelectOffence';
import Scanner from './components/Invigilators/Scanner/Scanner';
// import { Navigati<<<<<<< HEAD
// import { NavigationContainer } from '@react-navigation/native';
// import StackNav from './components/Nav/StackNav';
import Code from './components/Students/Code';
import MPCandidatesList from './components/Invigilators/List/MPCandidatesList';
import MPForm from './components/Invigilators/MPForm';
import QRGen from './components/Others/QRGen';



const Trial = Platform.select({
  ios: () => <Scanner />,
  android: () => <Code/>,
});
// =======
import StackNavigator from './navigation/StackNavigator';
// >>>>>>> 9b79fbb05ebbb09e916e044b90cae1dcc927bac2

export default function App() {

  return (
    // <View style= {styles.container}>
      // {/* <Text>abcde</Text> */}
      //<MPFormSelectStudent/>
    // </View>
    <StackNavigator/>
// {
//     backgroundColor: '#fff',
//   },

)};

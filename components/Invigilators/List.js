import { Modal, SafeAreaView, StatusBar, StyleSheet, View, Text } from 'react-native'
import { SearchHeaderAndroid, SearchHeaderiOS } from './List/SearchHeader';
import { SubmitButtonAndroid, SubmitButtoniOS } from '../Others/SubmitButton';
import CandidatesList from './List/CandidatesList';
import colors from '../../app/config/colors';
import { useState } from 'react';



const List = () => {

  const [inputValue, setInputValue] = useState("")

  const ListHeader = Platform.select({
    ios: () => <SearchHeaderiOS value={inputValue} setInputValue={setInputValue} />,
    android: () => <SearchHeaderAndroid value={inputValue} setInputValue={setInputValue}/>,
  });


  return (
    <View>
      <StatusBar backgroundColor={colors.blue} barStyle={'light-content'}/>
      <ListHeader/>
      <CandidatesList query={inputValue}/>
    </View>

  )
}

export default List

const styles = StyleSheet.create({})
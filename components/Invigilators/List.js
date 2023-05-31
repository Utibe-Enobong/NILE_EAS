import { Modal, SafeAreaView, StatusBar, StyleSheet, View, Text } from 'react-native'
import { SearchHeaderAndroid, SearchHeaderiOS } from './List/SearchHeader';
import { SubmitButtonAndroid, SubmitButtoniOS } from '../Others/SubmitButton';
import CandidatesList from './List/CandidatesList';
import colors from '../../app/config/colors';

const ListHeader = Platform.select({
  ios: () => <SearchHeaderiOS/>,
  android: () => <SearchHeaderAndroid />,
});


const List = () => {
  return (
    <View>
      <StatusBar backgroundColor={colors.blue} barStyle={'light-content'}/>
      <ListHeader/>
      <CandidatesList/>
    </View>

  )
}

export default List

const styles = StyleSheet.create({})
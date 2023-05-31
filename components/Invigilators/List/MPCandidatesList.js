import { FlatList, Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import {Candidates} from './Candidates';
import { SubmitButtonAndroid, SubmitButtoniOS } from '../../Others/SubmitButton';

const list = [
    {
      regNo: 191212001,
      name: 'Andikan Monday',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212002,
      name: 'Hilda Onovre ',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212003,
      name: 'Twyla Odoh',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212004,
      name: 'Barry Bridger',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212005,
      name: 'Wendy Stach',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212006,
      name: 'Aliko Tugku',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212007,
      name: 'Ladipoe Atilo',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212008,
      name: 'Niklaus Mikaelson',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212009,
      name: 'Fred Ecoret',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 1912120010,
      name: 'Asim Gindau',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212011,
      name: 'Reynold Zede',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212012,
      name: 'Somica Andy',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {    
      regNo: 191212013,
      name: 'Danjuma Idris',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212014,
      name: 'Talatu Ayore',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212015,
      name: 'Layu Rede',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212016,
      name: 'Ozoemena Ati',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212017,
      name: 'Andrina Triton',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212018,
      name: 'Sandy Star',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {    
      regNo: 191212019,
      name: 'Danjuma Alamin',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212020,
      name: 'Sarah Abraham',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212021,
      name: 'Luke Parker',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212022,
      name: 'Olivia Parker',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212023,
      name: 'Solomon Grundy',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212024,
      name: 'Erika Nledim',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {    
      regNo: 191212025,
      name: 'Danladi Idris',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212026,
      name: 'Abruk Adyre',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212027,
      name: 'Telina Wethock',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212028,
      name: 'Lovonda Sway',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212029,
      name: 'Halima Abbakar',
      image: require('../../../app/assets/images/download.jpg'),
    },
    {
      regNo: 191212030,
      name: 'Siri Waters',
      image: require('../../../app/assets/images/download.jpg'),
    }
];

const MPCandidatesList = () => {
    return (
      <View style={{ alignItems:"center"}} >

        <FlatList
            contentContainerStyle= {styles.list}
            columnWrapperStyle={styles.columnSpacing}
            data= {list}
            keyExtractor= {item=>item.regNo}
            ItemSeparatorComponent={() => <View style={{ width: 16, backgroundColor: 'pink' }}/>}
            renderItem={({item}) => <TouchableOpacity onPress={() => console.log('')}><Candidates regNo={item.regNo} name= {item.name}/></TouchableOpacity>}
            numColumns= {2}
            style={styles.listContainer}
          />
      </View>
    )
}

export default MPCandidatesList

const styles = StyleSheet.create({
    list: {
        paddingTop: Platform.OS === 'ios' ? 20 : 10,
        paddingBottom: 450,
        paddingLeft: 35, 
        paddingRight: 35,
    },

    columnSpacing: {
        justifyContent: 'space-between',
    },
    button:{
      position:"absolute", 
      top: Platform.OS === 'android' ? '63%' : '50%'
    },
    listContainer:{ 
      width:"100%"
    }
})
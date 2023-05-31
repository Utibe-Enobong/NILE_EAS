import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Separator from '../../Others/Separator';

const MPFormStudents = () => {
  return (
    <View style={styles.container}>
        <View style={styles.venueContainer}>
            {/* Back Button */}
            <Pressable style={styles.close}>
                <Ionicons name="md-close" size={24} color="black" />
            </Pressable>

            {/* Course Code */}
            <View style={styles.venue}>
                <Text style={styles.code}>A119</Text>
                <AntDesign name="down" size={12} color="black" style={{paddingTop: 3}}/>
            </View>
        </View>

        <View style={styles.departments}>
            <Text style={styles.depName}>Biotechnology</Text>
            <AntDesign name="down" size={12} color="black" style={{paddingTop: 3}}/>
        </View>

        <View style={styles.search}>
            <View style={styles.searchBar}>
                <MaterialIcons name="search" size={26} color="black" style={{paddingTop: 3}} />
                <TextInput  
                    style={styles.searchText} 
                    placeholder="Search Name or ID Number"
                    onChangeText={(text) => setInputValue(text)}
                    clearButtonMode= 'always'
                />
            </View>
        </View>
        <Separator/>
    </View>
  )
}

export default MPFormStudents

const styles = StyleSheet.create({
    container:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    
    close: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    code: {
        fontSize: 20,
        fontWeight: 600,
        textAlign: 'center',
        marginRight: 3,
    },
    
    departments: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
    },
    
    depName: {
        padding: 3, 
        fontSize: 20, 
        fontWeight: 600
    },

    venue: {
        flex: 1, 
        flexDirection: 'row', 
        marginRight: "5%", 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    venueContainer: {
        flexDirection: 'row',
        width: '100%',
    },
    
    withDownArrow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
    },
    
    search: {
        flexDirection: 'row',
        width: '97%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#e8e7e6',
        height: 40,
        width: '100%',
        alignItems: 'center',
        borderRadius: 25,
        paddingLeft: 10,
        paddingRight: 10,
    },

    searchText: {
        flex: 1,
        fontSize: 15, 
        paddingLeft: 3, 
        color: '#0c0c0c', 
    },

    filterDisplay: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 3,
        marginBottom: -5,
    },

    filterIcon: {
        marginTop: -5,
        marginLeft: 5,
        padding: 5, 
        paddingLeft: 7, 
        borderRadius: 24, 
    },

    filterIconCircle: {
        marginTop: -5,
        marginLeft: 5,
        padding: 5, 
        paddingLeft: 7, 
        borderRadius: 24, 
        backgroundColor: 'blue'
    },

    checkedCont: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingRight: 5},

    filterSeparator: {
        width: 1.5,
        height: '100%',
        backgroundColor: 'black',
        alignSelf: 'center',
    },

    checked: {
        padding: 5, 
        fontSize: 14, 
        fontWeight: 700
    },

    unchecked: {
        padding: 5, 
        fontSize: 14, 
    }
})
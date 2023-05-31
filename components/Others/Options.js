import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../app/config/colors';

const Options = (props) => {
  return (
    <View>
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>{props.code}</Text>
            </View>
            <View>
                <Text style={styles.headerText}>{props.name}</Text>
            </View>
        </View>
        <View style={styles.optionSection}>
            <Pressable style={styles.options} onPress={() => console.log('view candidates')}>
                <MaterialCommunityIcons name="format-list-bulleted" size={34} color= {colors.white} />
                <Text style={styles.sectionText}>View Candidates List</Text>
            </Pressable>
            <Pressable style={styles.options} onPress={() => console.log('take attendance')}>
                <Ionicons name="md-checkmark-done-sharp" size={34} color= {colors.white} />
                <Text style={styles.sectionText}>Take Attendance</Text>
            </Pressable>
            <Pressable style={styles.options} onPress={() => console.log('report exam malpractice')}>
                <Entypo name="new-message" size={30} color= {colors.white} />
                <Text style={styles.sectionText}>Report Examination Malpractice</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Options

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: colors.blue
    },

    header: {
        alignItems: 'center',
        marginBottom: Platform.OS === 'android' ? 10 : 15,
        paddingLeft: 15,
        paddingRight: 15,
    },

    headerText: {
        fontSize: 20,
        fontWeight: 700,
        paddingTop: 2,
        color: colors.white,
        textAlign: 'center',
    },
    
    sectionText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 400,
        paddingLeft: 10,
        paddingTop: 2
    },

    options: {
        flexDirection: 'row',
        paddingBottom: 15,
        marginVertical: 5, 
        alignItems: 'center'
    },
    
    optionSection: {
        justifyContent: 'space-between',
        padding: 10,   
        paddingLeft: 30
    }    
})
import { StyleSheet, Text, View } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator'

import colors from '../../app/config/colors'

const setColor= (value) =>{
    const colorSet= [colors.red, colors.green];
  
    if (value<70){
      return colorSet[0];
    }
    else {
      return colorSet[1];
    }
};

const Course = ({courseCode, courseName, attendance}) => {
  return (
    <View style={styles.container}>
        <View style={{width: '80%'}}>
            <Text style={styles.courseCode}>{courseCode}</Text>
            <Text style={styles.courseName}>{courseName}</Text>
        </View>
        <View>
            <View>
                <CircularProgress
                    value={attendance}
                    valueSuffix={'%'}
                    radius={32.5}
                    inActiveStrokeWidth={15}
                    activeStrokeWidth={15}
                    activeStrokeColor={setColor(attendance)}
                    inActiveStrokeColor={setColor(attendance)}
                    inActiveStrokeOpacity={0.2}
                    progressValueColor={colors.black}
                />
            </View>
        </View>
    </View>
  )
}

export default Course

const styles = StyleSheet.create({
    
    container: {
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '92%',
        height: 73,
        flexDirection: 'row',
        borderBottomWidth: 1,
        marginVertical: 5,
        padding: 12
    },

    courseCode: {
        fontSize: 16,
        fontWeight: 500,
    },

    courseName: {
        fontSize: 17,
        fontWeight: 600,
        textTransform: 'capitalize',
    }
})
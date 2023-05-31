import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useState, useRef } from 'react';

import Separator from '../../Others/Separator';
import colors from '../../../app/config/colors';
import Options from '../../Others/Options';

const Exam = (props) => {
    const [detailsOpen, setDetailsOpen] = useState(false);
    const containerStyle = detailsOpen ? styles.examContainer : styles.container;
    const refRBSheet= useRef()

    const SelectOption = () => {
        return (
            <RBSheet 
                ref={refRBSheet}
                closeOnDragDown= {true}
                closeOnPressMask= {true}
                height= {Dimensions.get('window').height/2.6}
                customStyles={{
                    container: {
                        marginTop: 50,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        backgroundColor: colors.blue
                    },

                    draggableIcon: {
                        backgroundColor: colors.white,
                    },

                    wrapper: {
                      backgroundColor: "transparent"
                    }
                }}
            >
                <Options code= {props.courseCode} name= {props.courseName}/>
            </RBSheet>
        )
    }

    return (
        // Less details
        <View style={containerStyle}>
            <SelectOption/>
            {/* Container contents */}
            <Pressable onPress={() => setDetailsOpen(!detailsOpen)} style={styles.container2}>

                {/* Exam Details */}
                <View style={[styles.container3, {flex: 1}]}>

                    {/* Exam name and time container*/}
                    <View style={styles.container4}>

                        {/* Exam name */}
                        <View>
                            <Text style= {styles.code}>{props.courseCode}</Text>
                        </View>

                        {/* Exam time */}
                        <View>
                            <Text style={styles.time}>{props.time}</Text>
                        </View>    
                    </View>

                    {/* Exam Name */}
                    <View>
                        <Text style= {styles.name}>{props.courseName}</Text>
                    </View> 
                </View>

                {/* Icon */}
                <Pressable onPress={() => refRBSheet.current.open()} style={styles.options}><SimpleLineIcons name="options-vertical" size={24} color="black" /></Pressable>
            </Pressable>

            {/* More Details */}
            <View style={{display: detailsOpen === true ? "flex" : "none"}}>

                {/* Separator */}
                <View style={{marginLeft: -12, marginRight: -12}}> 
                    <Separator />
                </View>

                {/* Details */}
                <View style={[styles.container3, {marginTop: -10}]}>

                    {/* Department */}
                    <View style={styles.examDetailsContainer}>
                        <Text style={styles.examDetailsTitle}>Department(s):</Text>
                        <View style={styles.container3}>
                            <Text style={[styles.examDetails, {marginVertical: 0}]}>Software Engineering</Text>
                            <Text style={styles.examDetails}>Computer Science</Text>
                            <Text style={styles.examDetails}>Information Technology</Text>
                        </View>
                    </View>

                    {/* Course Lecturer  */}
                    <View style={styles.examDetailsContainer}>
                        <Text style={styles.examDetailsTitle}>Course Lecturer:</Text>
                        <View style={styles.container3}>
                            <Text style={[styles.examDetails, {marginVertical: 0}]}>Bilkisu Larai Muhammad-Bello</Text>
                        </View>
                    </View>

                    {/* Exam Number */}
                    <View style={styles.examDetailsContainer}>
                        <Text style={styles.examDetailsTitle}>Exam Number:</Text>
                        <View style={styles.container3}>
                            <Text style={[styles.examDetails, {marginVertical: 0}]}>192S102304</Text>
                        </View>
                    </View>

                    {/* Venue */}
                    <View style={styles.examDetailsContainer}>
                        <Text style={styles.examDetailsTitle}>Venue(s):</Text>
                        <View style={styles.vdContainer}>
                            <Text style={styles.venue}>A119 (Yours),</Text>
                            <Text style={styles.venue}>C117,</Text>
                            <Text style={styles.venue}>A125</Text>
                        </View>
                    </View>

                    {/* Duration */}
                    <View style={styles.examDetailsContainer}>
                        <Text style={styles.examDetailsTitle}>Duration:</Text>
                        <View style={styles.vdContainer}>
                            <Text style={styles.duration}>2</Text>
                            <Text style={styles.duration}>hrs</Text>
                        </View>
                    </View>

                    {/* Invigilators */}
                    <View style={[styles.examDetailsContainer, {height: 'auto'}]}>
                        <Text style={styles.examDetailsTitle}>Invigilator(s):</Text>
                        <View style={styles.container3}>
                            <Text style={[styles.examDetails, {marginVertical: 0}]}>Mrs. Gladis</Text>
                            <Text style={styles.examDetails}>Mr. Rohmanu</Text>
                            <Text style={styles.examDetails}>Mrs. Morenikeji</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
};



export default Exam

const styles = StyleSheet.create({
    code: {
        width: 68, 
        fontWeight: 600, 
        fontSize: 16, 
        textTransform: "uppercase"
    },

    container: {
        justifyContent: 'space-between',
        backgroundColor: colors.offWhite,
        borderRadius: 16,
        width: '87%',
        alignSelf: 'center',
        paddingLeft: 12,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 12,
        marginVertical: 8.5,
    },
    
    container2: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: -8,
        marginBottom: -8,
        marginLeft: -12,
        marginRight: -12,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },
    
    container3:{
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    
    container4: {
        flexDirection: 'row',
    },

    duration: {
        fontSize: 16,
        fontWeight: 400,
        paddingRight: 4,
    },
    
    examContainer: {
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        borderRadius: 16,
        width: '87%',
        alignSelf: 'center',
        paddingLeft: 12,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 12,
        marginVertical: 8.5,
        borderWidth: 1,
        // ios
        shadowColor: '#c9c9c9',
        shadowOffset: {
            width: -5, 
            height: 5
        },
        shadowOpacity: 1,
        // android
        elevation: 10,
    },
  
    examDetailsContainer: {
        flexDirection: 'row',
        paddingTop: 8,
    },
    
    examDetailsTitle: {
        fontSize: 16,
        fontWeight: 600,
        width: 140,
    },
    
    examDetails:{
        fontSize: 16,
        fontWeight: 400,
        width: 190,
        marginVertical: 2.5,
    },

    name: {
        fontWeight: 500, 
        fontSize: 16.5, 
        textTransform: "capitalize"
    },

    options: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: -8,
        marginBottom: -8,
        width: 60,
        marginRight: -12,
        paddingRight: 12,
        borderTopRightRadius: 16,
    },

    time: {
        marginLeft: 40, 
        fontWeight: 400, 
        fontSize: 16, 
        textTransform: "lowercase"
    },
    
    title: {
        flexDirection: 'row',
    },

    vdContainer: {
        flexDirection: 'row',
        width: 190,
        paddingBottom: 8,
    },

    venue: {
        fontSize: 16,
        fontWeight: 400,
        marginHorizontal: 2,
    }
})
import { useState } from 'react'
import { FlatList, KeyboardAvoidingView, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import Separator from '../../Others/Separator';
import react from 'react';

const MPFormContent = () => {
    const [invStatement, setInvStatement] = useState('')
    const [description, setDescription] = useState('')
    const images = []

    return (
        <ScrollView style={styles.container}>

            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Student</Text>
                    <Pressable style={styles.selectorArrange} onPress={() => console.log('student selected')}>
                    <Text style={styles.selector}>Select Student</Text>
                    <AntDesign name="down" size={12} color="black" style={{paddingTop: 3}}/>
                    </Pressable>
                </View>
        
                <View>
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>ID Number: </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View>
                    </View>
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>Name: </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View>
                    </View>
                </View>
            </View>
        
            <View style={styles.formSection}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Parent or legal Guardian </Text>
                </View>
        
                <View>
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>Name: </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View>
                    </View>
        
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>Relationship to Student: </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View>
                    </View>
                </View>
            </View>
    
            <View style={styles.formSection}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Department </Text>
                </View>
                <View>
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>Department Name: </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View>
                    </View>
        
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>Faculty: </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View>
                    </View>
                </View>
            </View>
    
            <View style={styles.formSection}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Courses </Text>
                </View>
        
                <View>
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>Course Code: </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View> 
                    </View>
        
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>Course Title: </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View>
                    </View>
                </View>
            </View>
    
            <View style={styles.formSection}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Examination </Text>
                </View>
        
                <View>
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>Examination Number: </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View>
                    </View>
        
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>Examination Date & Time: </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View>
                    </View>
        
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>Examination Venue: </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View>
                    </View>
        
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>Examination Type: </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View>
                    </View>
        
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>Invigilator: </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View>
                    </View>
                </View>
            </View>
    
            <View style={styles.formSection}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Nature of Offence </Text>
                    <Pressable style={styles.selectorArrange} onPress={() => console.log('offence selected')}>
                    <Text style={styles.selector}>Select Offence</Text>
                    <AntDesign name="down" size={12} color="black" style={{paddingTop: 3}}/>
                    </Pressable>
                </View>
        
                <View>
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>1. </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View>
                    </View>
        
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>2. </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View>
                    </View>
        
                    <View style={styles.formSectionContainer}>
                        <View><Text style={styles.formSectionTitle}>3. </Text></View>
                        <View><Text style={styles.formSectionResult}>191</Text></View>
                    </View>
                </View>
            </View>
    
            <View style={styles.formSection}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Malpractice Exhibits</Text>
                </View>
        
                <View>
                    <View>
                        <View>
                            <Text style={styles.formSectionTitle}>Description: </Text>
                        </View>
            
                        <View>
                            <TextInput 
                            placeholder= 'Describe the exhibit' 
                            onChangeText= {(text)=> setDescription(text)}
                            multiline= {true} 
                            style={{borderBottomWidth: 0.5, paddingLeft: 5, paddingRight: 5, marginTop: 4}}/>
                        </View>
                    </View>
        
                    <View style={{marginVertical: 15}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.formSectionTitle}>Images:</Text>
                            <View style={styles.imageName1}>
                                {/* <FlatList
                                data={images}
                                keyExtractor={(item) => item.id}
                                renderItem={({item}) => <Text style={styles.formSectionResult}>{item.name}</Text>}
                                /> */}
                                <Text style={styles.formSectionResult}>item</Text>
                            </View>
                            </View>
            
                            <Pressable style={styles.selectorArrange} onPress={() => console.log('image uploaded')}>
                            <Text style={styles.selector}>Upload Images</Text>
                            <AntDesign name="down" size={12} color="black" style={{paddingTop: 3}}/>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
    
            <View style={styles.formSection}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Invigilator's Statement</Text>
                </View>
        
                <View>
                    <TextInput 
                    placeholder= 'Write Statement' 
                    onChangeText= {(text)=> setInvStatement(text)}
                    multiline= {true} 
                    style={{borderBottomWidth: 0.5, paddingLeft: 5, paddingRight: 5, marginTop: 4}}/>
                </View>
                </View>
        
                <View style={styles.formSection}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Student's Statement</Text>
                    <Pressable style={styles.selectorArrange} onPress={() => console.log('image uploaded')}>
                    <Text style={styles.selector}>Upload Image</Text>
                    <AntDesign name="down" size={12} color="black" style={{paddingTop: 3}}/>
                    </Pressable>
                </View>
        
                <View style={styles.imageName2}>
                    <Text style={styles.formSectionResult}>item</Text>
                </View>
            </View>
    
            {/* Modals */}
    
        </ScrollView>
    )
}

export default MPFormContent

const styles = StyleSheet.create({
    androidButton: {
        borderRadius: 68,
        width: 281,
        height: 68,
        padding: 10,
        backgroundColor: '#32A431',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    container: {
        padding: 10,
        paddingBottom: 50,
    },

    header: {
      flexDirection: 'row',
      borderBottomWidth: 1.5,
      justifyContent: 'space-between',
    },
    
    headerText: {
      fontSize: 20,
      fontWeight: 600
    },
    
    formSection: {
      marginVertical: 10,
    },

    formSectionContainer: {
      flexDirection: 'row',
      marginVertical: 2,
    },

    formSectionResult : {
      fontSize: 16,
      fontWeight: 400,
    },

    formSectionTitle: {
      fontSize: 16,
      fontWeight: 500,
      marginRight: 5,
    }, 

    imageName1: {
      borderBottomWidth: 0.5, 
      marginLeft: 5, 
      marginTop: 2, 
      width: '75%'
    },
    
    imageName2: {
      borderBottomWidth: 0.8, 
      width: '100%',
      marginTop: 10,
    },

    selector: {
      fontStyle: 'italic',
      fontSize: 13,
      paddingRight: 3
    },

    selectorArrange: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 3
    }
})
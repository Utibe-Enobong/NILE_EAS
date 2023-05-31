import { Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

import Separator from '../../Others/Separator';
import colors from '../../../app/config/colors';

const SearchHeaderAndroid = () => {
    // const [filterOn, setFilterOn]= useState(false)
    const [filterIcon, setFilterIcon]= useState(true)
    const [filterIconCircle, setFilterIconCircle]= useState(false)
    const [checkedCurrent, setCheckedCurrrent] = useState(true)
    const [unCheckedCurrent, setUnCheckedCurrrent] = useState(false)

    const switchIcons = () => {
        setFilterIcon(!filterIcon)
        setFilterIconCircle(!filterIconCircle) 
    }

    const switchFilterSections = () => {
        setCheckedCurrrent(!checkedCurrent)
        setUnCheckedCurrrent(!unCheckedCurrent)
    }

    const styles2 = StyleSheet.create({
        filterDisplay: {
            display: filterIconCircle ? 'flex' : 'none'
        },

        filterIcon: {
            display: filterIcon ? 'flex' : 'none'
        },

        filterIconCircle: {
            display: filterIconCircle ? 'flex' : 'none'
        },

        checked: {
            fontWeight: checkedCurrent === true ? 700 : Platform.OS === 'iOS' ? 500 : 400
        },

        unchecked: {
            fontWeight:  unCheckedCurrent === true ? 700 : Platform.OS === 'iOS' ? 500 : 400
        }
    })

    return (
        <View style={styles.container}>
            <View><Text style={styles.code}>MAT 101</Text></View>

            <View style={styles.departments}>
                <Text style={styles.depName}>Biotechnology <Text style={{textAlign: 'center'}}>(30)</Text></Text>
                <AntDesign name="down" size={12} color={colors.white}style={{paddingTop: 3}}/>
            </View>

            <View style={styles.search}>
                <View style={styles.searchBar}>
                    <MaterialIcons name="search" size={26} color={colors.shadow} style={{paddingTop: 3}} />
                    <TextInput  
                        style={styles.searchText} 
                        placeholder="Search Name or ID Number"
                        onChangeText={(text) => setInputValue(text)}
                        clearButtonMode= 'always'
                        />
                </View>

                <View>
                    <Pressable onPress={switchIcons} style={[styles2.filterIcon, styles.filterIcon]}>
                       <Ionicons name="filter" size={24} color={colors.white} />
                    </Pressable>   

                    <Pressable onPress={switchIcons} style={[styles2.filterIconCircle, styles.filterIconCircle]}>
                       <Ionicons name="filter" size={24} color={colors.blue} />
                    </Pressable>   
                </View>
            </View>

            {/* Filters */}
            <View style={[styles.filterDisplay, styles2.filterDisplay]}>

                <Pressable 
                    style={styles.checkedCont} 
                    onPress={() => {
                        if (checkedCurrent !== true) { switchFilterSections() }
                        else {
                            // Do the dropdown list here
                        }
                        console.log("checkedCurrent is " + checkedCurrent + ", unCheckedCurrent is " + unCheckedCurrent)
                    }}
                >
                    <Text style={[styles.checked, styles2.checked]}>Checked <Text style={{textAlign: 'center'}}>(You)</Text></Text>
                    <AntDesign name="down" size={12} color={colors.white} />
                </Pressable>

                <View style={[styles.filterSeparator, ]} />

                <Pressable 
                    onPress={() => {
                        if (unCheckedCurrent !== true) { switchFilterSections() }
                        console.log("checkedCurrent is " + checkedCurrent + ", unCheckedCurrent is " + unCheckedCurrent)
                    }}
                >
                    <Text style={[styles.unchecked, styles2.unchecked]}>Unchecked </Text>
                </Pressable>
            </View>
        </View>
    )
}
const SearchHeaderiOS = () => {
    // const [filterOn, setFilterOn]= useState(false)
    const [filterIcon, setFilterIcon]= useState(true)
    const [filterIconCircle, setFilterIconCircle]= useState(false)
    const [checkedCurrent, setCheckedCurrrent] = useState(true)
    const [unCheckedCurrent, setUnCheckedCurrrent] = useState(false)

    const switchIcons = () => {
        setFilterIcon(!filterIcon)
        setFilterIconCircle(!filterIconCircle) 
    }

    const switchFilterSections = () => {
        setCheckedCurrrent(!checkedCurrent)
        setUnCheckedCurrrent(!unCheckedCurrent)
    }

    const styles2 = StyleSheet.create({
        filterDisplay: {
            display: filterIconCircle ? 'flex' : 'none'
        },

        filterIcon: {
            display: filterIcon ? 'flex' : 'none'
        },

        filterIconCircle: {
            display: filterIconCircle ? 'flex' : 'none'
        },

        checked: {
            fontWeight: checkedCurrent === true ? 700 : Platform.OS === 'iOS' ? 500 : 400
        },

        unchecked: {
            fontWeight:  unCheckedCurrent === true ? 700 : Platform.OS === 'iOS' ? 500 : 400
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.course}>
                {/* Back Button */}
                <Pressable style={styles.back}>
                    <Ionicons name="chevron-back" size={24} color= {colors.white} />
                    <Text style={{color: colors.white, fontSize: 15}}>Back</Text>
                </Pressable>

                {/* Course Code */}
                <Text style={[styles.code, {flex: 1, marginRight: "20%"}]}>MAT 101</Text>
            </View>

            <View style={styles.departments}>
                <Text style={styles.depName}>Biotechnology <Text style={{textAlign: 'center'}}>(30)</Text></Text>
                <AntDesign name="down" size={12} color= {colors.white} style={{paddingTop: 3}}/>
            </View>

            <View style={styles.search}>
                <View style={styles.searchBar}>
                    <MaterialIcons name="search" size={26} color={colors.shadow} style={{paddingTop: 3}} />
                    <TextInput  
                        style={styles.searchText} 
                        placeholder="Search Name or ID Number"
                        onChangeText={(text) => setInputValue(text)}
                        clearButtonMode= 'always'
                    />
                </View>

                <View>
                    <Pressable onPress={switchIcons} style={[styles.filterIcon, styles2.filterIcon]}>
                       <Ionicons name="filter" size={24} color= {colors.white} />
                    </Pressable>   

                    <Pressable onPress={switchIcons} style={[styles.filterIconCircle, styles2.filterIconCircle]}>
                       <Ionicons name="filter" size={24} color= {colors.blue}/>
                    </Pressable>   
                </View>
            </View>

            {/* Filters */}
            <View style={[styles.filterDisplay, styles2.filterDisplay]}>

                <Pressable 
                    style={styles.checkedCont} 
                    onPress={() => {
                        if (checkedCurrent !== true) { switchFilterSections() }
                        else {
                            // Do the dropdown list here
                        }
                        console.log("checkedCurrent is " + checkedCurrent + ", unCheckedCurrent is " + unCheckedCurrent)
                    }}
                >
                    <Text style={[styles.checked, styles2.checked]}>Checked <Text style={{textAlign: 'center'}}>(You)</Text></Text>
                    <AntDesign name="down" size={12} color={colors.white} />
                </Pressable>

                <View style={[styles.filterSeparator, ]} />

                <Pressable 
                    onPress={() => {
                        if (unCheckedCurrent !== true) { switchFilterSections() }
                        else {
                            // Do the dropdown list here
                        }
                        console.log("checkedCurrent is " + checkedCurrent + ", unCheckedCurrent is " + unCheckedCurrent)
                    }}
                >
                    <Text style={[styles.unchecked, styles2.unchecked]}>Unchecked </Text>
                </Pressable>
            </View>
        </View>
    )
}

export {SearchHeaderAndroid, SearchHeaderiOS}

const styles = StyleSheet.create({
    back: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    checked: {
        padding: 5, 
        fontSize: 14, 
        fontWeight: 700,
        color: colors.white
    },

    checkedCont: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingRight: 5
    },

    code: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.white
    },

    container:{
        backgroundColor: colors.blue,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: Platform.OS === 'ios' ? 60 : 10,
        paddingBottom: 10
    },

    course: {
        flexDirection: 'row',
        width: '100%'
    },

    departments: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
    },

    depName: {
        padding: 3, 
        fontSize: 16, 
        fontWeight: 500,
        color: colors.white
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
        backgroundColor: colors.white
    },

    filterSeparator: {
        width: 1,
        height: '100%',
        backgroundColor: 'black',
        alignSelf: 'center',
        backgroundColor: colors.white
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
        backgroundColor: colors.white,
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
        color: colors.grey, 
    },
    
    unchecked: {
        padding: 5, 
        fontSize: 14, 
        color: colors.white,
    },
    
    withDownArrow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
    },
})
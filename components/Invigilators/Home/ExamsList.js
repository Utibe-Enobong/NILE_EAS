import { Platform, SectionList, StyleSheet,  Text, View } from 'react-native'
import { format } from 'date-fns';

import Exam from './Exam'
import Separator from '../../Others/Separator';

const exams = [
  {   
    date: '2023-05-25',
    data: [
        {
            courseCode: 'SEN 311',
            courseName: 'Web Application Development',
            time: '9:00 am',
            lecturer: 'Bilkisu Larai Muhammad-Bello',
            department: ['Software Engineering'],
        },
        {
            courseCode: 'MAT 201',
            courseName: 'Linear Algebra 2',
            time: '12:00 pm'
        },
    ]
  },
  
  {   
    date: '2023-05-24',
    data: [
        {
            courseCode: 'SEN 401',
            courseName: 'Software Project Management',
            time: '2:00 pm'
        },
    ]
  },
  
  {   
    date: '2023-05-26',
    data: [
        {
            courseCode: 'GST 301',
            courseName: 'Entrepreneurial Studies 2',
            time: '11:00 am',
            lecturer: 'Oluwade Dorcas Omonayo',
            department: ['Software Engineering', 'Computer Science', 'Information Technology']
        },
        {
            courseCode: 'CSC 817',
            courseName: 'Theory of Computation',
            time: '5:00 pm'
        }
    ]
  },

  {   
    date: '2023-05-30',
    data: [
        {
            courseCode: 'SEN 401',
            courseName: 'Software Project Management',
            time: '2:00 pm'
        },
        {
            courseCode: 'CYB 203',
            courseName: 'Cyber Security in Business & Industry',
            time: '2:00 pm',
            lecturer: 'Nurudeen Ibrahim',
            department: ['Cyber Security']
        }
    ]
},

{   
    date: '2023-05-31',
    data: [
        {
            courseCode: 'BTG 412',
            courseName: 'Metabolic Engineering',
            time: '9:00 am'
        },
        {
            courseCode: 'SEN 331',
            courseName: 'Engineering Mobile Applications',
            time: '2:00 pm'
        }
    ]
  }
]

exams.sort((a, b) => new Date(a.date) - new Date(b.date));
exams.forEach((exam) => {
    exam.data.sort((a, b) => {
      const timeA = new Date(`1970-01-01 ${a.time}`);
      const timeB = new Date(`1970-01-01 ${b.time}`);
      return timeA - timeB;
    });
});

var date = new Date();

const today = format(date, 'dd/MM/yyyy');

date.setDate(date.getDate() + 1);
const tomorrow= format(date, 'dd/MM/yyyy');

const renderItems = ({ item, section }) => {
    var sectionDate = new Date(section.date)
    sectionDate= format(sectionDate, 'dd/MM/yyyy')
    if ((sectionDate === today) || (sectionDate === tomorrow)){
      return (
        <Exam courseCode={item.courseCode} courseName={item.courseName} time={item.time}/>
      )
    }
}

const renderSectionHeader = ({ section }) => {
    var sectionDate = new Date(section.date)
    sectionDate= format(sectionDate, 'dd/MM/yyyy')
    let sectionHeaderText;
    
    if (sectionDate === today) {
        return (
        <View style={styles.sectionHeader}>
            <View style={styles.separator}><Separator /></View>
            <View><Text style={styles.sectionHeaderText}>Today {sectionDate}</Text></View>
            <View style={styles.separator}><Separator /></View>
        </View>
        )
    } 
    else if (sectionDate === tomorrow) {
        return (
        <View style={styles.sectionHeader}>
            <View style={styles.separator}><Separator /></View>
            <View><Text style={styles.sectionHeaderText}>Tomorrow {sectionDate}</Text></View>
            <View style={styles.separator}><Separator /></View>
        </View>
        );
    }
    else sectionHeaderText = null;
};

const renderRemaining = () => {
    const remainingData = exams.filter(section => {
        var sectionDate = new Date(section.date)
        sectionDate= format(sectionDate, 'dd/MM/yyyy')
        return sectionDate !== today && sectionDate !== tomorrow
    });    
    return (
        <View style={{marginTop: 0, marginBottom: 50}}>
        <View style={styles.sectionHeader}>
            <View style={styles.separator}><Separator /></View>
            <View><Text style={styles.sectionHeaderText}>Further Out</Text></View>
            <View style={styles.separator}><Separator /></View>
        </View>
        <SectionList
            sections={remainingData}
            keyExtractor={(item, index) => index.toString() }        
            renderItem={ ( {item} ) => (
            <Exam courseCode={item.courseCode} courseName={item.courseName} time={item.time} lecturer={item.lecturer}/>
            )}
            renderSectionHeader={({ section }) => {
                var sectionDate = new Date(section.date)
                sectionDate= format(sectionDate, 'dd/MM/yyyy')
                
                return <Text style={{paddingLeft: 10, fontSize: 15, fontWeight: 500}}>{sectionDate}</Text>
            }}
        />
        </View>
    )
}

const ExamsList = () => { 
    return(
        <View style={styles.container}>
            <SectionList
                sections={exams}
                keyExtractor={(item, index) => item.courseCode}        
                renderItem={renderItems}
                renderSectionHeader={renderSectionHeader}
                ListFooterComponent={renderRemaining}
            />
        </View> 
    )
}

export default ExamsList

const styles = StyleSheet.create({  
    container: {
        paddingTop: 10
    },

    courseCode: {
        fontWeight: 'bold'
    },

    heading: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'android' ? 90 : 50
    },

    item: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1
    },

    sectionDate: {
        fontStyle: 'italic',
        marginTop: 5
    },

    sectionHeader: { 
        flexDirection: 'row', 
        backgroundColor: '#fff',
        width: '100%', 
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },

    
    sectionHeaderText: {
        paddingLeft: 6, 
        paddingRight: 6,
        fontSize: 16,
        fontWeight: 500
    },

    separator: { 
        flex: 1, 
        width: '100%' 
    }
})
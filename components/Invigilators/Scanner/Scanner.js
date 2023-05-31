import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

import { BarCodeScanner } from 'expo-barcode-scanner'

const Scanner = () => {

    const [ hasCameraPermission, setHasCameraPermission ] = useState(null);
    const [ scanned, setScanned ] = useState(false);
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
      (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasCameraPermission(status === 'granted');
      })();
    }, []);

    const handleQRCodeScanned = ({ type, data }) => {
      setScanned(true);
      
      const parsedData = parseStudentData(data); // Call parseStudentData function
      setStudentData(parsedData);

      setTimeout(() => {
        setScanned(false);
        setStudentData(null);
      }, 2500);
    };

    const handleCloseButton = () => {
      setScanned(false);
      setStudentData(null);
    };

    const parseStudentData = (data) => {
      const lines = data.split('\n');
      const image = getImageUrl(lines[0].split(': ')[1]);
      const name = lines[1].split(': ')[1];
      const number = lines[2].split(': ')[1];
      const eligibility = lines[3].split(': ')[1];
    
      return { image, name, number, eligibility };
    };
      
    const getImageUrl = (imageUrl) => {
      return imageUrl;
    };

    if (hasCameraPermission === null) {
        return <Text>Requesting for Camera Permission</Text>
    }

    if (hasCameraPermission === false) {
        return <Text>No Access to Camera</Text>
    }

    let content;
    if (!scanned) {
      content = (
        <View style={styles.container}>
          <Pressable style={styles.closeButton} onPress={handleCloseButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
          <BarCodeScanner 
            onBarCodeScanned={scanned ? undefined : handleQRCodeScanned}
            style={[StyleSheet.absoluteFillObject, styles.scanner]}
          />
        </View>
      );
    } 
    else {
      console.log(studentData.image)
      if (studentData) {
        content = (
          <View>
            <Image source={{uri: studentData.image}} style={{ width: 100, height: 100 }} />
            <Text>{studentData.name}</Text>
            <Text>{studentData.number}</Text>
            <Text>{studentData.eligibility}</Text>
          </View>
        );
      } 
      else {
        content = null; // Or display an error message
      }
    }

    return (
      <SafeAreaView style={styles.container}>{content}</SafeAreaView>
    )
}

export default Scanner

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  
  closeButtonText: {
    color: 'white',
  },

  container: {
      flex: 1,
      justifyContent: 'center',
  },

  scanner: {
    top: '10%',
    height: '100%',
    
  }
})
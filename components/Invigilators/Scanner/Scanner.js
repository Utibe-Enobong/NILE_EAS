import { StyleSheet, Text, View, Button, Linking } from 'react-native'
import React, { useState, useEffect } from 'react'

import { BarCodeScanner } from 'expo-barcode-scanner'

const Scanner = () => {

    const [ hasCameraPermission, setHasCameraPermission ] = useState(null);
    const [ scanned, setScanned ] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasCameraPermission(status === 'granted');
        })();
    }, []);

    const handleQRCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`QR Code With Type ${type} and data ${Linking.openURL(`${data}`)} has been scanned.`);
    };

    if (hasCameraPermission === null) {
        return <Text>Requesting for Camera Permission</Text>
    }

    if (hasCameraPermission === false) {
        return <Text>No Access to Camera</Text>
    }

    return (
        <View style={styles.container}>
          {/* <View style={{flex: 1}}> */}

            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleQRCodeScanned}
                style= {StyleSheet.absoluteFillObject}
                />
            {scanned && <Button title= 'Again?' onPress= {() => setScanned(false)}/>}
                {/* <Text>ABCDE</Text> */}
          {/* </View> */}
        </View>
    )
}

export default Scanner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})
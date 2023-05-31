import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';

const QRGen = ({ student }) => {
    const { image, name, number, eligibility } = student;

    return (
      <View>
        {/* <Image source={image} style={{ width: 100, height: 100 }} />
        <Text>{name}</Text>
        <Text>{number}</Text>
        <Text>{eligibility}</Text> */}
        <QRCode
            value={`Image: ${image}\nName: ${name}\nNumber: ${number}\nEligibility: ${eligibility}`}
            size={200}
            // logo={require('../../app/assets/images/download.jpg')}
            // logoSize={80}
            // logoBackgroundColor="transparent"
        />
      </View>
    )
}

export default QRGen

const styles = StyleSheet.create({})
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewCertificate = () => {

    const [ data, setData ] = useState('');

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@MyCertificate');
            if(value !== null) {
                setData(value);
                return value;
            }
        } catch(e) {
            console.error("Error reading data of MyCertificate");
            console.error(e);
        }
    }

    getData();

    return (
        <View>
        <Text style={styles.textStyle}>Seu Certificado:</Text>
        <Text style={styles.certificateStyle}>{data}</Text>
        </View>
    );

};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  }, 
  certificateStyle: {
    fontSize: 20,
    color: 'blue'
  }   
});

export default ViewCertificate;
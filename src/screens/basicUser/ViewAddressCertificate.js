import React, { useState } from 'react';
import {
    StyleSheet, Text, View, Button
  } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewAddressCertificate = ({ navigation }) => {

    const [ data, setData ] = useState('');

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@MyCerticateAddress');
            if(value !== null) {
                setData(value);
                console.log("view certificate=" + value);
                return value;
            }
        } catch(e) {
            console.error("Error reading data of MyAddress");
            console.error(e);
        }
    }

    getData();

    return (
        <View>
        <Text style={styles.textStyle}>Seu Certificado de Endereço:</Text>
        <Text style={styles.certificateStyle}>{data}</Text>
        <Button 
            onPress={() => {
              navigation.navigate('Home')
            }}
            title="Ok"
        />

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

export default ViewAddressCertificate;
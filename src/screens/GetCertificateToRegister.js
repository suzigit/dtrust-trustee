import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeScanner from '../component/QRCodeScanner';
  import AsyncStorage from '@react-native-async-storage/async-storage';

const GetCertificateToRegister = () => {


  const updateCaller = (data) => {
    alert(`vltou principal= ${data}`);
    storeData(data);
    getData();
};

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
  } catch (e) {
    // saving error
  }
}

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      // value previously stored
      console.log("valor lido foi=");
      console.log(value);
    }
  } catch(e) {
    // error reading value
  }
}


return (
    <View>
      <Text style={styles.textStyle}>Aponte seu celular para o QRCode com sua permissão para iniciar comunidade</Text>
      <View><QRCodeScanner updateCaller={updateCaller}/></View>
    </View>
);


};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  } 
});

export default GetCertificateToRegister;




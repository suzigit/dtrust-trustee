import React from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeScanner from '../../component/QRCodeScanner';
  import AsyncStorage from '@react-native-async-storage/async-storage';

const GetAddressCertificate = ({ navigation }) => {

  const updateCaller = (data) => {
    navigation.navigate('ViewCertificate')
    storeData(data);
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@MyCertificateAddress', value)
    } catch (e) {
      console.err("Error while saving item");
      console.err(e);
    }
  }

  return (
      <View>
        <Text style={styles.textStyle}>Aponte seu celular para o QRCode com seu certificado de endereço</Text>
        <View><QRCodeScanner updateCaller={updateCaller}/></View>
      </View>
  );

};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  } 
});

export default GetAddressCertificate;

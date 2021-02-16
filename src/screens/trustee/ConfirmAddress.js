import React from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeScanner from '../../component/QRCodeScanner';

const ConfirmAddress = ({ navigation }) => {

  const updateCaller = (inputData) => {

    const inputDataAsObject = JSON.parse(inputData);
    const subjectId = inputDataAsObject.subjectId;
    const addressData = inputDataAsObject.addressData;
    
    //TODO: verificar erro
    
    navigation.navigate('ConfirmAddressStep2', {subjectId, addressData});

  };


  return (
      <View>
        <Text style={styles.textStyle}>Aponte seu celular para o QRCode do endereço a confirmar</Text>
        <View><QRCodeScanner updateCaller={updateCaller}/></View>
      </View>
  );

};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  } 
});

export default ConfirmAddress;
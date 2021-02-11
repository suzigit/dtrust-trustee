import React from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeScanner from '../component/QRCodeScanner';


const GetCertificateToRegister = () => {


return (
    <View>
      <Text style={styles.textStyle}>Aponte seu celular para o QRCode com sua permissão para iniciar comunidade</Text>
      <View><QRCodeScanner/></View>
    </View>
);


};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  } 
});

export default GetCertificateToRegister;




import React, { useEffect } from 'react';
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
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }  
});

export default GetCertificateToRegister;




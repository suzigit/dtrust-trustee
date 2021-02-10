import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking
  } from 'react-native';
  //import QRCodeScanner from 'react-native-qrcode-scanner';
  //import { RNCamera } from 'react-native-camera';
  

const GetCertificateToRegister = () => {
/*
    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err)
        );
      };    

  return (
    <View>
      <Text style={styles.textStyle}>Aponte seu celular para QR Code que contém sua permissão para iniciar comunidade</Text>
    
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />

    </View>

  );
*/
return (
    <View>
      <Text style={styles.textStyle}>Aponte seu celular para QR Code que contém sua permissão para iniciar comunidade</Text>
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




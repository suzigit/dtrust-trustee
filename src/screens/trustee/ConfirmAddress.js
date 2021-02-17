import React from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeScanner from '../../component/QRCodeScanner';
  import i18n from 'i18n-js';

const ConfirmAddress = ({ navigation }) => {

  const updateCaller = (inputData) => {

    const inputDataAsObject = JSON.parse(inputData);
    const subjectId = inputDataAsObject.subjectId;
    const addressData = inputDataAsObject.addressData;
    
    if (!subjectId) {
      navigation.navigate('ErrorState', {text:"SubjectId not found"});
    }
    else if (!addressData) {
      navigation.navigate('ErrorState', {text:"AddressData not found"});
    }
    else {
      navigation.navigate('ConfirmAddressStep2', {subjectId, addressData});
    }

  };


  return (
      <View>
        <Text style={styles.textStyle}>{i18n.t('general.pointCellToQRCodeToGenerateCertificate')}</Text>
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
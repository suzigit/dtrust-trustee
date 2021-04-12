import React from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeScanner from '../../component/QRCodeScanner';
  import i18n from 'i18n-js';

const ConfirmAddress = ({ navigation }) => {

  const updateCaller = (infoRequest) => {
      navigation.navigate('ConfirmAddressStep2', {infoRequest});
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
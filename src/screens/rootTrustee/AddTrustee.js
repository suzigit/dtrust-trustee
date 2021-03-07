import React from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeScanner from '../../component/QRCodeScanner';
  import i18n from 'i18n-js';

  
const AddTrustee = ({ navigation }) => {

  const updateCaller = (infoTrustee) => {
    navigation.navigate('AddTrusteeStep2', {infoTrustee});
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

export default AddTrustee;




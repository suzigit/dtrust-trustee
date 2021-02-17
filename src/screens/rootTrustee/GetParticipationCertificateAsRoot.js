import React, { useContext } from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeScanner from '../../component/QRCodeScanner';
  import Context from '../../context/Context';
  import i18n from 'i18n-js';

  
const GetParticipationCertificateAsRoot = ({ navigation }) => {

  const { saveMyParticipationCertificate } = useContext(Context);

  const updateCaller = (data) => {
    navigation.navigate('ViewParticipationCertificateAsRoot')
    saveMyParticipationCertificate(data);
  };

  return (
      <View>
        <Text style={styles.textStyle}>{i18n.t('rootTrustee.pointCellToQRCodeToGenerateCertificate')}</Text>
        <View><QRCodeScanner updateCaller={updateCaller}/></View>
      </View>
  );
};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  } 
});

export default GetParticipationCertificateAsRoot;
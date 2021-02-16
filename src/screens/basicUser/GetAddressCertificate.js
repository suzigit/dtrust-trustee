import React, {useContext} from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeScanner from '../../component/QRCodeScanner';
  import Context from '../../context/Context';
  import i18n from 'i18n-js';

const GetAddressCertificate = ({ navigation }) => {

  const { saveMyAddressCertificate } = useContext(Context);


  const updateCaller = (data) => {
    navigation.navigate('ViewAddressCertificate')
    saveMyAddressCertificate(data);
  };


  return (
      <View>
        <Text style={styles.textStyle}>{i18n.t('general.pointCellToQRCodeofYourCertificate')}</Text>
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

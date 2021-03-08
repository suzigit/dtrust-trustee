import React, { useContext } from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeScanner from '../../component/QRCodeScanner';
  import Context from '../../context/Context';
  import i18n from 'i18n-js';

  
const GetRootTrusteeData = ({ navigation }) => {

  const { saveMyRootTrusteeInfo } = useContext(Context);

  const updateCaller = (data) => {
    navigation.pop(2);
    navigation.push('HomeScreenTrustee');
    saveMyRootTrusteeInfo(data);
  };

  return (
      <View>
        <Text style={styles.textStyle}>{i18n.t('trustee.getRootTrusteeData')}</Text>
        <View><QRCodeScanner updateCaller={updateCaller}/></View>
      </View>
  );
};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  } 
});

export default GetRootTrusteeData;
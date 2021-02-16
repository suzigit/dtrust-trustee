import React from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeScanner from '../../component/QRCodeScanner';

const AddTrustee = ({ navigation }) => {

  const updateCaller = (subjectId) => {
    navigation.navigate('AddTrusteeStep2', {subjectId});
  };


  return (
      <View>
        <Text style={styles.textStyle}>Aponte seu celular para o QRCode da pessoa confiável a incluir</Text>
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




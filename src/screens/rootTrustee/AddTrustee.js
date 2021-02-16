import React from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeScanner from '../../component/QRCodeScanner';

const AddTrustee = ({ navigation }) => {

  const updateCaller = (idTrusteeCandidate) => {
    navigation.navigate('AddTrusteeStep2', {idTrusteeCandidate});
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




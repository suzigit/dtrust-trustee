import React, { useContext } from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeScanner from '../component/QRCodeScanner';
  import Context from '../context/Context';

const GetParticipationCertificate = ({ navigation }) => {

  const { saveMyParticipationCertificate } = useContext(Context);

  const updateCaller = (data) => {
    navigation.navigate('ViewParticipationCertificate')
    saveMyParticipationCertificate(data);
  };

  return (
      <View>
        <Text style={styles.textStyle}>Aponte seu celular para o QRCode com sua permissão para iniciar comunidade</Text>
        <View><QRCodeScanner updateCaller={updateCaller}/></View>
      </View>
  );
};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  } 
});

export default GetParticipationCertificate;
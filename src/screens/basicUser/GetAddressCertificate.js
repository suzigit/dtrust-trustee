import React, {useContext} from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeScanner from '../../component/QRCodeScanner';
  import Context from '../../context/Context';

const GetAddressCertificate = ({ navigation }) => {

  const { saveMyAddressCertificate } = useContext(Context);


  const updateCaller = (data) => {
    navigation.navigate('ViewAddressCertificate')
    saveMyAddressCertificate(data);
  };


  return (
      <View>
        <Text style={styles.textStyle}>Aponte seu celular para o QRCode com seu certificado de endereço</Text>
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

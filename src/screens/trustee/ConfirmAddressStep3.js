import React, { useContext, useState } from 'react';
import {
    StyleSheet, Text, View, Button
  } from 'react-native';
import Context from '../../context/Context';
import QRCodeGenerator from '../../component/QRCodeGenerator';


const ConfirmAddressStep3 = ({ navigation }) =>  {

  const addressData = navigation.getParam("addressData");
  const nameAddressCertificateCandidate = navigation.getParam("nameAddressCertificateCandidate");
  const { signAddressCertificate } = useContext(Context);
  const [ signedData, setSignedData] = useState("")

  const getSignedData = async () => {
    try {   
        const value = await signAddressCertificate(addressData, nameAddressCertificateCandidate);
        setSignedData(value);
        return value;
      } catch(e) {
        console.error("Error reading data of getSignedData");
        console.error(e);
    }

  } 

  getSignedData();

    return (
        <View>
        <Text style={styles.textStyle}>QRCode Resposta para Confirmação de Endereço:</Text>        
        <Text style={styles.certificateStyle}>{addressData}</Text>
        <Text style={styles.certificateStyle}>{nameAddressCertificateCandidate}</Text>
        
        {signedData!=""? <View><QRCodeGenerator data={signedData}/></View> : <Text style={styles.certificateStyle}>Carregando...</Text>}

        <Button 
            onPress={() => {
              navigation.navigate('Home')
            }}
            title="Ok"
        />
        </View>
    );
    

};


const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20
    }, 
    certificateStyle: {
      fontSize: 20,
      color: 'blue'
    }   
  });

export default ConfirmAddressStep3;
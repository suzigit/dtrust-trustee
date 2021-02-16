import React, { useContext, useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, Button
  } from 'react-native';
import Context from '../../context/Context';
import QRCodeGenerator from '../../component/QRCodeGenerator';


const ConfirmAddressStep3 = ({ navigation }) =>  {

  const subjectId = navigation.getParam("subjectId");
  const subjectName = navigation.getParam("subjectName");
  const addressData = navigation.getParam("addressData");

  const { signAddressCertificate } = useContext(Context);
  const [ signedData, setSignedData] = useState("")

  const getSignedData = async () => {
    try {   
        const value = await signAddressCertificate(subjectId, subjectName, addressData);
        setSignedData(value);
        return value;
      } catch(e) {
        console.error("Error reading data of getSignedData");
        console.error(e);
    }

  } 

//  <Text style={styles.certificateStyle}>{subjectId}</Text>
//  <Text style={styles.certificateStyle}>{subjectName}</Text>
//  <Text style={styles.certificateStyle}>{addressData}</Text>
  console.log("certificado de endereço=" + signedData);

  useEffect (() => {
    getSignedData();
  }, []);


    return (
        <View>
        <Text style={styles.textStyle}>QRCode Resposta para Confirmação de Endereço:</Text>   
        
        {signedData!=""? <View><QRCodeGenerator data={signedData}/></View> : <Text style={styles.certificateStyle}>Aguarde, gerando QRCode...</Text>}

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
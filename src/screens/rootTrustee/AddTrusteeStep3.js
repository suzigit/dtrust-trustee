import React, { useContext, useState } from 'react';
import {
    StyleSheet, Text, View, Button
  } from 'react-native';
import Context from '../../context/Context';
import QRCodeGenerator from '../../component/QRCodeGenerator';


const AddTrusteeStep3 = ({ navigation }) =>  {

  const idTrusteeCandidate = navigation.getParam("idTrusteeCandidate");
  const nameTrusteeCandidate = navigation.getParam("localName");
  const { signTrusteeCertificate } = useContext(Context);
  const [ signedData, setSignedData] = useState("")

  const getSignedData = async () => {
    try {   
        const value = await signTrusteeCertificate(idTrusteeCandidate, nameTrusteeCandidate);
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
        <Text style={styles.textStyle}>QRCode Resposta para Inclusão de Pessoa Confiável:</Text>        
        <Text style={styles.certificateStyle}>{idTrusteeCandidate}</Text>
        <Text style={styles.certificateStyle}>{nameTrusteeCandidate}</Text>
        
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

export default AddTrusteeStep3;
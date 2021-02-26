import React, { useContext, useEffect, useState } from 'react';
import {
    StyleSheet, Text, View, Button
  } from 'react-native';
import Context from '../../context/Context';
import QRCodeGenerator from '../../component/QRCodeGenerator';
import i18n from 'i18n-js';


const AddTrusteeStep3 = ({ navigation }) =>  {

  const subjectId = navigation.getParam("subjectId");
  const subjectName = navigation.getParam("subjectName");

  const { signTrusteeCertificate } = useContext(Context);
  const [ signedData, setSignedData] = useState("")

  const getSignedData = async () => {
    try {   
        const value = await signTrusteeCertificate(subjectId, subjectName);
        setSignedData(value);
        return value;
      } catch(e) {
        console.error("Error reading data of getSignedData");
        console.error(e);
    }

  } 

  // <Text style={styles.certificateStyle}>{subjectId}</Text>
  // <Text style={styles.certificateStyle}>{subjectName}</Text>

  useEffect (() => {
    getSignedData();
  }, []);

  console.log("certificado de trustee=" + signedData);

    return (
        <View>
        <Text style={styles.textStyle}>{i18n.t('rootTrustee.participationCertificateOfOthers')}</Text>        
        
        {signedData!=""? <View><QRCodeGenerator data={signedData}/></View> : <Text style={styles.certificateStyle}>{i18n.t('general.waitToCreate')}</Text>}

        <Button 
            onPress={() => {
              navigation.navigate('HomeScreenRootTrustee')
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
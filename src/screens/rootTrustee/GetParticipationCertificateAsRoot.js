import React, { useState, useEffect, useContext } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';
  import Context from '../../context/Context';
  import i18n from 'i18n-js';

  
const GetParticipationCertificateAsRoot = ({ navigation }) => {

  const { getRootTrusteeCertificate, saveMyParticipationCertificate } = useContext(Context);

  const [ data, setData ] = useState('');

  useEffect (() => {

    getRootTrusteeCertificate( (resultDataAsJson) => {

      if (resultDataAsJson["notFound"]=="true") {
        setData(null);
      }
      else {
        
        setData("anystring");
        const certificate = 
        {
            data: resultDataAsJson.certificate,
            sig:  resultDataAsJson.sig
        }
        console.log("certificate to save=");
        console.log(JSON.stringify(certificate));

        saveMyParticipationCertificate(JSON.stringify(certificate));
        const myChainOfTrust = {
          tid: resultDataAsJson.tid,
          pbkey: resultDataAsJson.pbkey
        }
        console.log(myChainOfTrust);        

//        saveMyChainOfTrust(myChainOfTrust);
      }
    })
    
  }, []);


  return (
      <View>
        {data==""? <Text style={styles.textStyle}>{i18n.t('rootTrustee.veryingCertificateState')}</Text> :
        (data!=null) ?
        <View>
        <Text style={styles.textStyle}>{i18n.t('rootTrustee.certificateIsReadyAndReceived')}</Text>
        <Button 
            onPress={async () => {
              navigation.pop(3);
              navigation.push('HomeScreenRootTrustee')
            }}
            title="OK"
        />
        </View>:
        <Text style={styles.errorTextStyle}>{i18n.t('rootTrustee.certificateNotReadyorNotReceived')}</Text>
      }
      </View>
  );
};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  errorTextStyle: {
    fontSize: 15,
    color: 'red'
  }, 
});

export default GetParticipationCertificateAsRoot;
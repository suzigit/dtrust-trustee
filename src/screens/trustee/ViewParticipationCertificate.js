import React, { useState, useEffect, useContext } from 'react';
import {
    StyleSheet, Text, View, Button
  } from 'react-native';
import Context from '../../context/Context';
import QRCodeGenerator from '../../component/QRCodeGenerator';
import i18n from 'i18n-js';


const ViewParticipationCertificate = ({ navigation }) => {

    const [ data, setData ] = useState('');
    const { getMyTrusteeCertificate } = useContext(Context);

    useEffect (() => {
      getMyTrusteeCertificate((certificate) => {
        setData(certificate);
        console.log("certificado de participacao no ViewParticipationCertificate=" + data);
      });

    }, []);
  

    return (
        <View>
        <Text style={styles.textStyle}>{i18n.t('trustee.participationCertificate')}</Text>
        {data!=""? <View><QRCodeGenerator data={data}/></View> : <Text style={styles.certificateStyle}>{i18n.t('general.waitToCreate')}</Text>}


        <Button 
            onPress={() => {
              navigation.navigate('HomeScreenTrustee')
            }}
            title="Ok"
        />

        <Button 
            onPress={() => {
              navigation.navigate('ViewRootTrusteeCertificate');
            }}
            title={i18n.t('navigation.Trustee.viewRootTrusteeQRCodeCertificate')}
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
  }   
});

export default ViewParticipationCertificate;
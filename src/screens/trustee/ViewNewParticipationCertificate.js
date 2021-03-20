import React, { useState, useEffect, useContext } from 'react';
import {
    StyleSheet, Text, View, Button
  } from 'react-native';
import Context from '../../context/Context';
import QRCodeGenerator from '../../component/QRCodeGenerator';
import i18n from 'i18n-js';



const ViewNewParticipationCertificate = ({ navigation }) => {

    const [ data, setData ] = useState('');
    const { getMyTrusteeCertificate } = useContext(Context);

    useEffect (() => {
      getMyTrusteeCertificate((certificate) => {
        setData(certificate);
        console.log("certificado de participacao no ViewNewParticipationCertificate=" + data);
      });
    }, []);
  
//        <Text style={styles.certificateStyle}>{data}</Text>

    return (
        <View>
        <Text style={styles.textStyle}>{i18n.t('trustee.participationCertificate')}</Text>
        {data!=""? <View><QRCodeGenerator data={data}/></View> : <Text style={styles.certificateStyle}>{i18n.t('general.waitToCreate')}</Text>}

        <Button 
            onPress={() => {
              navigation.pop(5);
              navigation.push('HomeScreenTrustee')
            }}
            title={i18n.t('general.startToUseCertificate')}
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

export default ViewNewParticipationCertificate;
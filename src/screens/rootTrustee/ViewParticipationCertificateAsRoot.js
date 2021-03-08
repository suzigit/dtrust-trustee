import React, { useState, useEffect, useContext } from 'react';
import {
    StyleSheet, Text, View, Button
  } from 'react-native';
import Context from '../../context/Context';
import QRCodeGenerator from '../../component/QRCodeGenerator';
import i18n from 'i18n-js';


const ViewParticipationCertificate = ({ navigation }) => {

    const [ data, setData ] = useState('');
    const { getMyRootCertificate } = useContext(Context);

    useEffect (() => {
      getMyRootCertificate((addrCertificate) => {
        setData(addrCertificate);
      });
    }, []);
  
    console.log("certificate=" + data);
//        <Text style={styles.certificateStyle}>{data}</Text>

    return (
        <View>
        <Text style={styles.textStyle}>{i18n.t('trustee.participationCertificate')}</Text>
        {data!=""? <View><QRCodeGenerator data={data}/></View> : <Text style={styles.certificateStyle}>{i18n.t('general.waitToCreate')}</Text>}

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

export default ViewParticipationCertificate;
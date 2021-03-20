import React, { useState, useEffect, useContext } from 'react';
import {
    StyleSheet, Text, View, Button
  } from 'react-native';
import Context from '../../context/Context';
import QRCodeGenerator from '../../component/QRCodeGenerator';
import i18n from 'i18n-js';


const ViewAddressCertificate = ({ navigation }) => {

    const [ data, setData ] = useState('');
    const [ trusteeData, setTrusteeData ] = useState('');

    const { getMyAddressCertificate, getMyTrusteeInfo } = useContext(Context);

    useEffect (() => {
      getMyAddressCertificate((addrCertificate) => {
        setData(addrCertificate);
      });

      getMyTrusteeInfo((data) => {
        console.log("#### exibindo dados do root trustee = " + data);
        setTrusteeData(data);
      });

    }, []);
  
    console.log("certificado de endereço=" + data);
//        <Text style={styles.certificateStyle}>{data}</Text>

    return (
        <View>
        <Text style={styles.textStyle}>{i18n.t('basicUser.addressCertificate')}:</Text>
        {data!=""? <View><QRCodeGenerator data={data}/></View> : <Text style={styles.certificateStyle}>{i18n.t('general.waitToCreate')}</Text>}

        <Text style={styles.textStyle}>{i18n.t('basicUser.trusteeData')}</Text>
        {data!=""? <View><QRCodeGenerator data={trusteeData}/></View> : <Text style={styles.certificateStyle}>{i18n.t('general.waitToCreate')}</Text>}

        <Button 
            onPress={() => {
              navigation.navigate('HomeScreenBasicUser');
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
  }   
});

export default ViewAddressCertificate;
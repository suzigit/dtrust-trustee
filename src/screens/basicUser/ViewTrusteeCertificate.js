import React, { useState, useEffect, useContext } from 'react';
import {
    StyleSheet, Text, View, Button
  } from 'react-native';
import Context from '../../context/Context';
import QRCodeGenerator from '../../component/QRCodeGenerator';
import i18n from 'i18n-js';


const ViewTrusteeCertificate = ({ navigation }) => {

    const [ trusteeData, setTrusteeData ] = useState('');

    const { getMyTrusteeInfo } = useContext(Context);

    useEffect (() => {
      getMyTrusteeInfo((data) => {
        console.log("#### exibindo dados do trustee = " + data);
        setTrusteeData(data);
      });

    }, []);
  
    return (
        <View>

        <Text style={styles.textStyle}>{i18n.t('basicUser.trusteeData')}</Text>
        {trusteeData!=""? <View><QRCodeGenerator data={trusteeData}/></View> : <Text style={styles.certificateStyle}>{i18n.t('general.waitToCreate')}</Text>}

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

export default ViewTrusteeCertificate;
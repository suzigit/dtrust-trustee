import React, { useState, useEffect, useContext } from 'react';
import {
    StyleSheet, Text, View, Button
  } from 'react-native';
import Context from '../../context/Context';
import QRCodeGenerator from '../../component/QRCodeGenerator';
import i18n from 'i18n-js';


const ViewRootTrusteeCertificate = ({ navigation }) => {

    const [ rootTrusteeData, setRootTrusteeData ] = useState('');
    const { getMyRootTrusteeInfo } = useContext(Context);

    useEffect (() => {

      getMyRootTrusteeInfo((data) => {
        console.log("#### exibindo dados do root trustee = " + data);
        setRootTrusteeData(data);
      });

    }, []);
  

    return (
        <View>

        <Text style={styles.textStyle}>{i18n.t('trustee.rootTrusteeData')}</Text>
        {rootTrusteeData!=""? <View><QRCodeGenerator data={rootTrusteeData}/></View> : <Text style={styles.certificateStyle}>{i18n.t('general.waitToCreate')}</Text>}

        <Button 
            onPress={() => {
              navigation.navigate('HomeScreenTrustee')
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

export default ViewRootTrusteeCertificate;
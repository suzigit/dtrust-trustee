import React, { useState, useEffect, useContext } from 'react';
import {
    StyleSheet, Text, View, Button
  } from 'react-native';
import i18n from 'i18n-js';
import Context from '../../context/Context';

  
const ViewDataParticipationCertificateAsRoot = ({ navigation }) => {

    const [ id, setId ] = useState('');
    const [ name, setName ] = useState('');
    const [ date, setDate ] = useState('');


    const { getMyRootCertificate } = useContext(Context);

    useEffect (() => {
        getMyRootCertificate((certificate) => {
            const certificateAsJson = JSON.parse(certificate);
            setId(certificateAsJson.data.subkey);  
            setName(certificateAsJson.data.subnm); 
            const d = new Date(certificateAsJson.data.iat);
            const formattedD = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
            setDate(formattedD);
        });

    }, []);


  return (

      <View style={styles.marginTop}>

        <Text style={styles.textStyle}>{i18n.t('general.yourIdentifier')}</Text>
        <Text style={styles.input}>{id}</Text>

        <Text style={styles.textStyle}>{i18n.t('general.yourName')}</Text>      
        <Text style={styles.input}>{name}</Text>

        <Text style={styles.textStyle}>{i18n.t('general.issuedAt')}</Text>      
        <Text style={styles.input}>{date}</Text>



        <Button 
            onPress={() => {
              navigation.navigate('HomeScreenRootTrustee');
            }}
            title="Ok"
        />

      </View>
    )

};


const styles = StyleSheet.create({
  textStyle: {
    marginTop: 10,
    fontSize: 20
  },
  errorTextStyle: {
    fontSize: 15,
    marginTop: 0,
    color: 'red',
    marginLeft: 15,
  },    
  input: {
    backgroundColor: '#DCDCDC',
    borderRadius: 5,
    borderColor: 'black',
    fontSize: 20,
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15
  },
  marginTop: {
    marginTop: 15,
  }
});


export default ViewDataParticipationCertificateAsRoot;
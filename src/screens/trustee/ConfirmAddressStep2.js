import React, { useState } from 'react';
import {
    StyleSheet, Text, View, Button, TextInput
  } from 'react-native';
  import i18n from 'i18n-js';

  
const ConfirmAddressStep2 = ({ navigation }) => {

  const infoRequest = navigation.getParam("infoRequest");
  const inputRequestAsObject = JSON.parse(infoRequest);
  const subjectId = inputRequestAsObject.subdid;
  const subjectName = inputRequestAsObject.subnm;
  const addressData = inputRequestAsObject.addr;

  /*
  if (!subjectId) {
    navigation.navigate('ErrorState', {text:"SubjectId not found"});
  }
  else if (!addressData) {
    navigation.navigate('ErrorState', {text:"AddressData not found"});
  }
*/

  return (

      <View style={styles.marginTop}>

      <Text style={styles.textStyle}>{i18n.t('trustee.basicUserId')}</Text>
      <Text style={styles.input}>{subjectId}</Text>

      <Text style={styles.textStyle}>{i18n.t('trustee.addressToConfirm')}</Text>
      <Text style={styles.input}>{addressData}</Text>

      <Text style={styles.textStyle}>{i18n.t('trustee.nameWhoLivesThere')}</Text>      
      <Text style={styles.input}>{subjectName}</Text>


      <View style={styles.marginTop}>
      <Button 
      onPress={() => {
        navigation.navigate('ConfirmAddressStep3', {subjectId, subjectName, addressData});
      }}
      title={i18n.t('general.generateQRCode')}
      />
      </View>

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


export default ConfirmAddressStep2;
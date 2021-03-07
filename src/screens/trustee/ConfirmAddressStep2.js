import React, { useState } from 'react';
import {
    StyleSheet, Text, View, Button, TextInput
  } from 'react-native';
  import i18n from 'i18n-js';

  
const ConfirmAddressStep2 = ({ navigation }) => {

  const [ localName, setLocalName ] = useState('');

  const subjectId = navigation.getParam("subjectId");
  const addressData = navigation.getParam("addressData");

//      { localName.length > 0 && localName.length < 4 ? <Text style={styles.errorTextStyle} >O nome digitado está muito pequeno</Text> : null }

  return (

      <View style={styles.marginTop}>
      <Text style={styles.textStyle}>{i18n.t('trustee.addressToConfirm')}</Text>
      <Text style={styles.input}>{addressData}</Text>

      <Text style={styles.textStyle}>{i18n.t('trustee.nameWhoLivesThere')}</Text>      
      <TextInput style={styles.input} 
          autoCapitalize="words" 
          autoCorrect={false} 
          placeholder={i18n.t('general.typeHere')}
          onChangeText={setLocalName}
      />


      <View style={styles.marginTop}>
      <Button 
      onPress={() => {
        navigation.navigate('ConfirmAddressStep3', {subjectId, addressData, subjectName: localName});
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
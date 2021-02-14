import React, { useState } from 'react';
import {
    StyleSheet, Text, View, Button, TextInput
  } from 'react-native';

const AddTrusteeStep2 = ({ navigation }) => {

  const [ localName, setLocalName ] = useState('');

  const idTrusteeCandidate = navigation.getParam("idTrusteeCandidate");

    return (

      <View style={styles.marginTop}>
      <Text style={styles.textStyle}>Identificador da pessoa confiável lido do QRCode:</Text>
      <Text style={styles.input}>{idTrusteeCandidate}</Text>

      <Text style={styles.textStyle}>Nome da pessoa confiável:</Text>      
      <TextInput style={styles.input} 
          autoCapitalize="words" 
          autoCorrect={false} 
          placeholder="Digite aqui"
          onChangeText={setLocalName}
      />

      { localName.length > 0 && localName.length < 4 ? <Text style={styles.errorTextStyle} >O nome digitado está muito pequeno</Text> : null }

      <View style={styles.marginTop}>
      <Button 
      onPress={() => {
        navigation.navigate('AddTrusteeStep3', {idTrusteeCandidate, localName});
      }}
      title="Gerar QRCode resposta"
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
  },
  marginTop: {
    marginTop: 15,
  }
});


export default AddTrusteeStep2;
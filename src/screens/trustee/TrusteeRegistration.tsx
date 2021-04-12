import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import Context from '../../context/Context';
import i18n from 'i18n-js';

const TrusteeRegistration = ({ navigation }) => {

  const [ localName, setLocalName ] = useState('');

  const { getMyName, saveMyName, getMyPublicKey } = useContext(Context);

  useEffect (() => {
    getMyName(setLocalName)
  }, []);

  return (

    <View style={styles.marginTop}>
        <Text style={styles.textStyle}>{i18n.t('general.yourIdentifier')}</Text>
        <Text style={styles.input}>{getMyPublicKey()}</Text>

        <Text style={styles.textStyle}>{i18n.t('general.yourName')}</Text>      
        <TextInput style={styles.input} 
            autoCapitalize="words" 
            autoCorrect={false} 
            defaultValue={localName} 
            placeholder={i18n.t('general.typeHere')}
            onChangeText={setLocalName}
        />



        <View style={styles.marginTop}>
        <Button 
            onPress={async () => {
              console.log("salvando nome=" + localName);
                saveMyName(localName);
                navigation.navigate('AskToParticipate');

              }}
            title={i18n.t('general.generateQRCode')}
        />
        </View>

    </View>
  );
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
    marginRight: 15,

  },
  marginTop: {
    marginTop: 15,
  }
});

export default TrusteeRegistration;
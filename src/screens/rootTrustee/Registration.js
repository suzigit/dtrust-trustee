import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import Context from '../../context/Context';
import i18n from 'i18n-js';

const Registration = ({ navigation }) => {

  const secretCodeToCompare = 'ABCD1234!';

  const [ localName, setLocalName ] = useState('');
  const [ secretCode, setSecretCode ] = useState('');

  const { getMyName, saveMyName, getMyPublicKey, askRootTrusteeCertificate } = useContext(Context);

  useEffect (() => {
    getMyName(setLocalName)
  }, []);

//      { localName.length > 0 && localName.length < 4 ? <Text style={styles.errorTextStyle} >O nome digitado está muito pequeno</Text> : null }


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

        <Text style={styles.textStyle}>{i18n.t('general.secretCode')}</Text>      
        <TextInput style={styles.input} 
            autoCapitalize="words" 
            autoCorrect={false} 
            placeholder={i18n.t('general.typeHere')}
            onChangeText={setSecretCode}
        />


        <View style={styles.marginTop}>
        <Button 
            onPress={async () => {
                console.log("salvando nome=" + localName);

                if (secretCode != secretCodeToCompare) {
                  navigation.navigate('ErrorState', {text: i18n.t('rootTrustee.errorTypingSecretCode')});
                }
                else {
                    saveMyName(localName);

                    const result = await askRootTrusteeCertificate(localName);
    
                    if (result) {
                      navigation.pop(2);
                      navigation.push('HomeScreenRootTrustee')
                    }
                    else {
                      navigation.navigate('ErrorState', {text: i18n.t('general.networkError')});
                    }
  
                }

              }}
            title={i18n.t('rootTrustee.askBeRootTrustee')}
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

export default Registration;
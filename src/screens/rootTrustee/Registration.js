import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import Context from '../../context/Context';
import i18n from 'i18n-js';


const Registration = ({ navigation }) => {

  const [ localName, setLocalName ] = useState('');

  const { getMyName, saveMyName, getMyId, askRootTrusteeCertificate } = useContext(Context);

  useEffect (() => {
    getMyName((name) => {
      setLocalName(name);
    })
  }, []);

//      { localName.length > 0 && localName.length < 4 ? <Text style={styles.errorTextStyle} >O nome digitado está muito pequeno</Text> : null }


  return (

    <View style={styles.marginTop}>
        <Text style={styles.textStyle}>{i18n.t('rootTrustee.yourIdentifier')}</Text>
        <Text style={styles.input}>{getMyId()}</Text>

        <Text style={styles.textStyle}>{i18n.t('rootTrustee.yourName')}</Text>      
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

                const result = await askRootTrusteeCertificate(localName);

                if (result) {
                  navigation.navigate('Home');
                }
                else {
                  navigation.navigate('ErrorState', {text: "Error during registering. Please check your Internet connection"});
                }

              }}
            title={i18n.t('rootTrustee.askNewCommunity')}
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
  },
  marginTop: {
    marginTop: 15,
  }
});

export default Registration;
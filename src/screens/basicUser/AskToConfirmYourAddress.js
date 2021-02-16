import React, {useState, useEffect, useContext} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button
  } from 'react-native';
  import Context from '../../context/Context';
  import i18n from 'i18n-js';




const AskToConfirmYourAddress = ({ navigation }) => {

  const [ localAddress, setLocalAddress ] = useState('');
  const { saveMyAddressData, getMyAddressData } = useContext(Context);


  useEffect (() => {
    getMyAddressData((savedAddress) => {
      setLocalAddress(savedAddress);
    });
  }, []);

//            { localAddress.length > 0 && localAddress.length < 10 ? <Text style={styles.errorTextStyle} >O endereço digitado está muito pequeno</Text> : null }

    return (
        <View>
          <Text style={styles.textStyle}>{i18n.t('basicUser.enterCompleteAddress')}</Text>
          <TextInput style={styles.input} 
            autoCapitalize="words" 
            autoCorrect={false} 
            defaultValue={localAddress} 
            placeholder={i18n.t('general.typeHere')}
            onChangeText={setLocalAddress}
            />

              <View style={styles.marginTop}>
              <Button 
                  onPress={() => {
                      saveMyAddressData(localAddress);
                      navigation.navigate('AskToConfirmYourAddressStep2');
                    }}
                  title={i18n.t('general.generateQRCode')}
              />
              </View>
      
            </View>
    );
 
}


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
  
  export default AskToConfirmYourAddress;
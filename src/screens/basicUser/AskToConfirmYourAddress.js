import React, {useState, useEffect, useContext} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button
  } from 'react-native';
  import Context from '../../context/Context';




const AskToConfirmYourAddress = ({ navigation }) => {

  const [ localAddress, setLocalAddress ] = useState('');
  const { saveMyAddressData, getMyAddressData } = useContext(Context);


  useEffect (() => {
    getMyAddressData((savedAddress) => {
      setLocalAddress(savedAddress);
    });
  }, []);


    return (
        <View>
          <Text style={styles.textStyle}>Informe seu endereço completo:</Text>
          <TextInput style={styles.input} 
            autoCapitalize="words" 
            autoCorrect={false} 
            defaultValue={localAddress} 
            placeholder="Digite aqui"
            onChangeText={setLocalAddress}
            />

            { localAddress.length > 0 && localAddress.length < 10 ? <Text style={styles.errorTextStyle} >O endereço digitado está muito pequeno</Text> : null }
      
      
              <View style={styles.marginTop}>
              <Button 
                  onPress={() => {
                      saveMyAddressData(localAddress);
                      navigation.navigate('AskToConfirmYourAddressStep2');
                    }}
                  title="Gerar QRCode para Solicitação"
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
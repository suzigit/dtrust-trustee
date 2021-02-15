import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button
  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const AskToConfirmYourAddress = ({ navigation }) => {

  const [ localAddress, setLocalAddress ] = useState('');

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@MyAddress', value)
    } catch (e) {
      console.err("Error while saving item @MyAddress");
      console.err(e);
    }
  }  


  const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@MyAddress');
        if(value !== null) {
            setLocalAddress(value);
            console.log("view address=" + value);
            return value;
        }
    } catch(e) {
        console.error("Error reading data of MyAddress");
        console.error(e);
    }
}

  useEffect (() => {
    getData();
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
                      storeData(localAddress);
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
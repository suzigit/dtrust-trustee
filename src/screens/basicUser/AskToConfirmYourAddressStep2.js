import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View, 
    Button
  } from 'react-native';
  import QRCodeGenerator from '../../component/QRCodeGenerator';
  import AsyncStorage from '@react-native-async-storage/async-storage';



const AskToConfirmYourAddressStep2 = () => {

  const [ data, setData ] = useState('');

  const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@MyAddress');
        if(value !== null) {
            setData(value);
            console.log("view address=" + value);
            return value;
        }
    } catch(e) {
        console.error("Error reading data of MyAddress");
        console.error(e);
    }
  }

  getData();

    return (
        <View>
          <Text style={styles.textStyle}>Peça certificado de endereço apresentando seu QRCode a uma pessoa confiável da comunidade</Text>
          
          {data!=""? <View><QRCodeGenerator data={data}/></View> : <Text style={styles.certificateStyle}>Carregando...</Text>}
          
          <Button 
            onPress={() => {
              navigation.navigate('Home')
            }}
            title="Ok"
        />

        </View>
        
    );
}


const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20
    } 
  });
  
  export default AskToConfirmYourAddressStep2;
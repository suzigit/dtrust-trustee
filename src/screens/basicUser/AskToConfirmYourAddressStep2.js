import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View, 
    Button
  } from 'react-native';
  import QRCodeGenerator from '../../component/QRCodeGenerator';
  import AsyncStorage from '@react-native-async-storage/async-storage';



const AskToConfirmYourAddressStep2 = ({ navigation }) => {

  const [ data, setData ] = useState('');

  const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@MyAddress');
        if(value !== null) {
            setData(value);
            console.log("view address do AskToConfirmYourAddressStep2" + value);
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
          <Text style={styles.textStyle}>Peça certificado de endereço apresentando seu QRCode a uma pessoa confiável da comunidade</Text>
          <Text style={styles.certificateStyle}>{data}</Text>
          
          {data!=""? <View><QRCodeGenerator data={data}/></View> : <Text style={styles.certificateStyle}>Carregando...</Text>}
          
          <Button 
            onPress={() => {
              navigation.navigate('Home')
            }}
            title="Clique para ler o QRCode de seu Certificado"
        />

        </View>
        
    );
}


const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20
    }, 
    certificateStyle: {
      fontSize: 20,
      color: 'blue'
    } 
  });
  
  export default AskToConfirmYourAddressStep2;
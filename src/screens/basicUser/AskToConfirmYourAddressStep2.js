import React, {useState, useEffect, useContext} from 'react';
import {
    StyleSheet,
    Text,
    View, 
    Button
  } from 'react-native';
  import QRCodeGenerator from '../../component/QRCodeGenerator';
  import Context from '../../context/Context';



const AskToConfirmYourAddressStep2 = ({ navigation }) => {

  const [ data, setData ] = useState('');
  const { getMyAddressData } = useContext(Context);



  useEffect (() => {
    getMyAddressData((savedAddress) => {
      setData(savedAddress);
    });
  }, []);

    return (
        <View>
          <Text style={styles.textStyle}>Peça certificado de endereço apresentando seu QRCode a uma pessoa confiável da comunidade</Text>
          <Text style={styles.certificateStyle}>{data}</Text>
          
          {data!=""? <View><QRCodeGenerator data={data}/></View> : <Text style={styles.certificateStyle}>Carregando...</Text>}
          
          <Button 
            onPress={() => {
              navigation.navigate('GetAddressCertificate');
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
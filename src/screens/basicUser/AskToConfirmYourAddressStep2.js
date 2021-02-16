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
  const { getDataToAskAddressCertificate } = useContext(Context);

  useEffect (() => {
    getDataToAskAddressCertificate(setData);
  }, []);

//  <Text style={styles.certificateStyle}>{data}</Text>
  console.log(data);

    return (
        <View>
          <Text style={styles.textStyle}>Peça certificado de endereço apresentando seu QRCode a uma pessoa confiável da comunidade</Text>
          
          {data!=""? <View><QRCodeGenerator data={data}/></View> : <Text style={styles.certificateStyle}>Aguarde, gerando QRCode...</Text>}
          
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
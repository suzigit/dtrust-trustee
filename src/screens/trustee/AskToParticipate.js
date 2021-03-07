import React, {useContext, useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View, 
    Button
  } from 'react-native';
  import QRCodeGenerator from '../../component/QRCodeGenerator';
  import Context from '../../context/Context';
  import i18n from 'i18n-js';


const AskToParticipate = ({ navigation }) => {

    const [ qrCodeData, setQRCodeData] = useState('fetching data');

    const { getMyName, getMyPublicKey } = useContext(Context);

    console.log("ID do trustee = " + getMyPublicKey());
    
    useEffect (() => {
      getMyName((name) => {
          setQRCodeData (JSON.stringify({
                subkey: getMyPublicKey(),
                subnm: name
          }));
          console.log("QRCode de pedido do Trustee=");
      })
    }, []);
      


    return (
        <View>
          <Text style={styles.textStyle}>{i18n.t('trustee.askToParticipate')}</Text>
          <View><QRCodeGenerator data={qrCodeData}/></View>

          <Button 
            onPress={() => {
              navigation.navigate('GetParticipationCertificate');
            }}
            title={i18n.t('general.askResponseQRCode')}
        />          
        </View>
    );
 
}


const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20
    } 
  });
  
  export default AskToParticipate;
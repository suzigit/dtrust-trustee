import React, {useState, useEffect, useContext} from 'react';
import {
    StyleSheet,
    Text,
    View, 
    Button
  } from 'react-native';
  import QRCodeGenerator from '../../component/QRCodeGenerator';
  import Context from '../../context/Context';
  import i18n from 'i18n-js';



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
          <Text style={styles.textStyle}>{i18n.t('basicUser.askAddressCertificate')}</Text>
          
          {data!=""? <View><QRCodeGenerator data={data}/></View> : <Text style={styles.certificateStyle}>{i18n.t('general.waitToCreate')}</Text>}
          
          <Button 
            onPress={() => {
              navigation.navigate('GetAddressCertificate');
            }}
            title={i18n.t('general.askResponseQRCode')}
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
    } 
  });
  
  export default AskToConfirmYourAddressStep2;
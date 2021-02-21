import React, { useState, useEffect, useContext } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';
  import Context from '../../context/Context';
  import i18n from 'i18n-js';

  
const GetParticipationCertificateAsRoot = ({ navigation }) => {

  const { getRootTrusteeCertificate, saveMyParticipationCertificate } = useContext(Context);

  const [ data, setData ] = useState('');

  useEffect (() => {

    getRootTrusteeCertificate( (data) => {
      if (data) {
          saveMyParticipationCertificate(data);
      }
      setData(data);
    })
    
  }, []);


  return (
      <View>
        {data==""? <Text style={styles.textStyle}>Verificando se o certificado está pronto</Text> :
        (data!=null) ?
        <View>
        <Text style={styles.textStyle}>Certificado pronto e recebido</Text>
        <Button 
            onPress={async () => {
              navigation.navigate('ViewParticipationCertificateAsRoot')
            }}
            title="Veja o QRCode de seu certificado"
        />
        </View>:
        <Text style={styles.textStyle}>Certificado não está pronto ou não existe</Text>
      }
      </View>
  );
};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  } 
});

export default GetParticipationCertificateAsRoot;
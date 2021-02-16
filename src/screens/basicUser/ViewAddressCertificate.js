import React, { useState, useEffect, useContext } from 'react';
import {
    StyleSheet, Text, View, Button
  } from 'react-native';
import Context from '../../context/Context';
import QRCodeGenerator from '../../component/QRCodeGenerator';



const ViewAddressCertificate = ({ navigation }) => {

    const [ data, setData ] = useState('');
    const { getMyAddressCertificate } = useContext(Context);



    useEffect (() => {
      getMyAddressCertificate((addrCertificate) => {
        setData(addrCertificate);
      });
    }, []);
  


    return (
        <View>
        <Text style={styles.textStyle}>Seu Certificado de Endereço:</Text>
        <Text style={styles.certificateStyle}>{data}</Text>
        {data!=""? <View><QRCodeGenerator data={data}/></View> : <Text style={styles.certificateStyle}>Carregando...</Text>}

        <Button 
            onPress={() => {
              navigation.navigate('Home')
            }}
            title="Ok"
        />

        </View>
    );

};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  }, 
  certificateStyle: {
    fontSize: 20,
    color: 'blue'
  }   
});

export default ViewAddressCertificate;
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const GetCertificateToRegister = () => {

  return (
    <View>
      <Text style={styles.textStyle}>Aponte seu celular para QR Code que contém sua permissão para iniciar comunidade</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
});

export default GetCertificateToRegister;




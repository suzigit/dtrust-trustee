import React from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeGenerator from '../component/QRCodeGenerator';


const Trustee_AskToParticipate = () => {


    return (
        <View>
          <Text style={styles.textStyle}>Peça para participar apresentando seu QRCode ao criador da comunidade</Text>
          <View><QRCodeGenerator/></View>
        </View>
    );
 
}


const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20
    } 
  });
  
  export default Trustee_AskToParticipate;
import React from 'react';
import {
    StyleSheet, Text, View, Button
  } from 'react-native';
import i18n from 'i18n-js';


const ErrorState = ({ navigation }) =>  {

    const text = navigation.getParam("text");
    
    return (
        <View>
        <Text style={styles.textStyle}>{i18n.t('general.defaultErrorMessage')}</Text>   
        <Text style={styles.errorTextStyle}>{text}</Text>   
        
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
    errorTextStyle: {
      fontSize: 15,
      color: 'red'
    },   
  });

  export default ErrorState;
import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

import i18n from 'i18n-js';

const HomeScreenBasicUser = ({ navigation }) => {


  return (
    <View>

      <Text style={styles.text}>{i18n.t('navigation.BasicUser.title')}</Text>
      <Button
        onPress={() => navigation.navigate('AskToConfirmYourAddress')}
        title={i18n.t('navigation.BasicUser.askAddressConfirmation')}
      />
      <Button
        onPress={() => navigation.navigate('ViewAddressCertificate')}
        title={i18n.t('navigation.BasicUser.seeYourAddressCertificate')}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    marginTop: 20
  }
});

export default HomeScreenBasicUser;

import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

import i18n from 'i18n-js';

const HomeScreenTrustee = ({ navigation }) => {
    
  return (
    <View>

      <Text style={styles.text}>{i18n.t('navigation.trustee.title')}</Text>
      <Button
        onPress={() => navigation.navigate('ConfirmAddress')}
        title={i18n.t('navigation.trustee.confirmAddress')}
      />
      <Button
        onPress={() => navigation.navigate('AskToParticipate')}
        title={i18n.t('navigation.trustee.askToParticipate')}
      />
      <Button
        onPress={() => navigation.navigate('ViewParticipationCertificate')}
        title={i18n.t('navigation.trustee.seeYourParticipationCertificate')}
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

export default HomeScreenTrustee;

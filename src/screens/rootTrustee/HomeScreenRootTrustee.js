import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

import i18n from 'i18n-js';

const HomeScreenRootTrustee = ({ navigation }) => {

    
  return (
    <View>

      <Text style={styles.text}>{i18n.t('navigation.RootTrustee.title')}</Text>
      <Button
        onPress={() => navigation.navigate('AddTrustee')}
        title={i18n.t('navigation.RootTrustee.addTrustee')}
      />
      <Button
        onPress={() => navigation.navigate('Registration')}
        title={i18n.t('navigation.RootTrustee.askToBeRootTrustee')}
      />
      <Button
        onPress={() => navigation.navigate('GetParticipationCertificateAsRoot')}
        title={i18n.t('navigation.RootTrustee.receiveParticipationCertificate')}
      />
      <Button
        onPress={() => navigation.navigate('ViewParticipationCertificateAsRoot')}
        title={i18n.t('navigation.RootTrustee.seeYourParticipationCertificate')}
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

export default HomeScreenRootTrustee;

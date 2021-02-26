import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

import i18n from 'i18n-js';

const HomeScreenRootTrustee = ({ navigation }) => {

    
  return (
    <View>

      <Text style={styles.text}>{i18n.t('navigation.rootTrustee.title')}</Text>
      <Button
        onPress={() => navigation.navigate('AddTrustee')}
        title={i18n.t('navigation.rootTrustee.addTrustee')}
      />
      <Button
        onPress={() => navigation.navigate('Registration')}
        title={i18n.t('navigation.rootTrustee.askToBeRootTrustee')}
      />
      <Button
        onPress={() => navigation.navigate('GetParticipationCertificateAsRoot')}
        title={i18n.t('navigation.rootTrustee.receiveParticipationCertificate')}
      />
      <Button
        onPress={() => navigation.navigate('ViewParticipationCertificateAsRoot')}
        title={i18n.t('navigation.rootTrustee.seeYourParticipationCertificate')}
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

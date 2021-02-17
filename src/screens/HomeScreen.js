import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from '../locales/en.json';
import br from '../locales/br.json';

const HomeScreen = ({ navigation }) => {

  const [ loadedTranslation, setLoadedTranslation ] = useState(false);

  useEffect (() => {
    i18n.translations = { en, br }; 
  
    // Set the locale once at the beginning of your app.
    i18n.locale = 'en';//Localization.locale;
    i18n.fallbacks = true;
    setLoadedTranslation(true);

  }, []);

    
  return (
    <View>

      <Text style={styles.text}>{i18n.t('navigation.everyone.title')}</Text>
      <Button
        onPress={() => navigation.navigate('AskToConfirmYourAddress')}
        title={i18n.t('navigation.everyone.askAddressConfirmation')}
      />
      <Button
        onPress={() => navigation.navigate('ViewAddressCertificate')}
        title={i18n.t('navigation.everyone.seeYourAddressCertificate')}
      />

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

      <Text style={styles.text}>{i18n.t('navigation.rootTrustee.title')}</Text>
      <Button
        onPress={() => navigation.navigate('AddTrustee')}
        title={i18n.t('navigation.rootTrustee.addTrustee')}
      />
      <Button
        onPress={() => navigation.navigate('Registration')}
        title={i18n.t('navigation.rootTrustee.askTocreateTrusteableCommunity')}
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

export default HomeScreen;

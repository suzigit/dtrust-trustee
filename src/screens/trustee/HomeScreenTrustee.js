import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Context from '../../context/Context';
import i18n from 'i18n-js';

const HomeScreenTrustee = ({ navigation }) => {
    
  const [ data, setData ] = useState('');
  const { getMyParticipationCertificate, saveMyParticipationCertificate } = useContext(Context);
   
  useEffect (() => {

    getMyParticipationCertificate((certificate) => {
      console.log("#### exibidingo certificado do trustee = " + certificate);
      setData(certificate);
    });
  }, []);


  return (
    <View>
      <Text style={styles.text}>{i18n.t('navigation.Trustee.title')}</Text>
    { (!data) ? 
    <View>
      <Button
        onPress={() => navigation.navigate('TrusteeRegistration')}
        title={i18n.t('navigation.Trustee.askToParticipate')}
      />
    </View>
    :
    <View>
      <Button
        onPress={() => navigation.navigate('ConfirmAddress')}
        title={i18n.t('navigation.Trustee.confirmAddress')}
      />
      <Button
        onPress={() => navigation.navigate('ViewParticipationCertificate')}
        title={i18n.t('navigation.Trustee.seeYourParticipationCertificate')}
      />
      <Button
        onPress={() => {
          saveMyParticipationCertificate("");
          setData("");
        }}
        title={i18n.t('general.deleteYourCertificate')}
      />

    </View>

    }
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

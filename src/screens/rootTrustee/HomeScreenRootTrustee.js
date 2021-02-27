import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Context from '../../context/Context';


import i18n from 'i18n-js';

const HomeScreenRootTrustee = ({ navigation }) => {

  const [ data, setData ] = useState('');
  const { getMyParticipationCertificate, saveMyParticipationCertificate } = useContext(Context);

  getMyParticipationCertificate((certificate) => {
    console.log("exibidingo certificado do root trustee = " + certificate);
    setData(certificate);
  });

    
  return (
    <View>

      <Text style={styles.text}>{i18n.t('navigation.RootTrustee.title')}</Text>

      { (!data) ? 
      <View>
      <Button
        onPress={() => navigation.navigate('Registration')}
        title={i18n.t('navigation.RootTrustee.askToBeRootTrustee')}
      />
      <Button
        onPress={() => navigation.navigate('GetParticipationCertificateAsRoot')}
        title={i18n.t('navigation.RootTrustee.receiveParticipationCertificate')}
      />
      </View>
      :
      <View>
      <Button
        onPress={() => navigation.navigate('AddTrustee')}
        title={i18n.t('navigation.RootTrustee.addTrustee')}
      />
      <Button
        onPress={() => navigation.navigate('ViewParticipationCertificateAsRoot')}
        title={i18n.t('navigation.RootTrustee.seeYourParticipationCertificate')}
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

export default HomeScreenRootTrustee;

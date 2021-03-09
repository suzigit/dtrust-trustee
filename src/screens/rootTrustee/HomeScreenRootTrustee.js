import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Context from '../../context/Context';


import i18n from 'i18n-js';

const HomeScreenRootTrustee = ({ navigation }) => {

  const [ data, setData ] = useState('');
  const [ name, setName ] = useState('');

  const { getMyRootCertificate, saveMyTrusteeCertificate, getMyName } = useContext(Context);

  useEffect (() => {

    getMyRootCertificate((certificate) => {
      console.log("exibidingo certificado do root trustee = " + certificate);
      setData(certificate);
    });

    getMyName(setName);  

  }, []);

    
  return (
    <View>

      <Text style={styles.text}>{i18n.t('navigation.RootTrustee.title')}</Text>
      { (name)? <Text>{i18n.t('general.greetings')} {name}</Text> :  <Text></Text>}

      { (!data) ? 
      <View>

      { (!name)?
      <Button
        onPress={() => navigation.navigate('Registration')}
        title={i18n.t('navigation.RootTrustee.askToBeRootTrustee')}
      />
      :
      <Button
        onPress={() => navigation.navigate('Registration')}
        title={i18n.t('navigation.RootTrustee.askToBeRootTrusteeAgain')}
      />
      }

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
        title={i18n.t('navigation.RootTrustee.seeYourParticipationCertificateQRCode')}
      />
      <Button
        onPress={() => navigation.navigate('ViewDataParticipationCertificateAsRoot')}
        title={i18n.t('navigation.RootTrustee.seeContentYourParticipationCertificate')}
      />
      <Button
        onPress={() => {
          saveMyTrusteeCertificate("");
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

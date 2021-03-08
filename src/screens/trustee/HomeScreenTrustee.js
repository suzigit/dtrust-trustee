import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Context from '../../context/Context';
import i18n from 'i18n-js';

const HomeScreenTrustee = ({ navigation }) => {
    
  const [ name, setName ] = useState('');
  const [ data, setData ] = useState('');
  const [ rootTrusteeData, setRootTrusteeData ] = useState('');

  const { getMyTrusteeCertificate, saveMyTrusteeCertificate, 
    saveMyRootTrusteeInfo, getMyRootTrusteeInfo, getMyName } = useContext(Context);
   
  useEffect (() => {

    getMyTrusteeCertificate((certificate) => {
      console.log("#### exibindo certificado do trustee = " + certificate);
      setData(certificate);
    });

    getMyRootTrusteeInfo((trusteeInfo) => {
      console.log("#### exibindo dados do root trustee = " + trusteeInfo);
      const trusteeInfoAsJson = JSON.parse(trusteeInfo);
      console.log(trusteeInfoAsJson);

      let trusteeName;
      if (trusteeInfoAsJson.data) { //only available to trustees
        trusteeName = trusteeInfoAsJson.data.subnm;
      } 
      setRootTrusteeData(trusteeName);
    });

    getMyName(setName);

  }, []);

  const clearRootTrustee = (() => { 
    setRootTrusteeData("");
    saveMyRootTrusteeInfo("");
  });

  return (
    <View>
      <Text style={styles.text}>{i18n.t('navigation.Trustee.title')}</Text>
      { (name)? <Text>{i18n.t('general.greetings')} {name}</Text> :  <Text></Text>}

    { (!data) ? 
    <View>
        { (!rootTrusteeData) ?
        <Button
        onPress={() => navigation.navigate('GetRootTrusteeData')}
        title={i18n.t('navigation.Trustee.connectWithManager')}
        />
        :
        <View>
          <Text>{i18n.t('navigation.RootTrustee.roleName')}: {rootTrusteeData}</Text>
          <Button
          onPress={() => navigation.navigate('TrusteeRegistration')}
          title={i18n.t('navigation.Trustee.askToParticipate')}
          />

         <Button
          onPress={() => {
            clearRootTrustee();
          }}
          title={i18n.t('navigation.Trustee.changeRootTrustee')}
        />

        </View>
      }
    </View>
    :
    <View>
      <Text>{i18n.t('navigation.RootTrustee.roleName')}: {rootTrusteeData}</Text>
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

export default HomeScreenTrustee;

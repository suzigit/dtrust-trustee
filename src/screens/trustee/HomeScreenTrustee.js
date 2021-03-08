import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Context from '../../context/Context';
import i18n from 'i18n-js';

const HomeScreenTrustee = ({ navigation }) => {
    
  const [ data, setData ] = useState('');
  const [ rootTrusteeData, setRootTrusteeData ] = useState('');

  const { getMyParticipationCertificate, saveMyParticipationCertificate, 
    saveMyTrusteeInfo, getMyTrusteeInfo } = useContext(Context);
   
  useEffect (() => {

    getMyParticipationCertificate((certificate) => {
      console.log("#### exibindo certificado do trustee = " + certificate);
      setData(certificate);
    });

    getMyTrusteeInfo((trusteeInfo) => {
      console.log("#### exibindo dados do root trustee = " + trusteeInfo);
      const trusteeInfoAsJson = JSON.parse(trusteeInfo);
      console.log(trusteeInfoAsJson);

      let trusteeName;
      if (trusteeInfoAsJson.data) { //only available to trustees
        trusteeName = trusteeInfoAsJson.data.subnm;
      } 
      setRootTrusteeData(trusteeName);
    });


  }, []);

  const clearRootTrustee = (() => { 
    setRootTrusteeData("");
    saveMyTrusteeInfo("");
  });

  return (
    <View>
      <Text style={styles.text}>{i18n.t('navigation.Trustee.title')}</Text>
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

import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Context from '../../context/Context';
import i18n from 'i18n-js';

const HomeScreenTrustee = ({ navigation }) => {
    
  const [ role, setRole ] = useState('');
  const [ data, setData ] = useState('');
  const [ rootTrusteeData, setRootTrusteeData ] = useState('');

  const { getMyTrusteeCertificate, saveMyTrusteeCertificate, 
    saveMyRootTrusteeInfo, getMyRootTrusteeInfo, getMyRole } = useContext(Context);
   
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
    getMyRole(setRole);


  }, []);

  const clearRootTrustee = (() => { 
    setRootTrusteeData("");
    saveMyRootTrusteeInfo("");
  });

  return (
    <View>

    { (role)? <View>
            <Text style={styles.headerInfo}>{i18n.t('navigation.yourRole')} {i18n.t('navigation.'+ role+ '.roleName')}</Text>
            </View>
      :  <Text></Text>}

    { (!data) ? 
    <View>

        { (!rootTrusteeData) ?

        <TouchableOpacity onPress={() => {
          navigation.navigate('GetRootTrusteeData')
        }}>
        <Text style={styles.enter}>{i18n.t('navigation.Trustee.connectWithManager')} </Text>
        </TouchableOpacity>

        :
        <View>
          <Text style={styles.headerInfo}>{i18n.t('navigation.RootTrustee.roleName')}: {rootTrusteeData}</Text>


          <TouchableOpacity onPress={() => {
          navigation.navigate('TrusteeRegistration')
        }}>
        <Text style={styles.enter}>{i18n.t('navigation.Trustee.askToParticipate')} </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          clearRootTrustee();
        }}>
        <Text style={styles.enterCare}>{i18n.t('navigation.Trustee.changeRootTrustee')} </Text>
        </TouchableOpacity>

        </View>
      }
    </View>
    :
    <View>
      <Text style={styles.headerInfo}>{i18n.t('navigation.RootTrustee.roleName')}: {rootTrusteeData}</Text>


      <TouchableOpacity onPress={() => {
          navigation.navigate('ConfirmAddress')
        }}>
        <Text style={styles.enter}>{i18n.t('navigation.Trustee.confirmAddress')} </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          navigation.navigate('ViewParticipationCertificate')
        }}>
        <Text style={styles.enter}>{i18n.t('navigation.Trustee.seeYourParticipationCertificateQRCode')} </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          navigation.navigate('ViewDataParticipationCertificate')
        }}>
        <Text style={styles.enter}>{i18n.t('navigation.Trustee.seeContentYourParticipationCertificate')} </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
              saveMyTrusteeCertificate("");
              setData("");
        }}>
        <Text style={styles.enterCare}>{i18n.t('general.deleteYourCertificate')} </Text>
        </TouchableOpacity>

    </View>

    }
    </View>

  );
};

const styles = StyleSheet.create({

  headerInfo: {
    fontSize: 16,
    color: '#0068D6',
    textAlign: 'left',
    paddingLeft: '2%',
  },

  enter: {
    backgroundColor: '#0068D6',
    color: 'white',
    width: "75%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  27,
    marginTop: '10%'
  },
  enterCare: {
    backgroundColor: '#BE3144',
    color: 'white',
    width: "75%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  27,
    marginTop: '10%'
  }

});

export default HomeScreenTrustee;

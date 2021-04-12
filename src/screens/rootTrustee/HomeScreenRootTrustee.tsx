import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import Context from '../../context/Context';


import i18n from 'i18n-js';

const HomeScreenRootTrustee = ({ navigation }) => {

  const [ role, setRole ] = useState('');
  const [ data, setData ] = useState('');
  const [ name, setName ] = useState('');

  const { getMyRootCertificate, saveMyRootCertificate, getMyName, getMyRole } = useContext(Context);

  useEffect (() => {

    getMyRootCertificate((certificate) => {
      console.log("exibidingo certificado do root trustee = " + certificate);
      setData(certificate);
    });

    getMyName(setName);  
    getMyRole(setRole);

  }, []);

    
  return (
    <View>
      { (role)? <View>
            <Text style={styles.headerInfo}>{i18n.t('navigation.yourRole')} {i18n.t('navigation.'+ role+ '.roleName')}</Text>
            </View>
      :  <Text></Text>}


      { (!data) ? 
      <View>
      { (name)?<View>
            <Text style={styles.headerInfo}>{i18n.t('general.status')}: {i18n.t('rootTrustee.requestSubmitted')} {i18n.t('navigation.RootTrustee.receiveParticipationCertificate')}</Text>
            </View>
      :  <Text></Text>}

          <TouchableOpacity onPress={() => {
            navigation.navigate('Registration')
          }}>
              { (!name)?
                <Text style={styles.enter}>{i18n.t('navigation.RootTrustee.askToBeRootTrustee')} </Text>
              :
                <Text style={styles.enter}>{i18n.t('navigation.RootTrustee.askToBeRootTrusteeAgain')} </Text>
              }
          </TouchableOpacity>

          { (name)?
          <TouchableOpacity onPress={() => {
            navigation.navigate('GetParticipationCertificateAsRoot')
          }}>
                <Text style={styles.enter}>{i18n.t('navigation.RootTrustee.receiveParticipationCertificate')} </Text>
          </TouchableOpacity>
          : <Text></Text>}

      </View>
      :
      <View>

          <TouchableOpacity onPress={() => {
            navigation.navigate('AddTrustee')
          }}>
                <Text style={styles.enter}>{i18n.t('navigation.RootTrustee.addTrustee')} </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            navigation.navigate('ViewParticipationCertificateAsRoot')
          }}>
                <Text style={styles.enter}>{i18n.t('navigation.RootTrustee.seeYourParticipationCertificateQRCode')} </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            navigation.navigate('ViewDataParticipationCertificateAsRoot')
          }}>
                <Text style={styles.enter}>{i18n.t('navigation.RootTrustee.seeContentYourParticipationCertificate')} </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
              saveMyRootCertificate("");
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
    color: '#0089FA',
    textAlign: 'left',
    paddingLeft: '2%',
  },

  enter: {
    backgroundColor: '#0089FA',
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

export default HomeScreenRootTrustee;

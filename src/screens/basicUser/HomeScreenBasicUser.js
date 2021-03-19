import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button, Icon } from 'react-native';
import Context from '../../context/Context';
import i18n from 'i18n-js';
import { Ionicons } from '@expo/vector-icons'; 


const HomeScreenBasicUser = ({ navigation }) => {

  const [ name, setName ] = useState('');
  const [ role, setRole ] = useState('');

  const [ data, setData ] = useState('');
  const [ trusteeData, setTrusteeData ] = useState('');

  const { getMyAddressCertificate, saveMyAddressCertificate, 
    saveMyTrusteeInfo, getMyTrusteeInfo, getMyName, getMyRole } = useContext(Context);

    useEffect (() => {

      getMyAddressCertificate((certificate) => {
        console.log("#### exibindo certificado de endereco = " + certificate);
        setData(certificate);
      });
  
      getMyTrusteeInfo((trusteeInfo) => {
        console.log("#### exibindo dados do trustee = " + trusteeInfo);
        const trusteeInfoAsJson = JSON.parse(trusteeInfo);
        console.log(trusteeInfoAsJson);
  
        let trusteeName;
        if (trusteeInfoAsJson.data) { 
          trusteeName = trusteeInfoAsJson.data.subnm;
        } 
        setTrusteeData(trusteeName);
      });

      getMyName(setName);  
      getMyRole(setRole);
  
    }, []);
  
    const clearTrustee = (() => { 
      setTrusteeData("");
      saveMyTrusteeInfo("");
    });
  
//      <Text style={styles.text}>{i18n.t('navigation.BasicUser.title')}</Text>

  return (
    <View>
      { (name)? <Text>{i18n.t('general.greetings')} {name}</Text> :  <Text></Text>}
      { (role)? <View>
            <Text>{i18n.t('navigation.yourRole')} {i18n.t('navigation.'+ role+ '.roleName')}</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('SelectYourRole')
              }} title={i18n.t('navigation.BasicUser.changeTrustee')}>
            <Ionicons name="settings-outline" size={24} color="black" />
            </TouchableOpacity>
            </View>
      :  <Text></Text>}

      { (!data) ? 
          <View>
            { (!trusteeData) ?
                <Button
                onPress={() => navigation.navigate('GetTrusteeData')}
                title={i18n.t('navigation.BasicUser.connectWithTrustee')}
                />
            :
              <View>
              <Text>{i18n.t('navigation.Trustee.roleName')}: {trusteeData}</Text>
              <Button
                onPress={() => navigation.navigate('AskToConfirmYourAddress')}
                title={i18n.t('navigation.BasicUser.askAddressConfirmation')}
              />
             <Button
                onPress={() => {
                  clearTrustee();
                }}
                title={i18n.t('navigation.BasicUser.changeTrustee')}
              />
              </View>
            }
          </View>
        :
          <View> 
              <Text>{i18n.t('navigation.Trustee.roleName')}: {trusteeData}</Text>     
              <Button
                onPress={() => navigation.navigate('ViewAddressCertificate')}
                title={i18n.t('navigation.BasicUser.seeYourAddressCertificateQRCode')}
              />
              <Button
                onPress={() => navigation.navigate('ViewDataAddressCertificate')}
                title={i18n.t('navigation.BasicUser.seeContentYourAddressCertificate')}
              />
              <Button
                onPress={() => {
                  saveMyAddressCertificate("");
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

export default HomeScreenBasicUser;

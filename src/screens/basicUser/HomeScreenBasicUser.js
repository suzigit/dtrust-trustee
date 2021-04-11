import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Context from '../../context/Context';
import i18n from 'i18n-js';


const HomeScreenBasicUser = ({ navigation }) => {

  const [ role, setRole ] = useState('');

  const [ data, setData ] = useState('');
  const [ trusteeData, setTrusteeData ] = useState('');

  const { getMyAddressCertificate, saveMyAddressCertificate, 
    saveMyTrusteeInfo, getMyTrusteeInfo, getMyRole } = useContext(Context);

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

      getMyRole(setRole);
  
    }, []);
  
    const clearTrustee = (() => { 
      setTrusteeData("");
      saveMyTrusteeInfo("");
    });
  

  return (
    <View>
      { (role)? <View>
            <Text style={styles.headerInfo}>{i18n.t('navigation.yourRole')} {i18n.t('navigation.'+ role+ '.roleName')}</Text>
            </View>
      :  <Text></Text>}

      { (!data) ? 
          <View>
            { (!trusteeData) ?

                <TouchableOpacity onPress={() => {
                  navigation.navigate('GetTrusteeData')
                }}>
                <Text style={styles.enter}>{i18n.t('navigation.BasicUser.connectWithTrustee')} </Text>
                </TouchableOpacity>
            :
              <View>
                  <Text style={styles.headerInfo}>{i18n.t('navigation.Trustee.roleName')}: {trusteeData}</Text>

                  <TouchableOpacity onPress={() => {
                              navigation.navigate('AskToConfirmYourAddress')
                    }}>
                  <Text style={styles.enter}>{i18n.t('navigation.BasicUser.askAddressConfirmation')} </Text>
                  </TouchableOpacity>


                  <TouchableOpacity onPress={() => {
                              clearTrustee();
                  }}>
                  <Text style={styles.enterCare}>{i18n.t('navigation.BasicUser.changeTrustee')} </Text>
                  </TouchableOpacity>

              </View>
            }
          </View>
        :
          <View> 
              <Text style={styles.headerInfo}>{i18n.t('navigation.Trustee.roleName')}: {trusteeData}</Text>     


              <TouchableOpacity onPress={() => {
                              navigation.navigate('ViewAddressCertificate')
                    }}>
                  <Text style={styles.enter}>{i18n.t('navigation.BasicUser.seeYourAddressCertificateQRCode')} </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                              navigation.navigate('ViewDataAddressCertificate')
                    }}>
                  <Text style={styles.enter}>{i18n.t('navigation.BasicUser.seeContentYourAddressCertificate')} </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                        saveMyAddressCertificate("");
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

export default HomeScreenBasicUser;

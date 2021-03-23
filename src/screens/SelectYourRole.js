import React, {useState, useContext} from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';


import i18n from 'i18n-js';
import Context from '../context/Context';

const SelectYourRole = ({ navigation }) => {

  const [ role, setRole ] = useState('');

  const { getMyRole, saveMyRole }  = useContext(Context);

  const updateRole = (r) => {
    saveMyRole(r);
    setRole(r);
  }

  getMyRole(setRole);

  return (
    <View>

      <View style={styles.center}>
        <Image
          style={styles.logo}
          source={require('../img/cert.png')}
        />
      </View>

      
    { (!role) ? 
      <View >
      <Text style={styles.title}>{i18n.t('navigation.selectRole')}</Text>
          <TouchableOpacity
            onPress={() => {
              updateRole("BasicUser");
              navigation.navigate('HomeScreenBasicUser');
            }}
          ><Text style={styles.enter}>{i18n.t('navigation.BasicUser.roleName')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              updateRole("Trustee");
              navigation.navigate('HomeScreenTrustee');
            }}
          ><Text style={styles.enter}>{i18n.t('navigation.Trustee.roleName')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              updateRole("RootTrustee");
              navigation.navigate('HomeScreenRootTrustee');
            }}
          ><Text style={styles.enter}>{i18n.t('navigation.RootTrustee.roleName')}</Text>
          </TouchableOpacity>
      </View>:
      <View >
          <View>
            <TouchableOpacity onPress={() => {
                        navigation.navigate('HomeScreen' + role)
              }}>
            <Text style={styles.enter}>{i18n.t('navigation.seeMyMenu')} </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.center}>
              <Text>{i18n.t('navigation.yourRole')} {i18n.t('navigation.'+ role+ '.roleName')}</Text>
              <TouchableOpacity onPress={() => {
                            updateRole("");
                      }}><Text style={styles.link}>{i18n.t('navigation.changeRole')}</Text>
                      </TouchableOpacity>
          </View>

      </View>

    }

    </View>
  );
};

const styles = StyleSheet.create({

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
  logo: {
    width: 330,
    height: 232,
  },
  center: {
    alignItems: 'center',
  },
  link: {
    color: '#0068D6',
    textDecorationLine: 'underline'
  },
  title: {
    marginTop: '10%',
    color: '#0068D6',
    fontWeight: 'bold',
    fontSize:  20,
    textAlign: 'center',
  }

});

export default SelectYourRole;
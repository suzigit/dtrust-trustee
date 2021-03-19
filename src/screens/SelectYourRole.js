import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


import i18n from 'i18n-js';
import Context from '../context/Context';

const SelectYourRole = ({ navigation }) => {

  const [ role, setRole ] = useState('');
  const [ name, setName ] = useState('');

  const { getMyRole, saveMyRole, getMyName }  = useContext(Context);

  const updateRole = (r) => {
    saveMyRole(r);
    setRole(r);
  }

  getMyRole(setRole);
  getMyName(setName);  

  return (
    <View>

    { (!role) ? 
      <View>
      <Text style={styles.text}>{i18n.t('navigation.selectRole')}</Text>
      <Button
        onPress={() => {
          updateRole("BasicUser");
          navigation.navigate('HomeScreenBasicUser')
        }}
        title={i18n.t('navigation.BasicUser.roleName')}
      />
      <Button
        onPress={() => {
          updateRole("Trustee");
          navigation.navigate('HomeScreenTrustee')
        }}
        title={i18n.t('navigation.Trustee.roleName')}
      />
      <Button
        onPress={() => {
          updateRole("RootTrustee");
          navigation.navigate('HomeScreenRootTrustee')
        }}
        title={i18n.t('navigation.RootTrustee.roleName')}
      />
      </View>:
      <View>
      { (name)? <Text style={styles.headerName}>{i18n.t('general.greetings')} {name}</Text> :  <Text></Text>}
        <View style={styles.headerRole}>
          <Text>{i18n.t('navigation.yourRole')} {i18n.t('navigation.'+ role+ '.roleName')}</Text>
          <TouchableOpacity onPress={() => {
                updateRole("");
        }}>
                <Ionicons name="settings-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => {
                    navigation.navigate('HomeScreen' + role)
          }}>
          <Text style={styles.enter}>Enter</Text>
        </TouchableOpacity>


      <Button
        onPress={() => {
          updateRole("");
        }}
        title={i18n.t('navigation.changeRole')}
      />

      </View>

    }

      <View style={styles.center}>
        <Image
          style={styles.logo}
          source={require('../img/defi4good.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerName: {
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'left',
  },
  headerRole: {
    fontSize: 14,
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'left',
  },
  enter: {
    backgroundColor: '#3A59FF',
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
    width: 250,
    height: 250,
  },
  center: {
    alignItems: 'center'
  }
});

export default SelectYourRole;
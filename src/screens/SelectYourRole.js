import React, {useState, useContext, useEffect} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from '../locales/en.json';
import br from '../locales/br.json';
import Context from '../context/Context';

const SelectYourRole = ({ navigation }) => {

  const [ loadedTranslation, setLoadedTranslation ] = useState(false);
  const [ role, setRole ] = useState('');

  const { getMyRole, saveMyRole }  = useContext(Context);


  useEffect (() => {

    i18n.translations = { en, br };   
    // Set the locale once at the beginning of your app.
    i18n.locale = 'br';//Localization.locale;
    i18n.fallbacks = true;
    setLoadedTranslation(true);

  }, []);

  const getMyRoleInThisScreen = async () => {
    try {   
        const value = await getMyRole();
        setRole(value);
      } catch(e) {
        console.error("Error reading data of getMyRoleInThisScreen");
        console.error(e);
    }

  } 
  getMyRoleInThisScreen();

  return (
    <View>

    { (!role) ? 
      <View>
      <Text style={styles.text}>{i18n.t('navigation.selectRole')}</Text>
      <Button
        onPress={() => {
          saveMyRole("BasicUser");
          navigation.navigate('HomeScreenBasicUser')
        }}
        title={i18n.t('navigation.BasicUser.roleName')}
      />
      <Button
        onPress={() => {
          saveMyRole("Trustee");
          navigation.navigate('HomeScreenTrustee')
        }}
        title={i18n.t('navigation.Trustee.roleName')}
      />
      <Button
        onPress={() => {
          saveMyRole("RootTrustee");
          navigation.navigate('HomeScreenRootTrustee')
        }}
        title={i18n.t('navigation.RootTrustee.roleName')}
      />
      </View>:
      <View>
      <Text style={styles.text}>{i18n.t('navigation.welcome')} {i18n.t('navigation.'+ role+ '.roleName')}</Text>

      <Button
        onPress={() => {
          navigation.navigate('HomeScreen' + role);
        }}
        title={i18n.t('navigation.seeMyMenu')}
      />

      <Button
        onPress={() => {
          saveMyRole("");
          setRole("");
        }}
        title={i18n.t('navigation.changeRole')}
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

export default SelectYourRole;
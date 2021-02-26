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
    i18n.locale = 'en';//Localization.locale;
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
        title={i18n.t('navigation.basicUser.roleName')}
      />
      <Button
        onPress={() => {
          saveMyRole("Trustee");
          navigation.navigate('HomeScreenTrustee')
        }}
        title={i18n.t('navigation.trustee.roleName')}
      />
      <Button
        onPress={() => {
          saveMyRole("RootTrustee");
          navigation.navigate('HomeScreenRootTrustee')
        }}
        title={i18n.t('navigation.rootTrustee.roleName')}
      />
      </View>:
      <View>
      <Text style={styles.text}>{i18n.t('navigation.welcome')} {role}</Text>

      <Button
        onPress={() => {
          navigation.navigate('HomeScreen' + role);
        }}
        title={i18n.t('navigation.seeMyMenu')}
      />

      <Button
        onPress={() => {
          saveMyRole("");
          navigation.popToTop();
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
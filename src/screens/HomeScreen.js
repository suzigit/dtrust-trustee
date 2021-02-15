import React, {useContext} from 'react';
import Context from '../context/Context';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {

  //TODO: name precisa ir para storage
  const { myName } = useContext(Context);


  return (
    <View>
      { myName.length > 0? <Text>Bem-vindo(a) {myName} </Text> : null }
      <Text style={styles.text}>Para todos</Text>
      <Button
        onPress={() => navigation.navigate('AskToConfirmYourAddress')}
        title="Peça confirmação de seu endereço"
      />
      <Button
        onPress={() => navigation.navigate('ViewAddressCertificate')}
        title="Veja certificado de confirmação de seu endereço"
      />

      <Text style={styles.text}>Para confirmar endereços em uma comunidade</Text>
      <Button
        onPress={() => navigation.navigate('ConfirmeAddress')}
        title="Confirme endereço de alguém"
      />
      <Button
        onPress={() => navigation.navigate('Trustee_AskToParticipate')}
        title="Peça para participar"
      />

      <Text style={styles.text}>Para manter uma comunidade confiável</Text>
      <Button
        onPress={() => navigation.navigate('AddTrustee')}
        title="Inclua alguém confiável"
      />
      <Button
        onPress={() => navigation.navigate('Registration')}
        title="Peça para iniciar comunidade confiável"
      />
      <Button
        onPress={() => navigation.navigate('GetCertificateToRegister')}
        title="Receba ok para criação de comunidade confiável"
      />
      <Button
        onPress={() => navigation.navigate('ViewCertificate')}
        title="Veja seu certificado"
      />


    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default HomeScreen;

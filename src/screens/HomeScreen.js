import React, {useState, useContext, useEffect} from 'react';
import Context from '../context/Context';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
/*
  const [ localName, setLocalName ] = useState('');

  const { getMyName } = useContext(Context);

  getMyName((name) => {
      console.log("chegou no lugar de salvar no Home,");
      setLocalName(name);
  });
//      { localName.length > 0? <Text>Bem-vindo(a) {localName} </Text> : null }
*/

  return (
    <View>

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
        onPress={() => navigation.navigate('ConfirmAddress')}
        title="Confirme endereço de alguém"
      />
      <Button
        onPress={() => navigation.navigate('AskToParticipate')}
        title="Peça para participar"
      />
      <Button
        onPress={() => navigation.navigate('ViewParticipationCertificate')}
        title="Veja seu certificado"
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
        onPress={() => navigation.navigate('GetParticipationCertificate')}
        title="Receba ok para criação de comunidade confiável"
      />
      <Button
        onPress={() => navigation.navigate('ViewParticipationCertificate')}
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

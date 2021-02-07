import React, {useContext} from 'react';
import Context from '../context/Context';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {

  const { name, setName } = useContext(Context);


  return (
    <View>
      { name.length > 0? <Text>Bem-vindo(a) {name} </Text> : null }
      <Text style={styles.text}>Para todos</Text>
      <Button
        onPress={() => navigation.navigate('Registration')}
        title="Peça confirmação de seu endereço"
      />


      <Text style={styles.text}>Para confirmar endereços em uma comunidade</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Confirme endereço de alguém"
      />
      <Button
        onPress={() => navigation.navigate('Registration')}
        title="Peça para participar"
      />

      <Text style={styles.text}>Para manter uma comunidade confiável</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Inclua alguém confiável"
      />
      <Button
        onPress={() => navigation.navigate('Registration')}
        title="Peça para iniciar comunidade confiável"
      />
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Confirme criação comunidade confiável"
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

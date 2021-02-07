import { left } from 'inquirer/lib/utils/readline';
import React, {useContext} from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import Context from '../context/Context';


const RegistrationScreen = ({ navigation }) => {

//  const [name, setName] = useState('');
  const { name, setName } = useContext(Context);

  return (

    <View style={styles.marginTop}>
        <Text style={styles.textStyle}>Seu identificador:</Text>
        <Text style={styles.input}>{getMyPublicKey()}</Text>

        <Text style={styles.textStyle}>Seu nome: </Text>      
        <TextInput style={styles.input} 
            autoCapitalize="words" 
            autoCorrect={false} 
            value={name} 
            placeholder="Digite aqui"
            onChangeText={(newValue) => setName(newValue)}
        />
        { name.length > 0 && name.length < 4 ? <Text style={styles.errorTextStyle} >O nome digitado está muito pequeno</Text> : null }
      

        <View style={styles.marginTop}>
        <Button 
            onPress={() => {
                navigation.navigate('Home');
            }}
            title="Quero participar!"
        />
        </View>

    </View>
  );
};

const getMyPublicKey = () => {
    const pk = '0x0001';
    return pk;
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  errorTextStyle: {
    fontSize: 15,
    marginTop: 0,
    color: 'red',
    marginLeft: 15,
  },    
  input: {
    backgroundColor: '#DCDCDC',
    borderRadius: 5,
    borderColor: 'black',
    fontSize: 20,
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 15,
  },
  marginTop: {
    marginTop: 15,
  }
});

export default RegistrationScreen;
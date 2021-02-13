import { left } from 'inquirer/lib/utils/readline';
import React, {useState, useContext} from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import Context from '../context/Context';


const RegistrationScreen = ({ navigation }) => {

  const [ localName, setLocalName ] = useState('');

  const { state, setName, encryptedMessageToMasterAccount } = useContext(Context);
//  { state.name.length > 0 && state.name.length < 4 ? <Text style={styles.errorTextStyle} >O nome digitado está muito pequeno</Text> : null }

  return (

    <View style={styles.marginTop}>
        <Text style={styles.textStyle}>Seu identificador:</Text>
        <Text style={styles.input}>did:ethr:{state.blockchainAddress}</Text>

        <Text style={styles.textStyle}>Seu nome pessoal: </Text>      
        <TextInput style={styles.input} 
            autoCapitalize="words" 
            autoCorrect={false} 
            defaultValue={state.name} 
            placeholder="Digite aqui"
            onChangeText={setLocalName}
        />

      { localName.length > 0 && localName.length < 4 ? <Text style={styles.errorTextStyle} >O nome digitado está muito pequeno</Text> : null }


        <View style={styles.marginTop}>
        <Button 
            onPress={() => {
                setName(localName);

                //TODO: send message to start message
                console.log(encryptedMessageToMasterAccount());

                navigation.pop();
            }}
            title="Pedir iníciar da sua comunidade"
        />
        </View>

    </View>
  );
};


const styles = StyleSheet.create({
  textStyle: {
    marginTop: 10,
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
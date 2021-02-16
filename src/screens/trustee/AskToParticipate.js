import React, {useContext} from 'react';
import {
    StyleSheet,
    Text,
    View, 
    Button
  } from 'react-native';
  import QRCodeGenerator from '../../component/QRCodeGenerator';
  import Context from '../../context/Context';



const AskToParticipate = ({ navigation }) => {

    const { getMyId } = useContext(Context);

    console.log("ID do trustee = " + getMyId());

    return (
        <View>
          <Text style={styles.textStyle}>Peça para participar apresentando seu QRCode ao criador da comunidade</Text>
          <View><QRCodeGenerator data={getMyId()}/></View>

          <Button 
            onPress={() => {
              navigation.navigate('GetParticipationCertificate');
            }}
            title="Clique para ler o QRCode de seu Certificado"
        />          
        </View>
    );
 
}


const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20
    } 
  });
  
  export default AskToParticipate;
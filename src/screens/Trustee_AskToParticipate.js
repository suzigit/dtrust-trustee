import React, {useContext} from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import QRCodeGenerator from '../component/QRCodeGenerator';
  import Context from '../context/Context';



const Trustee_AskToParticipate = () => {

  const { getMyPublicKey } = useContext(Context);

//  <View><QRCodeGenerator data={getMyPublicKey()}/></View>

    return (
        <View>
          <Text style={styles.textStyle}>Peça para participar apresentando seu QRCode ao criador da comunidade</Text>

        </View>
    );
 
}


const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20
    } 
  });
  
  export default Trustee_AskToParticipate;
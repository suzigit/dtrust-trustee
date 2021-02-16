import React, {useContext} from 'react';
import {
    StyleSheet,
    Text,
    View, 
    Button
  } from 'react-native';
  import QRCodeGenerator from '../../component/QRCodeGenerator';
  import Context from '../../context/Context';
  import i18n from 'i18n-js';


const AskToParticipate = ({ navigation }) => {

    const { getMyId } = useContext(Context);

    console.log("ID do trustee = " + getMyId());


    return (
        <View>
          <Text style={styles.textStyle}>{i18n.t('trustee.askToParticipate')}</Text>
          <View><QRCodeGenerator data={getMyId()}/></View>

          <Button 
            onPress={() => {
              navigation.navigate('GetParticipationCertificate');
            }}
            title={i18n.t('general.askResponseQRCode')}
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
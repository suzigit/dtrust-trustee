import React from 'react';
import {
  View, StyleSheet
} from 'react-native';

import {QRCode, Canvas} from 'easyqrcode-react-native';


export default function QRCodeGenerator ({data}) {


    // 3. Generate QRCode
    let generateQRCode = (canvas) => {
        if (canvas !== null){
            // QRCode options
            var options = {
                text: data,
        	};
        	// Create QRCode Object
        	var qrCode = new QRCode(canvas, options);
        }
      }
    
    return (
        <View>
        <Canvas ref={generateQRCode}/>
        </View>
    );
    

}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    } 
});
    



import React, { Component } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';

import {QRCode, Canvas} from 'easyqrcode-react-native';


export default function QRCodeGenerator () {


    // 3. Generate QRCode
    let generateQRCode = (canvas) => {
        if (canvas !== null){
            // QRCode options
            var options = {
                text: "www.easyproject.cn/donation",
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
    



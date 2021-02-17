import React, { useState, useEffect } from 'react';
//Based on https://docs.ethers.io/v5/cookbook/react-native/
import "react-native-get-random-values"
import "@ethersproject/shims";
import { ethers }  from 'ethers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Context = React.createContext();

export const Provider = ({ children }) => {
  
    //estado da solicitacao do Padre. Não solicitado -> Solicitado -> Confirmado
    //Certificado(s) recebido(s)
    //Chaves publicas + nomes + datas para quem emitiu certificado de ateste? (precisa armazenar certificados emitidos? acho que nao)

    const [ userWallet ] = useState(ethers.Wallet.createRandom());

    useEffect (() => {
      console.log("salvou carteira do usuario");
      saveMyUserWallet();
    }, []);    

    const getMyId = () => {
      return "did:ethr:" + userWallet.address;
    }

    const signTrusteeCertificate = async (subjectId, subjectName) => {

      const myName = await getMyName();

      const certificateBody = 
        {
          trusteeId: getMyId(),
          trusteeName: myName,
          subjectId: subjectId,
          subjectName: subjectName,
          timestamp: new Date()
        };  
        const signedCertificate = await userWallet.signMessage(JSON.stringify(certificateBody));
//        console.log(signedCertificate);

        certificateBody["signature"] = signedCertificate;
//        console.log("certificateBody");
//        console.log(certificateBody);

        return JSON.stringify(certificateBody);
    };

    const getDataToAskAddressCertificate = async (callback) => {
      
      const myAddress = await getMyAddressData();

      const dataToAskAddressCertificate = 
      {
        subjectId: getMyId(),
        addressData: myAddress
      };
      callback(JSON.stringify(dataToAskAddressCertificate));

    }

    const signAddressCertificate = async (subjectId, subjectName, addressData) => {

      const myName = await getMyName();
      const certificateBody = 
        {
          trusteeId: getMyId(),
          trusteeName: myName,
          subjectId: subjectId,
          subjectName: subjectName,
          addressData: addressData,
          timestamp: new Date()
        };  
        const signedCertificate = await userWallet.signMessage(JSON.stringify(certificateBody));
//        console.log(signedCertificate);

        certificateBody["signature"] = signedCertificate;
//        console.log("certificateBody");
//        console.log(certificateBody);

        return JSON.stringify(certificateBody);
    };


    const saveMyUserWallet = async () => {
      try {
        await AsyncStorage.setItem('@MyPrivateKey', userWallet.privateKey)
      } catch (e) {
        console.err("Error while saving item @MyName");
        console.err(e);
      }
    }

    //MyName

    const saveMyName = async (value) => {
      try {
        await AsyncStorage.setItem('@MyName', value)
      } catch (e) {
        console.err("Error while saving item @MyName");
        console.err(e);
      }
    }
  
  
    const getMyName = async (callback) => {
      try {
          const value = await AsyncStorage.getItem('@MyName');
          if(value !== null) {
              if (callback) {
                callback(value);
              }
//              console.log("view name=" + value);
              return value;
          }
      } catch(e) {
          console.error("Error reading data of MyName");
          console.error(e);
      }
  }



    //MyAddress

    const saveMyAddressData = async (value) => {
      try {
        await AsyncStorage.setItem('@MyAddress', value)
      } catch (e) {
        console.err("Error while saving item @MyAddress");
        console.err(e);
      }
    }  
  
  
    const getMyAddressData = async (callback) => {
      try {
          const value = await AsyncStorage.getItem('@MyAddress');
          if(value !== null) {
              if (callback) {
                callback(value);
              }
//              console.log("view address=" + value);
              return value;
          }
      } catch(e) {
          console.error("Error reading data of MyAddress");
          console.error(e);
      }
  }

    //MyAddressCertificate
  
  const saveMyAddressCertificate = async (value) => {
    try {
      await AsyncStorage.setItem('@MyAddressCertificate', value)
    } catch (e) {
      console.err("Error while saving item");
      console.err(e);
    }
  }

  const getMyAddressCertificate = async (callback) => {
    try {
        const value = await AsyncStorage.getItem('@MyAddressCertificate');
        if(value !== null) {
            callback(value);
//            console.log("view certificate=" + value);
            return value;
        }
    } catch(e) {
        console.error("Error reading data of MyAddressCertificate");
        console.error(e);
    }
  }

  const saveMyParticipationCertificate = async (value) => {
    try {``
      await AsyncStorage.setItem('@MyParticipationCertificate', value)
    } catch (e) {
      console.err("Error while saving item MyParticipationCertificate");
      console.err(e);
    }
  }  

  const getMyParticipationCertificate = async (callback) => {
    try {
        const value = await AsyncStorage.getItem('@MyParticipationCertificate');
        if(value !== null) {
            callback(value);
//            console.log("view certificate=" + value);
            return value;
        }
    } catch(e) {
        console.error("Error reading data of MyParticipationCertificate");
        console.error(e);
    }
  }
  


    return (
        <Context.Provider value={{getMyId, saveMyName, getMyName, getMyAddressData,
          saveMyParticipationCertificate, getMyParticipationCertificate,
          signTrusteeCertificate, 
          getDataToAskAddressCertificate, signAddressCertificate, 
          saveMyAddressData, saveMyAddressCertificate, getMyAddressCertificate}}>
        {children}
        </Context.Provider>
    );
};

export default Context;
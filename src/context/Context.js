import React, { useState } from 'react';
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
    const [ myName, setMyName] = useState("");

    const getMyPublicKey = () => {
      return userWallet.publicKey;
    }

    const getMyId = () => {
      return userWallet.address;
    }

    const signCertificate = async (idTrusteeCandidate, nameTrusteeCandidate) => {

      const certificateBody = 
        {
          rootTrusteeName: state.name,
          trusteeName: nameTrusteeCandidate,
          trusteeId: idTrusteeCandidate
        };  
        const signedCertificate = await userWallet.signMessage(JSON.stringify(certificateBody));
        console.log(signedCertificate);

        certificateBody["signature"] = signedCertificate;
        console.log("certificateBody");
        console.log(certificateBody);

        return JSON.stringify(certificateBody);
    };

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
              callback(value);
              console.log("view address=" + value);
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
            console.log("view certificate=" + value);
            return value;
        }
    } catch(e) {
        console.error("Error reading data of MyAddress");
        console.error(e);
    }
  }

    return (
        <Context.Provider value={{myName, setMyName, signCertificate,getMyId, getMyPublicKey, 
          saveMyAddressData, getMyAddressData, saveMyAddressCertificate, getMyAddressCertificate}}>
        {children}
        </Context.Provider>
    );
};

export default Context;
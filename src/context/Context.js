import React, { useState, useEffect } from 'react';
//Based on https://docs.ethers.io/v5/cookbook/react-native/
import "react-native-get-random-values"
import "@ethersproject/shims";
import { ethers }  from 'ethers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveAddressCertificate, saveTrusteeCertificate, 
  askRootTrusteeCertificateRemote, getRootTrusteeCertificateRemote} from './RemoteAccessUtil';

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

    const getMyPublicKey = () => {
      return userWallet.publicKey;
    }    

    const askRootTrusteeCertificate = (subjectName) => {
        return askRootTrusteeCertificateRemote(getMyPublicKey(), subjectName);
    }

    const getRootTrusteeCertificate = async (callback) => {
        const name = await getMyName();
        const result = await getRootTrusteeCertificateRemote(getMyPublicKey(), name);

        console.log("Result=" + result);

        callback(result);
    }

    const signTrusteeCertificate = async (subjectId, subjectName) => {

      const certificateBody = 
        {
          subkey: subjectId,
          subnm: subjectName,
          iat: Date.now(),
          iss: 2
        };  
        const signedCertificate = await userWallet.signMessage(JSON.stringify(certificateBody));
//        console.log(signedCertificate);

        const trusteData = {
          data: certificateBody,
          sig: signedCertificate,
        }

//        console.log(certificateBody);
        saveTrusteeCertificate(trusteData);

        return JSON.stringify(trusteData);
    };

    const getDataToAskAddressCertificate = async (callback) => {
      
      const myAddress = await getMyAddressData();
      const myName = await getMyName();

      const dataToAskAddressCertificate = 
      {
        subdid: getMyId(),
        subnm: myName,
        addr: myAddress
      };

      callback(JSON.stringify(dataToAskAddressCertificate));

    }

    const getDataToAskTrusteeCertificate = async (callback) => {
      
      const myName = await getMyName();

      const dataToAskCertificate = 
      {
        subkey: getMyPublicKey(),
        subnm: myName
      };

      callback(JSON.stringify(dataToAskCertificate));

    }

    const signAddressCertificate = async (subjectId, subjectName, addressData) => {

      const certificateBody = 
        {
          subdid: subjectId,
          subnm: subjectName,
          addr: addressData,
          iat: Date.now()
        }; 
        
        const signedCertificate = await userWallet.signMessage(JSON.stringify(certificateBody));
//        console.log(signedCertificate);

        const addressCertificate = {
          data: certificateBody,
          sig: signedCertificate,
        }

        saveAddressCertificate(addressCertificate);

        return JSON.stringify(addressCertificate);

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
              return value;
          }
      } catch(e) {
          console.error("Error reading data of MyName");
          console.error(e);
      }
  }

    //My Role
    const saveMyRole = async (value) => {
      try {
        await AsyncStorage.setItem('@MyRole', value)
      } catch (e) {
        console.err("Error while saving item @MyRole");
        console.err(e);
      }
    }
  
  
    const getMyRole = async (callback) => {
      try {
          const value = await AsyncStorage.getItem('@MyRole');
          if(value !== null) {
              if (callback) {
                callback(value);
              }
              return value;
          }
      } catch(e) {
          console.error("Error reading data of MyRole");
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
    try {
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
            return value;
        }
    } catch(e) {
        console.error("Error reading data of MyParticipationCertificate");
        console.error(e);
    }
  }

  const saveMyRootCertificate = async (value) => {
    try {
      await AsyncStorage.setItem('@MyRootCertificate', value)
    } catch (e) {
      console.err("Error while saving item MyRootCertificate");
      console.err(e);
    }
  }  

  const getMyRootCertificate = async (callback) => {
    try {
        const value = await AsyncStorage.getItem('@MyRootCertificate');
        if(value !== null) {
            callback(value);
            return value;
        }
    } catch(e) {
        console.error("Error reading data of MyRootCertificate");
        console.error(e);
    }
  }


  const saveMyTrusteeInfo = async (value) => {
    try {
      await AsyncStorage.setItem('@MyTrusteeInfo', value)
    } catch (e) {
      console.err("Error while saving item MyTrusteeInfo");
      console.err(e);
    }
  }  

  const getMyTrusteeInfo = async (callback) => {
    try {
        const value = await AsyncStorage.getItem('@MyTrusteeInfo');
        if(value !== null) {
            callback(value);
            return value;
        }
    } catch(e) {
        console.error("Error reading data of MyTrusteeInfo");
        console.error(e);
    }
  }

    return (
        <Context.Provider value={{getMyId, getMyPublicKey, saveMyName, getMyName, getMyAddressData,
          saveMyRole,getMyRole,
          askRootTrusteeCertificate, getRootTrusteeCertificate,
          saveMyParticipationCertificate, getMyParticipationCertificate, saveMyRootCertificate, getMyRootCertificate,
          signTrusteeCertificate, 
          getDataToAskAddressCertificate, getDataToAskTrusteeCertificate, signAddressCertificate, 
          saveMyAddressData, saveMyAddressCertificate, getMyAddressCertificate,
          saveMyTrusteeInfo, getMyTrusteeInfo}}>
        {children}
        </Context.Provider>
    );
};

export default Context;
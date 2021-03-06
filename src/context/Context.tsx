import React, { useState, useEffect } from 'react';
//Based on https://docs.ethers.io/v5/cookbook/react-native/
import "react-native-get-random-values"
import "@ethersproject/shims";
import { ethers }  from 'ethers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveAddressCertificate, saveTrusteeCertificate, 
  askRootTrusteeCertificateRemote, getRootTrusteeCertificateRemote} from './RemoteAccessUtil';

const Context = React.createContext({ });

export const Provider = ({ children }) => {
  
    //estado da solicitacao do Padre. Não solicitado -> Solicitado -> Confirmado
    //Certificado(s) recebido(s)
    //Chaves publicas + nomes + datas para quem emitiu certificado de ateste? (precisa armazenar certificados emitidos? acho que nao)

    const [ userWallet, setUserWallet ] = useState(ethers.Wallet.createRandom());

    useEffect ( () => {

      const configureWallet = async () => {

        const privateKeyOfUseWallet = await getMyPrivateKeyOfUserWallet(null);

        if (privateKeyOfUseWallet) {
            const w = new ethers.Wallet(privateKeyOfUseWallet);
            setUserWallet(w);
            console.log("recuperou carteira do usuario");
            console.log(userWallet.publicKey);
          }
          else {
            console.log("salvou carteira do usuario");
            console.log(userWallet.publicKey);
            saveMyUserWallet(); 
          }
      }
      configureWallet();

    }, []);

    const getMyId = () => {
      return "did:ethr:" + userWallet.address;
    }

    const getMyPublicKey = () => {
      return userWallet.publicKey;
    }    

    const askRootTrusteeCertificate = (subjectName: string) => {
        return askRootTrusteeCertificateRemote(getMyPublicKey(), subjectName);
    }

    const getRootTrusteeCertificate = async (callback) => {
        const name = await getMyName();
        const result = await getRootTrusteeCertificateRemote(getMyPublicKey(), name);

        console.log("Result=" + result);

        callback(result);
    }

    const signTrusteeCertificate = async (subjectId: string, subjectName: string) => {

      const certificateBody = 
        {
          subkey: subjectId,
          subnm: subjectName,
          iat: Date.now(),
          iss: 2
        };  
        const signedCertificate = await userWallet.signMessage(JSON.stringify(certificateBody));

        const trusteData = {
          data: certificateBody,
          sig: signedCertificate,
        }

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

    const signAddressCertificate = async (subjectId:string, subjectName:string, addressData:string) => {

      const certificateBody = 
        {
          subdid: subjectId,
          subnm: subjectName,
          addr: addressData,
          iat: Date.now()
        }; 
        
        const signedCertificate = await userWallet.signMessage(JSON.stringify(certificateBody));

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
        console.error("Error while saving item @MyName");
        console.error(e);
      }
    }

    const getMyPrivateKeyOfUserWallet = async (callback): Promise<string> => {
      try {
        const v = await AsyncStorage.getItem('@MyPrivateKey');
        if(v !== null) {
            const value:string = v;
            if (callback) {
              callback(value);
            }
            return value;
        }
        else {
          throw Error ("Error reading data of MyPrivateKey (null value)");
        }
      } catch(e) {
          console.error("Error reading data of MyPrivateKey");
          console.error(e);
          throw e;
      }
    }

    //MyName

    const saveMyName = async (value: string) => {
      try {
        await AsyncStorage.setItem('@MyName', value)
      } catch (e) {
        console.error("Error while saving item @MyName");
        console.error(e);
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
    const saveMyRole = async (value:string) => {
      try {
        await AsyncStorage.setItem('@MyRole', value)
      } catch (e) {
        console.error("Error while saving item @MyRole");
        console.error(e);
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

    const saveMyAddressData = async (value:string) => {
      try {
        await AsyncStorage.setItem('@MyAddress', value)
      } catch (e) {
        console.error("Error while saving item @MyAddress");
        console.error(e);
      }
    }  
  
  
    const getMyAddressData = async (callback) => {
      try {
          const value = await AsyncStorage.getItem('@MyAddress');
          if(value !== null) {
              if (callback) {
                callback(value);
              }
              return value;
          }
      } catch(e) {
          console.error("Error reading data of MyAddress");
          console.error(e);
      }
  }

  //MyAddressCertificate
  
  const saveMyAddressCertificate = async (value:string) => {
    try {
      await AsyncStorage.setItem('@MyAddressCertificate', value)
    } catch (e) {
      console.error("Error while saving item");
      console.error(e);
    }
  }

  const getMyAddressCertificate = async (callback) => {
    try {
        const value = await AsyncStorage.getItem('@MyAddressCertificate');
        if(value !== null) {
            callback(value);
            return value;
        }
    } catch(e) {
        console.error("Error reading data of MyAddressCertificate");
        console.error(e);
    }
  }

  const saveMyTrusteeCertificate = async (value:string) => {
    try {
      await AsyncStorage.setItem('@MyTrusteeCertificate', value)
    } catch (e) {
      console.error("Error while saving item MyTrusteeCertificate");
      console.error(e);
    }
  }  

  const getMyTrusteeCertificate = async (callback) => {
    try {
        const value = await AsyncStorage.getItem('@MyTrusteeCertificate');
        if(value !== null) {
            callback(value);
            return value;
        }
    } catch(e) {
        console.error("Error reading data of MyTrusteeCertificate");
        console.error(e);
    }
  }

  const saveMyRootCertificate = async (value:string) => {
    try {
      await AsyncStorage.setItem('@MyRootCertificate', value)
    } catch (e) {
      console.error("Error while saving item MyRootCertificate");
      console.error(e);
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


  const saveMyTrusteeInfo = async (value:string) => {
    try {
      await AsyncStorage.setItem('@MyTrusteeInfo', value)
    } catch (e) {
      console.error("Error while saving item MyTrusteeInfo");
      console.error(e);
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

  const saveMyRootTrusteeInfo = async (value:string) => {
    try {
      await AsyncStorage.setItem('@MyRootTrusteeInfo', value)
    } catch (e) {
      console.error("Error while saving item MyRootTrusteeInfo");
      console.error(e);
    }
  }  

  const getMyRootTrusteeInfo = async (callback) => {
    try {
        const value = await AsyncStorage.getItem('@MyRootTrusteeInfo');
        if(value !== null) {
            callback(value);
            return value;
        }
    } catch(e) {
        console.error("Error reading data of MyRootTrusteeInfo");
        console.error(e);
    }
  }

  
  const saveMasterTrusteeInfo = async (value:string) => {
    try {
      await AsyncStorage.setItem('@MasterTrusteeInfo', value)
    } catch (e) {
      console.error("Error while saving item MasterTrusteeInfo");
      console.error(e);
    }
  }  


    return (
        <Context.Provider value={{getMyId, getMyPublicKey, saveMyName, getMyName, getMyAddressData,
          saveMyRole,getMyRole,
          askRootTrusteeCertificate, getRootTrusteeCertificate,
          saveMyTrusteeCertificate, getMyTrusteeCertificate, saveMyRootCertificate, getMyRootCertificate,
          signTrusteeCertificate, saveMyRootTrusteeInfo, getMyRootTrusteeInfo,
          getDataToAskAddressCertificate, getDataToAskTrusteeCertificate, signAddressCertificate, 
          saveMyAddressData, saveMyAddressCertificate, getMyAddressCertificate, saveMasterTrusteeInfo,
          saveMyTrusteeInfo, getMyTrusteeInfo}}>
        {children}
        </Context.Provider>
    );
};

export default Context;
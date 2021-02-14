import React, { useReducer, useEffect, useState } from 'react';
//Based on https://docs.ethers.io/v5/cookbook/react-native/
import "react-native-get-random-values"
import "@ethersproject/shims";
import { ethers }  from 'ethers';
//import  EthCrypto  from 'eth-crypto';


const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
      case 'edit_name':
          return {name: action.payload, publicKey: state.publicKey, blockchainAddress:state.blockchainAddress};
      case 'set_key':
            return {name: state.name, publicKey: action.payload.publicKey, blockchainAddress: action.payload.blockchainAddress};  
     default:
        return state;
    }
  };
  

export const Provider = ({ children }) => {
  
    //Chave publica do validador do Padre hard-coded (para criptografar email)
//    const masterPublicKey = "0x04c72f0718d1a350b3aee206fcd0ceb7f62dd58b2094cf9d7f758f68d24d16a242176cbb1f730f7c18a735bea16caa97277ff55004b2046668a403f5b53382e707"

    //estado da solicitacao do Padre. Não solicitado -> Solicitado -> Confirmado
    //Certificado(s) recebido(s)
    //Chaves publicas + nomes + datas para quem emitiu certificado de ateste? (precisa armazenar certificados emitidos? acho que nao)

//TODO: remover essa inicializacao? eh mesmo um hook?
    const [ userWallet, setUserWallet] = useState(ethers.Wallet.createRandom());

    useEffect (() => {
      dispatch({ type: 'set_key', payload: {publicKey: userWallet.publicKey, blockchainAddress: userWallet.address} });
    }, []);

    const [state, dispatch] = useReducer(reducer, 
      {name: '', publicKey: 'N/A', blockchainAddress: ''});

    const setName = (newName) => {
        dispatch({ type: 'edit_name', payload: newName });
      };

    const signCertificate = async (idTrusteeCandidate, nameTrusteeCandidate) => {

        const certificateBody = JSON.stringify(
        {
          rootTrusteeName: state.name,
          trusteeName: nameTrusteeCandidate,
          trusteeId: idTrusteeCandidate
        });
        const signedCertificate = await userWallet.signMessage(certificateBody);
        console.log("signed no contexto");
        console.log(signedCertificate);
        console.log("depois do signed no contexto");

        return signedCertificate;
    };


  
/*
eth-crypto
  const encryptedMessageToMasterAccount = EthCrypto.encryptWithPublicKey (
      masterPublicKey, 
      JSON.stringify("meu payload a ser lido") // we have to stringify the payload before we can encrypt it
  );
*/
    return (
        <Context.Provider value={{state, setName, signCertificate}}>
        {children}
        </Context.Provider>
    );
};

export default Context;
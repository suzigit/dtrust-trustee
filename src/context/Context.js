import React, { useReducer, useEffect } from 'react';
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
    const masterPublicKey = "0x04c72f0718d1a350b3aee206fcd0ceb7f62dd58b2094cf9d7f758f68d24d16a242176cbb1f730f7c18a735bea16caa97277ff55004b2046668a403f5b53382e707"

    let userWallet;

    useEffect (() => {
      userWallet = ethers.Wallet.createRandom();
      dispatch({ type: 'set_key', payload: {publicKey: userWallet.publicKey, blockchainAddress: userWallet.address} });
    }, []);


    //estado da solicitacao do Padre. Não solicitado -> Solicitado -> Confirmado
    //Certificado(s) recebido(s)
    //Chaves publicas + nomes + datas para quem emitiu certificado de ateste? (precisa armazenar certificados emitidos? acho que nao)
  
    const [state, dispatch] = useReducer(reducer, 
      {name: '', publicKey: 'N/A', blockchainAddress: ''});

    const setName = (newName) => {
        dispatch({ type: 'edit_name', payload: newName });
      };

      //TODO: It is not encrypting yet
      const encryptedMessageToMasterAccount = (() => {
        return state.publicKey;
      }
    );
  
/*
eth-crypto
  const encryptedMessageToMasterAccount = EthCrypto.encryptWithPublicKey (
      masterPublicKey, 
      JSON.stringify("meu payload a ser lido") // we have to stringify the payload before we can encrypt it
  );
*/
    return (
        <Context.Provider value={{state, setName, encryptedMessageToMasterAccount }}>
        {children}
        </Context.Provider>
    );
};

export default Context;
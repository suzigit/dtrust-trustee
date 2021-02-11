import React, { useReducer, useEffect } from 'react';
//Based on https://docs.ethers.io/v5/cookbook/react-native/
import "react-native-get-random-values"
import "@ethersproject/shims";
import { ethers }  from 'ethers';


const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
      case 'edit_name':
          return {name: action.payload, publicKey: state.publicKey};
      case 'set_publicKey':
            return {name: state.name, publicKey: action.payload};  
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
      dispatch({ type: 'set_publicKey', payload: userWallet.publicKey });
    }, []);


    //estado da solicitacao do Padre. Não solicitado -> Solicitado -> Confirmado
    //Certificado(s) recebido(s)
    //Chaves publicas + nomes + datas para quem emitiu certificado de ateste? (precisa armazenar certificados emitidos? acho que nao)
  
    const [state, dispatch] = useReducer(reducer, 
      {name: '', publicKey: 'N/A'});

    const setName = (newName) => {
        dispatch({ type: 'edit_name', payload: newName });
      };

    return (
        <Context.Provider value={{state, setName }}>
        {children}
        </Context.Provider>
    );
};

export default Context;
import React, { useReducer } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
      case 'edit_name':
        return action.payload;
      default:
        return state;
    }
  };
  

export const Provider = ({ children }) => {
  

    //Chave publica do validador do Padre hard-coded (para criptografar email)
    //Chave pessoal - privada e publica
    //estado da solicitacao do Padre. Não solicitado -> Solicitado -> Confirmado
    //Certificado(s) recebido(s)

    //Chaves publicas + nomes + datas para quem emitiu certificado de ateste? (precisa armazenar certificados emitidos? acho que nao)


    const [name, dispatch] = useReducer(reducer, '');

    const setName = (newName) => {
        dispatch({ type: 'edit_name', payload: newName });
      };

    return (
        <Context.Provider value={{ name, setName }}>
        {children}
        </Context.Provider>
    );
};

export default Context;
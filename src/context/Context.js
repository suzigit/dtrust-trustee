import React, { useState } from 'react';
//Based on https://docs.ethers.io/v5/cookbook/react-native/
import "react-native-get-random-values"
import "@ethersproject/shims";
import { ethers }  from 'ethers';


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


    return (
        <Context.Provider value={{myName, setMyName, signCertificate,getMyId, getMyPublicKey}}>
        {children}
        </Context.Provider>
    );
};

export default Context;
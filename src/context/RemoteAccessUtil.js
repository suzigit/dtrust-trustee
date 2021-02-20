import React from 'react';

const serverURL = 'https://dtrust-trustee.herokuapp.com/';

export default saveAddressCertificate = async (certificateBody) => {
    try {
      fetch(serverURL + 'test', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'aabbcc'
            },
            body: JSON.stringify ({
                certificateBody
            })
          });
        console.log("Mandou salvar addressCertificate");

    } catch (error) {
      console.error(error);
    }  
}

/*

export default saveAddressCertificate = async (certificateBody) => {
    try {
      const response =  await fetch(serverURL + 'test', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'aabbcc'
            },
            body: JSON.stringify ({
                certificateBody
            })
          });
      const responseJson = await response.json();          
      console.log(responseJson);
        console.log("CHEGOU AQUI DENTRO no REMOTE ACCESS POST 5");

    } catch (error) {
      console.error(error);
    }  
}


export default async function getHi () {
    try {
        let response = await fetch('https://dtrust-trustee.herokuapp.com/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Autentication': 'aabbcc'
            },
            body: JSON.stringify({
              user: 'yourValue',
              secondParam: 'yourOtherValue',
            }),
          });

        console.log(response);
//        return responseJson.movies;
      } catch (error) {
        console.error(error);
      }  
}





    const getHi = async () => {
      try {

          fetch('https://dtrust-trustee.herokuapp.com/', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'aabbcc'
              }
            }).then(response => await response.json())
              .then(responseJson => {
              console.log("CHEGOU AQUI DENTRO");
              console.log(responseJson)
            })
            console.log("CHEGOU AQUIZINHO");
        } catch (error) {
          console.error(error);
        }  
  }

*/

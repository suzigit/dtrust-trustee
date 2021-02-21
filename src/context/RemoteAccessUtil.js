import React from 'react';

const serverURL = 'https://dtrust-trustee.herokuapp.com/';

const backendPassword = "ofslafsdewcdsfsdplpAjmiDdfdsq!d";

const saveAddressCertificate = (certificateBody) => {

    try {
      fetch(serverURL + 'saveAddressCertificate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': backendPassword
            },
            body: JSON.stringify ({
                certificateBody
            })
          });
        console.log("Fetch to addressCertificate");

    } catch (error) {
      console.error(error);
    }  
}

const saveTrusteeCertificate = (certificateBody) => {
  try {
    fetch(serverURL + 'saveTrusteeCertificate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': backendPassword
          },
          body: JSON.stringify ({
              certificateBody
          })
        });
      console.log("Fetch to trusteeCertificate");

  } catch (error) {
    console.error(error);
  }  
}

const askRootTrusteeCertificateRemote = async (subjectId, subjectName) => {
  
  try {

    const infoRootTrustee = {
      subjectId, subjectName
    };

    const response = await fetch(serverURL + 'askRootTrustee', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': backendPassword
          },
          body: JSON.stringify ({infoRootTrustee})
        });

      console.log("Fetch to askRootTrusteeCertificateRemote=");
      const statusCode = response.status;
      console.log("statusCode=",statusCode);

      if (statusCode!=200) {
          return false;       
      }
      return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}


export {saveAddressCertificate, saveTrusteeCertificate, askRootTrusteeCertificateRemote};

/*

router.post('/askRootTrustee', requireAuth, async (req, res) => {
router.get('/rootTrusteeCertificate', requireAuth, async (req, res) => {



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

*/

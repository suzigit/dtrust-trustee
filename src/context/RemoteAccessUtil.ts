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
      console.log(error);
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
    console.log(error);
  }  
}

const askRootTrusteeCertificateRemote = async (subjectId:string, subjectName:string) => {
  
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
    console.log(error);
    return false;
  }
}

const getRootTrusteeCertificateRemote = async (subjectId:string, subjectName:string) => {

  try {

    const params = "?subjectId="+ subjectId + "&subjectName=" + subjectName;
    const url = serverURL + 'rootTrusteeCertificate'+params;
    console.log(url);

    const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': backendPassword
          }
        });
    
    console.log("Fetch to getRootTrusteeCertificateRemote");

    const responseJson = await response.json();
    console.log(responseJson);

    return responseJson;

  } catch (error) {
    console.log("Error during getRootTrusteeCertificateRemote" + error);
    return null;
  }

}


export {saveAddressCertificate, saveTrusteeCertificate, askRootTrusteeCertificateRemote, getRootTrusteeCertificateRemote};

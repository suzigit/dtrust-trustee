import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/Context';


import HomeScreen from './src/screens/HomeScreen';
import GetParticipationCertificate from './src/screens/GetParticipationCertificate';
import Registration from './src/screens/rootTrustee/Registration';
import AddTrustee from './src/screens/rootTrustee/AddTrustee';
import AddTrusteeStep2 from './src/screens/rootTrustee/AddTrusteeStep2';
import AddTrusteeStep3 from './src/screens/rootTrustee/AddTrusteeStep3';

import AskToConfirmYourAddress from './src/screens/basicUser/AskToConfirmYourAddress';
import AskToConfirmYourAddressStep2 from './src/screens/basicUser/AskToConfirmYourAddressStep2';
import GetAddressCertificate from './src/screens/basicUser/GetAddressCertificate';
import ViewAddressCertificate from './src/screens/basicUser/ViewAddressCertificate';

import ConfirmAddress from './src/screens/trustee/ConfirmAddress';
import ConfirmAddressStep2 from './src/screens/trustee/ConfirmAddressStep2';
import ConfirmAddressStep3 from './src/screens/trustee/ConfirmAddressStep3';

import AskToParticipate from './src/screens/trustee/AskToParticipate';

import ViewParticipationCertificate from './src/screens/ViewParticipationCertificate'
import i18n from 'i18n-js';



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Registration,
    AddTrustee,
    AddTrusteeStep2,
    AddTrusteeStep3,
    GetAddressCertificate,
    ViewAddressCertificate,

    AskToParticipate,
    ConfirmAddress,
    ConfirmAddressStep2,
    ConfirmAddressStep3,

    AskToConfirmYourAddress,
    AskToConfirmYourAddressStep2,

    GetParticipationCertificate,
    ViewParticipationCertificate,

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Confirmo'
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
}

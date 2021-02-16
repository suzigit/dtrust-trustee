import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/Context';


import HomeScreen from './src/screens/HomeScreen';
import GetCertificateToRegister from './src/screens/GetCertificateToRegister';
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

import ViewCertificate from './src/screens/ViewCertificate'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Registration: Registration,
    AddTrustee: AddTrustee,
    AddTrusteeStep2: AddTrusteeStep2,
    AddTrusteeStep3: AddTrusteeStep3,
    GetAddressCertificate: GetAddressCertificate,
    ViewAddressCertificate: ViewAddressCertificate,

    AskToParticipate: AskToParticipate,
    ConfirmAddress: ConfirmAddress,
    ConfirmAddressStep2: ConfirmAddressStep2,
    ConfirmAddressStep3: ConfirmAddressStep3,

    AskToConfirmYourAddress: AskToConfirmYourAddress,
    AskToConfirmYourAddressStep2: AskToConfirmYourAddressStep2,

    GetCertificateToRegister: GetCertificateToRegister,
    ViewCertificate: ViewCertificate,

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Confio',
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

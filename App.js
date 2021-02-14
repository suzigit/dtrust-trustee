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


import Trustee_AskToParticipate from './src/screens/Trustee_AskToParticipate';
import ViewCertificate from './src/screens/ViewCertificate'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Registration: Registration,
    AddTrustee: AddTrustee,
    AddTrusteeStep2: AddTrusteeStep2,
    AddTrusteeStep3: AddTrusteeStep3,

    GetCertificateToRegister: GetCertificateToRegister,
    Trustee_AskToParticipate: Trustee_AskToParticipate,
    ViewCertificate: ViewCertificate
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Está Dito',
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

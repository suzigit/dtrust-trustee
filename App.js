import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/Context';


import HomeScreen from './src/screens/HomeScreen';
import GetCertificateToRegister from './src/screens/GetCertificateToRegister';
import RegistrationScreen from './src/screens/RegistrationScreen';
import Trustee_AskToParticipate from './src/screens/Trustee_AskToParticipate';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Registration: RegistrationScreen,
    GetCertificateToRegister: GetCertificateToRegister,
    Trustee_AskToParticipate: Trustee_AskToParticipate
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Está Dito',
    },
  }
);

//export default createAppContainer(navigator);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
}

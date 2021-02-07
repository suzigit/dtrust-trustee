import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/Context';


import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Registration: RegistrationScreen,

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

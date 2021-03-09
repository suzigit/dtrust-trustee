import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/Context';

import SelectYourRole from './src/screens/SelectYourRole';
import HomeScreenBasicUser from './src/screens/basicUser/HomeScreenBasicUser';
import HomeScreenTrustee from './src/screens/trustee/HomeScreenTrustee';
import HomeScreenRootTrustee from './src/screens/rootTrustee/HomeScreenRootTrustee';

import GetParticipationCertificate from './src/screens/trustee/GetParticipationCertificate';
import GetParticipationCertificateAsRoot from './src/screens/rootTrustee/GetParticipationCertificateAsRoot';

import Registration from './src/screens/rootTrustee/Registration';
import AddTrustee from './src/screens/rootTrustee/AddTrustee';
import AddTrusteeStep2 from './src/screens/rootTrustee/AddTrusteeStep2';
import AddTrusteeStep3 from './src/screens/rootTrustee/AddTrusteeStep3';


import AskToConfirmYourAddress from './src/screens/basicUser/AskToConfirmYourAddress';
import AskToConfirmYourAddressStep2 from './src/screens/basicUser/AskToConfirmYourAddressStep2';
import GetAddressCertificate from './src/screens/basicUser/GetAddressCertificate';
import ViewAddressCertificate from './src/screens/basicUser/ViewAddressCertificate';
import ViewDataAddressCertificate from './src/screens/basicUser/ViewDataAddressCertificate';
import ViewNewAddressCertificate from './src/screens/basicUser/ViewNewAddressCertificate';

import GetTrusteeData from './src/screens/basicUser/GetTrusteeData';

import ConfirmAddress from './src/screens/trustee/ConfirmAddress';
import ConfirmAddressStep2 from './src/screens/trustee/ConfirmAddressStep2';
import ConfirmAddressStep3 from './src/screens/trustee/ConfirmAddressStep3';
import TrusteeRegistration from './src/screens/trustee/TrusteeRegistration';
import GetRootTrusteeData from './src/screens/trustee/GetRootTrusteeData';

import AskToParticipate from './src/screens/trustee/AskToParticipate';

import ViewParticipationCertificate from './src/screens/trustee/ViewParticipationCertificate'
import ViewNewParticipationCertificate from './src/screens/trustee/ViewNewParticipationCertificate'

import ViewParticipationCertificateAsRoot from './src/screens/rootTrustee/ViewParticipationCertificateAsRoot'

import ErrorState from './src/screens/ErrorState';

const navigator = createStackNavigator(
  {
    SelectYourRole,
    HomeScreenBasicUser,
    HomeScreenTrustee,
    HomeScreenRootTrustee,

    Registration,
    AddTrustee,
    AddTrusteeStep2,
    AddTrusteeStep3,
    GetAddressCertificate,
    ViewAddressCertificate,
    ViewDataAddressCertificate,
    ViewNewAddressCertificate,

    GetRootTrusteeData,
    TrusteeRegistration,
    AskToParticipate,
    ConfirmAddress,
    ConfirmAddressStep2,
    ConfirmAddressStep3,

    GetTrusteeData,
    AskToConfirmYourAddress,
    AskToConfirmYourAddressStep2,

    GetParticipationCertificate,
    ViewParticipationCertificate,
    ViewNewParticipationCertificate,
    ErrorState,
    GetParticipationCertificateAsRoot,
    ViewParticipationCertificateAsRoot
  },
  {
    initialRouteName: 'SelectYourRole',
    defaultNavigationOptions: {
      title: 'Confio',
      headerBackTitle: "" 
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

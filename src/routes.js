import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image, Text } from 'react-native';
import React from 'react';

import Main from './pages/Main';
import Webview from './pages/webview';
import About from './pages/About';
import Support from './pages/support';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: () => ({
        headerTitle: (
          // eslint-disable-next-line react/react-in-jsx-scope
          <Image
            style={{ height: 60, marginLeft: 115 }}
            source={require('../src/images/header_logo.png')}
          />
        ),
        headerStyle: {
          backgroundColor: '#080808',
          height: 80,
        },
      }),
    },
    Webview: {
      screen: Webview,
      navigationOptions: () => ({
        headerTintColor: 'red',
        headerStyle: {
          backgroundColor: '#080808',
        },
      }),
    },
    About: {
      screen: About,
      navigationOptions: () => ({
        headerTitle: <Text style={{ marginLeft: 100, fontSize: 20, color: 'red' }}>Sobre</Text>,
        headerTintColor: 'red',
        headerStyle: {
          backgroundColor: '#080808',
          borderBottomColor: '#101010',
          borderBottomWidth: 1,
        },
      }),
    },
    Support: {
      screen: Support,
      navigationOptions: () => ({
        headerTitle: <Text style={{ marginLeft: 70, fontSize: 20, color: 'red' }}>Apoiadores</Text>,
        headerTintColor: 'red',
        headerStyle: {
          backgroundColor: '#080808',
          borderBottomColor: '#101010',
          borderBottomWidth: 1,
        },
      }),
    },
  }),
);

export default Routes;

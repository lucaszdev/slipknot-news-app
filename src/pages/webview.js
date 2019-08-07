import React from 'react';

import { WebView } from 'react-native-webview';
// import { Text } from 'react-native';

const Webview = ({ navigation }) => (
  <WebView source={{ uri: navigation.state.params.dates.url }} />
);

export default Webview;

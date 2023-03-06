import React from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';

const MyWebView = ({route}) => {
    const url = route.params.url;
  console.log("🚀 ~ file: WebViewScreen.js:6 ~ MyWebView ~ url:", url)
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} />
    </View>
  );
};

export default MyWebView;
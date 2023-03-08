import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';
import {AxiosInstance} from './src/app/api/AxiosInstance';

const MyWebView = ({route}) => {
  const url = route.params.url;
  const [uri, setUri] = useState(null);
  console.log('🚀 ~ file: WebViewScreen.js:6 ~ MyWebView ~ url:', url);
  useEffect(() => {
    callApi();

    return () => {};
  }, []);

  const callApi = async () => {
    const url = 'http://localhost:3000/api/auth/google';
    setUri(url);
    await AxiosInstance().get(uri);
  };
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: url}}
        style={{
          marginTop: 50,
        }}
      />
    </View>
  );
};

export default MyWebView;

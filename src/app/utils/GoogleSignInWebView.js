import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const GoogleSignInWebView = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  // Handle the callback from the Google sign-in page
  const handleCallback = (event) => {
    const url = event.url;
    if (url.startsWith('http://localhost:3000/api/auth/google/callback')) {
      const regex = /[#?](.*)/;
      const params = regex.exec(url)[1];
      const token = params.split('=')[1];
      
      // Use the token to sign in with Firebase
      const googleCredential = auth.GoogleAuthProvider.credential(token);
      auth().signInWithCredential(googleCredential)
        .then(() => {
          setLoading(false);
          navigation.navigate('Home');
        })
        .catch((error) => console.error(error));
    }
  };

  // Load the Google sign-in page in the WebView
  const webViewContent = `
    <html>
      <head></head>
      <body>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
        <script>
          function onSignIn(googleUser) {
            var id_token = googleUser.getAuthResponse().id_token;
            window.location = 'http://localhost:3000/api/auth/google/callback?token=' + id_token;
          }
        </script>
      </body>
    </html>
  `;

  return (
    <WebView
      source={{ html: webViewContent }}
      onLoadEnd={() => setLoading(false)}
      onNavigationStateChange={(event) => handleCallback(event)}
    />
  );
};

export default GoogleSignInWebView;

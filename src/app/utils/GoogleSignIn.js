import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {View, Text} from 'react-native';
import React, {useState} from 'react';

import {AxiosInstance} from '../api/AxiosInstance';

const GoogleSignIn = ({navigation}) => {
  GoogleSignin.configure({
    scopes: ['profile', 'email'],
    webClientId:
      '8392071542-qv0h87gk534eib9b23gf90act35021if.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId:
      '8392071542-t639pcts126bcbb45t5nuof8i1j8f6da.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      // Get the users ID token
      const {idToken, user} = await GoogleSignin.signIn();
      console.log('🚀 ~ file: GoogleSignIn.js:24 ~ signIn ~ user:', user);
      console.log('🚀 ~ file: GoogleSignIn.js:24 ~ signIn ~ idToken:', idToken);
      setUserInfo(user);
      // Send the ID token to your server
      const res = await AxiosInstance().post(`/auth/google`, {
        idToken,
      });
      const res1 = await AxiosInstance().get(`/auth/google/callback`);

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      navigation.navigate('Home', {user});
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      // Handle any errors that occur during the sign-in process
      console.error(error);
    }
  };
  const [userInfo, setUserInfo] = useState(null);

  return (
    <View>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
      <View>
        <Text>
          {userInfo?.name} {userInfo?.email}
        </Text>
      </View>
    </View>
  );
};

export default GoogleSignIn;

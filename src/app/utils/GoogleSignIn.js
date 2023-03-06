//googlesignin in client-side
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {View, Text, Linking} from 'react-native';
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
      verifyGoogleToken(idToken);

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log("🚀 ~ file: GoogleSignIn.js:34 ~ signIn ~ googleCredential:", googleCredential)
      navigation.navigate('Callback');
      // Sign-in the user with the credential
      // return auth().signInWithCredential(googleCredential);
      
    } catch (error) {
      // Handle any errors that occur during the sign-in process
      console.error(error);
    }
  };
  const [userInfo, setUserInfo] = useState(null);
  const verifyGoogleToken = async idToken => {
    try {
      const response = await AxiosInstance().get(
        `/auth/google?idToken=${idToken}`,
      );
      console.log(response); // this should log the user object created by Passport
    } catch (error) {
      console.error(error);
    }
  };
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

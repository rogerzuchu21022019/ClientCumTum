//googlesignin in client-side
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {View, Text, Linking} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AxiosInstance} from '../api/AxiosInstance';

const GoogleSignIn = ({navigation}) => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['profile', 'email'],
      webClientId:
        '589127740205-na8pigj2lscu70ipub9r4n3tg9mmco68.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // iosClientId:
      //   '589127740205-c795j2ne2i38rdn3ljotkasq79b2nec5.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  
    return () => {
    }
  }, [])
  
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      // Get the users ID token
      const {idToken, user} = await GoogleSignin.signIn();
      console.log('🚀 ~ file: GoogleSignIn.js:24 ~ signIn ~ user:', user);
      console.log('🚀 ~ file: GoogleSignIn.js:24 ~ signIn ~ idToken:', idToken);
      setUserInfo(user);
      verifyGoogleToken(idToken);

      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // console.log("🚀 ~ file: GoogleSignIn.js:34 ~ signIn ~ googleCredential:", googleCredential)
      // navigation.navigate('Callback');
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
      const response = await AxiosInstance().post(
        `/auth/google?idToken=${idToken}`,
      );
      console.log(response); // this should log the user object created by Passport
    } catch (error) {
      console.error(error);
    }
  };

  const openWebView = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    // Get the users ID token
    const {idToken, user} = await GoogleSignin.signIn();
    await AxiosInstance().get(`/auth/google?idToken=${idToken}`);
    await AxiosInstance().get(`/auth/google/callback?idToken=${idToken}`);
    // navigation.navigate("Web", {url: "https://accounts.google.com/ServiceLogin/signinchooser?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AWnogHcoOT0LKXF6ajOwfG88F8P_SP4XS69D9giVgggBF3dq8TMk2MfstWMP6C8Lw3DMDQV-boGQlQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin"})
    // navigation.navigate('Web', {
    //   url: `http://192.168.2.101:3000/api/auth/google`,
    // });
  };
  return (
    <View>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={openWebView}
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

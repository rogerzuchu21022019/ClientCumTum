import * as React from 'react';
import {View, Text} from 'react-native';
import SafeKeyComponent from './src/app/components/safe_area/SafeKeyComponent';
import GoogleSignIn from './src/app/utils/GoogleSignIn';

const LoginScreen = ({navigation}) => {
  return (
    <SafeKeyComponent>
      <View>
        <Text>Hello I'm Hai'</Text>
        <GoogleSignIn navigation={navigation}/>
      </View>
    </SafeKeyComponent>
  );
};

export default LoginScreen;

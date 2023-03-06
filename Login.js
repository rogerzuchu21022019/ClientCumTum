import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SafeKeyComponent from './src/app/components/safe_area/SafeKeyComponent';
import GoogleSignIn from './src/app/utils/GoogleSignIn';
import checkPermission from './src/app/utils/Print';
import Home from './src/app/utils/Printer';

const LoginScreen = ({navigation}) => {
  return (
    <SafeKeyComponent>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'red',
            textAlign: 'center',
            marginTop: 50,
          }}>
          Hello I'm Hai'
        </Text>
        <TouchableOpacity onPress={checkPermission}>
          <Text>CheckPermission</Text>
        </TouchableOpacity>
        {/* <GoogleSignIn navigation={navigation}/> */}
      </View>
    </SafeKeyComponent>
  );
};

export default LoginScreen;

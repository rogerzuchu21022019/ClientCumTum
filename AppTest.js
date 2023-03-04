import {View, Text} from 'react-native';
import React from 'react';
import {color} from './src/app/utils/Css';
import SafeKeyComponent from './src/app/components/safe_area/SafeKeyComponent';
import GoogleSignIn from './src/app/utils/GoogleSignIn';

const App = () => {
  return (
    <SafeKeyComponent>
      <View>
        <Text>Hello I'm Hai'</Text>
        <GoogleSignIn/>
      </View>
    </SafeKeyComponent>
  );
};

export default App;

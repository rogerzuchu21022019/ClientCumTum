import * as React from 'react';
import {View, Text} from 'react-native';
import SafeKeyComponent from './src/app/components/safe_area/SafeKeyComponent';
import GoogleSignIn from './src/app/utils/GoogleSignIn';

const HomeScreen = ({route}) => {
  // const user = route.params.user;
  
  return (
    <SafeKeyComponent>
      <View>
        <Text>Home</Text>
      </View>
    </SafeKeyComponent>
  );
};

export default HomeScreen;

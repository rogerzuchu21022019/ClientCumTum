import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SafeKeyComponent from './src/app/components/safe_area/SafeKeyComponent';
import GoogleSignIn from './src/app/utils/GoogleSignIn';
import checkPermission from './src/app/utils/Print';

const HomeScreen = ({route}) => {
  // const user = route.params.user;

  return (
    <SafeKeyComponent>
      <View>
        <TouchableOpacity onPress={checkPermission}>
          <Text>CheckPermission</Text>
        </TouchableOpacity>
      </View>
    </SafeKeyComponent>
  );
};

export default HomeScreen;

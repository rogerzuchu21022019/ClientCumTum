import {View, Text} from 'react-native';
import React from 'react';
import {color} from './src/app/utils/Css';
import SafeKeyComponent from './src/app/components/safe_area/SafeKeyComponent';

const App = () => {
  return (
    <SafeKeyComponent>
      <View>
        <Text>Hello I'm Hai'</Text>
      </View>
    </SafeKeyComponent>
  );
};

export default App;

import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {AxiosInstance} from './src/app/api/AxiosInstance';
import SafeKeyComponent from './src/app/components/safe_area/SafeKeyComponent';
import GoogleSignIn from './src/app/utils/GoogleSignIn';

const GoogleCallback = ({route, navigation}) => {
  // const user = route.params.user;

  const gotoHome = async () => {
    const response = await AxiosInstance().get(`/auth/google/callback`);
    navigation.navigate('Home');
  };
  useEffect(() => {
    gotoHome();

    return () => {
      gotoHome();
    };
  }, [navigation]);

  return (
    <SafeKeyComponent>
      <View>
        <Text>Google callback</Text>
      </View>
    </SafeKeyComponent>
  );
};

export default GoogleCallback;

// @ts-nocheck
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

import {useDeviceOrientation} from '@react-native-community/hooks';

const SafeKeyComponent = (props) => {
  const {children} = props;
  /* ------------------------------- orientation ------------------------------ */
  const orientation = useDeviceOrientation();
  //   console.log('is orientation portrait: ', orientation.portrait);
  //   console.log('is orientation landscape: ', orientation.landscape);


  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <>
            {/* Bắt buộc === false mới chạy được UI */}
            {orientation.portrait === false ? (
              <ScrollView showsVerticalScrollIndicator={false}>
                {children}
              </ScrollView>
            ) : (
              <>{children}</>
            )}
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SafeKeyComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

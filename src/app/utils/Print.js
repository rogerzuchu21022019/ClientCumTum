import {View, Text, PermissionsAndroid, Platform} from 'react-native';
import React from 'react';
import {
  BluetoothManager,
  BluetoothEscposPrinter,
  BluetoothTscPrinter,
} from '@brooons/react-native-bluetooth-escpos-printer';
const checkPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const permissions = {
        'android.permission.BLUETOOTH': PermissionsAndroid.RESULTS.GRANTED,
        'android.permission.BLUETOOTH_ADMIN':
          PermissionsAndroid.RESULTS.GRANTED,
        'android.permission.BLUETOOTH_CONNECT':
          PermissionsAndroid.RESULTS.GRANTED,
        'android.permission.BLUETOOTH_SCAN': PermissionsAndroid.RESULTS.GRANTED,
      };

      const granted = await PermissionsAndroid.requestMultiple(
        Object.keys(permissions),
      );
      Object.keys(granted).forEach(permission => {
        const status = granted[permission];
        console.log('🚀 ~ file: Print.js:21 ~ Object.keys ~ status:', status);
        if (status !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log(`Permission ${permission} denied`);
        }
      });
      console.log('Bluetooth permissions granted');
      // Do something with Bluetooth here
    } catch (error) {
      console.warn(error);
      console.log('One or more Bluetooth permissions denied');
    }
  }
  checkEnableBluetooth();
  scanDevices();
};
const checkEnableBluetooth = async () => {
  const isEnabled = await BluetoothManager.checkBluetoothEnabled();

  console.log(isEnabled); // true/false
};

const scanDevices = async () => {
  const devices = await BluetoothManager.enableBluetooth();
  console.log('🚀 ~ devices:', devices[0]);
  return devices.map(device => {
    try {
      const res = JSON.parse(device);
      if (res.name === 'MX06') {
        connect(res);
      }
      console.log('🚀 ~ file: Print.js:53 ~ scanDevices ~ res:', res);
    } catch (e) {
      return null;
    }
  });
};

const connect = async res => {
  console.log("🚀 ~ file: Print.js:63 ~ connect ~ device:", res)
  const connected = await BluetoothManager.connect(res.address);
  console.log('🚀 ~ file: Print.js:60 ~ connect ~ connected:', connected);
  return connected;
};
export default checkPermission;

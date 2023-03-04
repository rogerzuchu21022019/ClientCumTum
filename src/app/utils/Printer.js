import {
  AppRegistry,
  Button,
  StyleSheet,
  NativeModules,
  Platform,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

// import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';

const Printer = () => {
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const choosePrinter = async () => {
    const selectPrinter = await RNPrint.selectPrinter({x: 100, y: 100});
    selectedPrinter(selectPrinter);
  };

  const printHTML = async () => {
    await RNPrint.print({
      html: '<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3>',
    });
  };

  const printPDF = async () => {
    const results = await RNHTMLtoPDF.convert({
      html: '<h1>Custom converted PDF Document</h1>',
      fileName: 'test',
      base64: true,
    });

    await RNPrint.print({filePath: results.filePath});
  };

  const printRemotePDF = async () => {
    await RNPrint.print({
      filePath: 'https://graduateland.com/api/v2/users/jesper/cv',
    });
  };

  return (
    <View>
      <Text>Printer</Text>
      <Button onPress={choosePrinter} title="Select Printer" />
      <Button onPress={printHTML} title="Print HTML" />
      <Button onPress={printPDF} title="Print PDF" />
      <Button onPress={printRemotePDF} title="Print Remote PDF" />
    </View>
  );
};

export default Printer;

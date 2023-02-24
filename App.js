import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableHighlight, Image } from 'react-native';
import React from 'react';
import Navigator from './routes/loginStack';
import homeStack from './routes/homeStack';

export default function App({navigation}) {

  const [email, emailOnChange] = React.useState('');

  return (
        <Navigator></Navigator>
  );
}

const primary = '#f5424e';
const lightBlue = '#E3F2FD';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    height: 32,
    margin: 8,
    width: '95%',
    borderRadius: 0,
    color: "white",
    fontSize: 18
  },
  buttonOuter:{
    width: '100%',
    borderRadius: 15,
  },
  button:{
    width: '100%',
    backgroundColor: primary,
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },buttonText:{
    color: "white",
    textAlign: 'center',
    fontSize: 18,
    fontWeight: "bold",
  },textMuted: {
    color: "black",
    marginTop: 4, 
  },
  parkingImage:{
    height: 300,
    width: 300,
    marginBottom: 32
  }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React from 'react';

export default function App() {

  const [email, emailOnChange] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>email</Text>
          <TextInput value={email} onChange={newText => emailOnChange(newText)} placeholder='email@gmail.com' style={styles.textInput} />
          <Text>heslo</Text>
          <TextInput secureTextEntry={true} placeholder='password' style={styles.textInput} />
          <Button style={styles.button} title="log In" />
        <StatusBar style="auto" />
    </View>
  );
}

const orange = '#FF9F1C';
const lightBlue = '#E3F2FD';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: lightBlue,
    height: 32,
    margin: 8,
    width: '100%',
    borderRadius: 0,
  },
  button:{
    width: 100,
    margin: 16,
    backgroundColor: 'green'
  }
});

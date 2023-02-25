import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,  Alert, TouchableHighlight, Image } from 'react-native';
// import { auth } from '../firebase';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { getAuthObj } from '../firebase';
import React from 'react';
import mainStyles from "../styles";

export default function Login({navigation}) {

  const [email, emailOnChange] = React.useState('');
  const [password, passwordOnChange] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const LogIn = ()=>{
    console.log(email);
    console.log(password);
    signInWithEmailAndPassword(getAuthObj(), email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigation.replace("HomeStack");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorMessage);
      setErrorMessage("wrong email or password!");
            // Alert.alert('Error', errorMessage, [{ text: 'OK' }], { cancelable: false });
    });
   
    // navigation.navigate('Home');
  }



  return (

    <View style={styles.container}>
      {/* <Text>email</Text> */}
          <Image style={styles.parkingImage} source={require('../assets/parking.png')}></Image>
          <TextInput value={email} onChange={e => {emailOnChange(e.nativeEvent.text)}} placeholder='email@gmail.com' placeholderTextColor={ errorMessage? "red" : "white"} style={errorMessage ? mainStyles.errorTextInput : mainStyles.textInput} />
          {/* <Text>heslo</Text> */}
          <TextInput secureTextEntry={true}  onChange={e => {passwordOnChange(e.nativeEvent.text)}} placeholder='password' placeholderTextColor={ errorMessage? "red" : "white"} style={errorMessage ? mainStyles.errorTextInput : mainStyles.textInput} />
          {/* <View style={styles.button}>
          <Button title="log In" onPress={()=>console.log("button")} />
          </View> */}
          <TouchableHighlight style={mainStyles.buttonOuter} onPress={LogIn}>
            <View style={mainStyles.buttonPrimary}>
              <Text style={mainStyles.buttonTextLight}>Log In</Text>
            </View>
          </TouchableHighlight>
          {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
          <View style={{flexDirection: 'row', alignItems: "center", justifyContent: "center"}}>
          <Text style={mainStyles.textMuted}>if you don't have account yet you can </Text>
          <Text style={{fontWeight: "bold", marginTop: 3}} onPress={()=>navigation.navigate('Register')}>register</Text>
          
          </View>
        <StatusBar style="auto" />
    </View>
  );
}

const primary = '#f5424e';
const lightBlue = '#E3F2FD';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainStyles.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 15,
  },
  parkingImage:{
    height: 300,
    width: 300,
    marginBottom: 32
  },
  errorMessage: {
    color: "red",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  }
});

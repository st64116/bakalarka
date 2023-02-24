import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableHighlight, Image } from 'react-native';
import React from 'react';
import homeStack from '../routes/homeStack';
import styleProp from "../styles"

export default function Login({navigation}) {

  const [email, emailOnChange] = React.useState('');

  const LogIn = ()=>{
    // navigation.navigate('Home');
    navigation.replace("HomeStack");
  }

  return (

    <View style={styles.container}>
      {/* <Text>email</Text> */}
          <Image style={styles.parkingImage} source={require('../assets/parking.png')}></Image>
          <TextInput value={email} onChange={e => {emailOnChange(e.nativeEvent.text)}} placeholder='email@gmail.com' placeholderTextColor="white"  style={styles.textInput} />
          {/* <Text>heslo</Text> */}
          <TextInput secureTextEntry={true} placeholder='password' placeholderTextColor="white" style={styles.textInput} />
          {/* <View style={styles.button}>
          <Button title="log In" onPress={()=>console.log("button")} />
          </View> */}
          <TouchableHighlight style={styles.buttonOuter} onPress={LogIn}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Log In</Text>
            </View>
          </TouchableHighlight>
          <View style={{flexDirection: 'row', alignItems: "center", justifyContent: "center"}}>
          <Text style={styles.textMuted}>if you don't have account yet you can </Text>
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

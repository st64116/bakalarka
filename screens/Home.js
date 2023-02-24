import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableHighlight, TouchableOpacity , Image, ScrollView } from 'react-native';
import React from 'react';
import styleProp from "../styles.js";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Home({navigation}) {

  function goToProfile(){
    navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      </ScrollView>
                  <TouchableOpacity style={styleProp.floatingButton}  onPress={goToProfile}>
                  <View style={{ justifyContent: "center", alignItems: "center"}} >
                  <Icon name="gear" size={40} color="white" />
                  </View>
                </TouchableOpacity>
                </View>
  );
}

const primary = '#f5424e';
const lightBlue = '#E3F2FD';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    padding: 15,
  }
});

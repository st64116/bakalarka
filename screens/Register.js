import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableHighlight, Image, ScrollView } from 'react-native';
import React from 'react';

export default function Register(props) {

  return (
      <ScrollView style={styles.container}>
      <Text>Register</Text>
      </ScrollView>
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

import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from 'react-navigation'
import { Button, View, TouchableHighlight, Text } from "react-native";
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const screens = {
    Home:{
        screen: Home,
        navigationOptions: () => ({
          headerStyle: {
            backgroundColor: 'dodgerblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }),
    },
    Profile: {
      screen: Profile,
      navigationOptions:{
          headerStyle: {
              backgroundColor: 'dodgerblue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
      }
  },
}

export default createStackNavigator(screens);

import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from 'react-navigation'
import { Button, View, TouchableHighlight, Text } from "react-native";
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from "./homeStack";

const screens = {
    Login:{
        screen: Login,
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
    Register: {
      screen: Register,
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
  HomeStack: {
    screen: Home,
    navigationOptions: () => ({
        headerShown: false, // set headerShown to false
      })
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
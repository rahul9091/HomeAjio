import React from 'react';
import { Button, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import { HomePage,Bag} from '../Screens';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <React.Fragment>
      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.HOMEPAGE} component={HomePage} />
      <Stack.Screen options={{ headerShown: true }} name={navigationStrings.BAG} component={Bag} />

      


    </React.Fragment>
  );
}

export default AuthStack;
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
// import {connect } from "react-redux"



const Stack = createStackNavigator();

 

function Routes(props) {
    // const userDataContext = useContext(userContext);
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
         
      {/* {isLoggedin?<>{MainStack()}</>:<>{AuthStack()}</>} */}
      {/* {AuthStack()} */}
      {MainStack(Stack)}
      
{/* 
       {AuthStack()}
       {MainStack()} */}
       {/* {AuthStack()} */}
       {/* {MainStack()} */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
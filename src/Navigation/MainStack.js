import React, { Fragment } from 'react';
import navigationStrings from '../constants/navigationStrings';
// import BottomTabNavigator from './BottomTabNavigator';
import SideDrawer from './SideDrawer';
import {HomePage,Bag} from '../Screens';

export default function (Stack) {
    return (
        <Fragment>
            <Stack.Screen name={navigationStrings.DRAWER} component={SideDrawer} options={{ headerShown: false}} />
            <Stack.Screen options={{ headerShown: false }} name={navigationStrings.HOMEPAGE} component={HomePage} />
      <Stack.Screen options={{ headerShown: true }} name={navigationStrings.BAG} component={Bag} />
        </Fragment>
    )
}
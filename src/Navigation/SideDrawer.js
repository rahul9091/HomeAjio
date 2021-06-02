import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings'

import {Chat,Graph, HomePage} from '../Screens';
import colors from '../styles/colors'
import { Icon } from 'react-native-vector-icons/icon';
// import ChatStack from './ChatStack';



export default function SideDrawer() {
    const Drawer = createDrawerNavigator();

    return (

        <Drawer.Navigator initialRouteName={navigationStrings.HOMEPAGE} drawerStyle={{
            backgroundColor: colors.lightGreyBg,
            width: 195,


        }}
        >
            <Drawer.Screen  name={navigationStrings.HOMEPAGE}
                component={HomePage} />
            <Drawer.Screen name={navigationStrings.CHAT}
                component={Chat} />
            <Drawer.Screen name={navigationStrings.GRAPH}
                component={Graph} />
        </Drawer.Navigator>

    )
}
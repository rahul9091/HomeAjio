import React from 'react';
import {Image, Text,TouchableOpacity,View} from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import {AntDesign} from 'react-native-vector-icons'
import {useNavigation} from '@react-navigation/native'
import navigationStrings from '../constants/navigationStrings';

const Header = (props) => {
    const navigation = useNavigation()
    return (
        <View style={{ alignItems:'center', justifyContent: 'space-between', flexDirection: 'row-reverse',elevation:10 }}>
        {/* <Entypo name="cross" size={28} color="black" onPress={() => navigation.goBack()} /> */}
        <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.BAG)}>
        <Image style={{height:50,width:50}} source={{uri:"https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png"}}/>
        </TouchableOpacity>
        {/* <AntDesign name="shoppingcart" size={24} color="black" onPress={()=> console.log("cartPressed")}/> */}
        <Text style={{fontSize:30,fontWeight:'bold',marginLeft:20}}>AJIO</Text>
      
        {/* <AntDesign name="hearto" size={28} color="black" /> */}
     
    </View>
    )
}

export default Header;
import React from 'react';
import {Image, Text,TouchableOpacity,View} from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import {AntDesign} from 'react-native-vector-icons'
import {useNavigation} from '@react-navigation/native'
import navigationStrings from '../constants/navigationStrings';
import {connect} from 'react-redux';

const Header = (props) => {
    let {count,cartAry} = props
    console.log(cartAry,'cartary reached header')
    const navigation = useNavigation()
    return (
        <View style={{ alignItems:'center', justifyContent: 'space-between', flexDirection: 'row-reverse',elevation:10 }}>
        {/* <Entypo name="cross" size={28} color="black" onPress={() => navigation.goBack()} /> */}
        <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.BAG)}>
        <Text style={{fontSize:20,position:'absolute',backgroundColor:'red',color:'white',padding:4,borderRadius:20,zIndex:1}}>{cartAry.length}</Text>
        <Image style={{height:50,width:50}} source={{uri:"https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png"}}/>
        </TouchableOpacity>
        {/* <AntDesign name="shoppingcart" size={24} color="black" onPress={()=> console.log("cartPressed")}/> */}
        <Text style={{fontSize:30,fontWeight:'bold',marginLeft:20,zIndex:0.1}}>AJIO</Text>
        <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.DRAWER)}>
        <Image style={{height:50,width:50}} source={{uri:'https://cdn4.iconfinder.com/data/icons/mobile-app-navigation-line-style/32/Hamburger_Menu-512.png'}}/>
        </TouchableOpacity>
        
      
        {/* <AntDesign name="hearto" size={28} color="black" /> */}
     
    </View>
    )
}

const mapStateToProps = (state) => {
    // const count = props;
    // console.log(count,'count reached Header')
    return {
        count:state.shopReducer.count,
        cartAry:state.shopReducer.cartAry
    }
}

export default connect(mapStateToProps)(Header)
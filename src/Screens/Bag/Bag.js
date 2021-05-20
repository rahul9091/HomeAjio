import React, { Component } from 'react';
import {Image, Text,View,TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import { SwipeListView } from 'react-native-swipe-list-view';

 class Bag extends Component{
     constructor(props){
         super(props);
     }

     renderItem = ({ item }) => {
        return (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "white",
              minHeight: 150,
              borderRadius: 10,
              borderBottomWidth:1,
              borderColor:'black',
              borderWidth:2,
              borderBottomColor:'grey',
              marginBottom:5
            }}
          >
            <View style={{ flex: 3 ,justifyContent:'center' }}>
              <Image
                source={{uri:item.image}}
                style={{
                  width: 90,
                  height: 120,
                  marginVertical: 10,
                  marginHorizontal: 10,
                  borderRadius: 5,
                }}
              />
            </View>
            <View style={{ flex: 6, flexDirection: "column" , justifyContent:'space-evenly' }}>
              <View style={{ marginHorizontal: 10 }}>
                <Text style={{ color: "#636363" , fontWeight: "bold"  }}>{item.name}</Text>
              </View>
              <View style={{ marginHorizontal: 10 }}>
                <Text style={{ color: "#757575" }}>{item.text}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginHorizontal: 2,
                }}
              >
                <Text style={{ color: "#040404", fontWeight: "bold" }}>
                  {item.reducedPrice}
                </Text>
                <Text
                  style={{ color: "#040404", textDecorationLine: "line-through" }}
                >
                  {item.originalPrice}
                </Text>
                <Text style={{ color: "#209169" , fontWeight: "bold"}}>{item.discount} OFF</Text>
              </View>
            </View>
          </View>
        );
      }

    render(){
        const {cartAry} = this.props;
        console.log(cartAry,"Item reached the bag screen")
        return (
            // <View>
            //     <Text>WElcome to Bag</Text>
            //     <FlatList
            //     data={cartAry}
            //     keyExtractor={(item)=> item.id}
            //     renderItem={this.renderItem}
                
            //     />
            // </View>
            <SwipeListView
    useFlatList={true}
    data={cartAry}
    renderItem={this.renderItem}
    renderHiddenItem={ (rowData, rowMap) => (
        <View >
            <TouchableOpacity style={{backgroundColor:'red',padding:58}} onPress={ () => rowMap[rowData.item.key].closeRow() }>
                <Text style={{fontSize:30,marginLeft:-50,alignItems:'baseline',justifyContent: 'center',}}>Close</Text>
            </TouchableOpacity>
        </View>
    )}
    leftOpenValue={75}
    rightOpenValue={-150}
    onRowOpen={(rowKey, rowMap) => {
        setTimeout(() => {
            rowMap[rowKey].closeRow()
        }, 2000)
    }}
/>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartAry:state.shopReducer.cartAry
    }
}
export default connect(mapStateToProps)(Bag)
// export default Bag;


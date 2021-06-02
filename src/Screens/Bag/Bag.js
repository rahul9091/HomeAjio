import React, { Component } from 'react';
import {Image, Text,View,TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import { SwipeListView } from 'react-native-swipe-list-view';
import actions from '../../redux/actions';

 class Bag extends Component{
     constructor(props){
         super(props);
     }

     renderItem = ({ item,index }) => {
       const {count} = this.props
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
                <View style={{paddingHorizontal:10,alignItems: "stretch",justifyContent: 'space-between',flexDirection:'row'}}>
                  <Text style={{marginLeft:10}}>QTY: {count}</Text>
                  <TouchableOpacity style={{marginLeft:10,backgroundColor:'grey',marginHorizontal:7,borderRadius:20}} onPress={()=> this.increaseItem(index)}>
                <Text style={{fontSize:22,paddingHorizontal:10}}>+</Text>
                
                </TouchableOpacity>
                {/* <Text>1111</Text> */}
                <TouchableOpacity style={{backgroundColor:'grey',borderRadius:20}}>
                <Text style={{fontSize:22,paddingHorizontal:10}}>-</Text>
                </TouchableOpacity>
                </View>
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


      increaseItem = (index) => {
        const {cartAry} = this.props
        console.log(index,'got index in bagt')
        let increasedAry = [...cartAry]
        const index1 = index
        console.log(increasedAry,'array increased in bag')
        actions.increaseCart(increasedAry,index1)
      }


      deleteItem = (id) => {
        console.log(id,'got id the bag')
        actions.deleteFromCart(id)

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
    renderHiddenItem={ ({item,index}) => (
      
        <View >
            <TouchableOpacity style={{backgroundColor:'grey',padding:49}}
            onPress={()=> this.deleteItem(item.id)}> 
            {/* // onPress={ () => rowMap[rowData.item.key].closeRow() }> */}
                <Image style={{height:50,width:50,marginLeft:-50,alignItems:'baseline',justifyContent: 'center'}} source={{uri:"https://icons-for-free.com/iconfiles/png/512/close+icon-1320184117228553763.png"}}/>
                <TouchableOpacity onPress={()=> console.log("Delete icions presseds")}>
                <Image style={{height:50,width:50,marginLeft:240,justifyContent: 'center',alignItems:'stretch',marginTop:-45}} source={{uri:'https://www.searchpng.com/wp-content/uploads/2019/03/Delete-Icon-PNG-Image-715x715.png'}}/>
                </TouchableOpacity>
            </TouchableOpacity>
            {/* <TouchableOpacity style={{backgroundColor:'red',padding:58}} onPress={ () => rowMap[rowData.item.key].closeRow() }>
                <Text style={{fontSize:30,marginLeft:-50,alignItems:'baseline',justifyContent: 'center',}}>Delete</Text>
            </TouchableOpacity> */}
        </View>
    )}
    // leftOpenValue={75}
    rightOpenValue={-80}
    // onRowOpen={(rowKey, rowMap) => {
    //     setTimeout(() => {
    //         rowMap[rowKey].closeRow()
    //     }, 2000)
    // }}
/>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartAry:state.shopReducer.cartAry,
        count:state.shopReducer.count
    }
}
export default connect(mapStateToProps)(Bag)
// export default Bag;


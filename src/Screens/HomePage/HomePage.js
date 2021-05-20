import React, { Component } from 'react';
import {FlatList, Text,View,StyleSheet,TouchableOpacity,Image} from 'react-native';
import Header from '../../Components/Header';
import actions from '../../redux/actions';
import FlashMessage from "react-native-flash-message";
import Toast from 'react-native-toast-message';


export default class HomePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      productsArray: [
        {
          id: 1,
          name: "BuyNewTRend",
          text: "Lightly Washed Jacket With Patch Pocket",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20201119/TzK8/5fb5a8e1aeb269d5631380e9/om_sai_latest_creation_grey_block_print_a-line_kurti.jpg",
          originalPrice: "Rs 1599",
          reducedPrice: "Rs 610",
          discount: "46%",
          productDetail:"5th Anfold is a profeesional clothing sales company which is collection of extra-ordinary shirts.5th Anfold try their best to make every piece of shirt with is class comfort porche design and lead fashion trends.Through exquisite technology,high quality fabrics,a variety of options,bright colours,with each garment.5th Anfold offers every customer high quality clothing showing their different unique personality,styles and the grade of life and culture."
        },
        {
          id: 2,
          name: "PERFORMAX",
          text: "QuickDry Unlined Runing Windbreaker Jacket",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20201225/uTHR/5fe610a2aeb2694fd3000abb/performax__quickdry_unlined_running_windbreaker_jacket.jpg",
          originalPrice: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "56%",
          productDetail:"5th Anfold is a profeesional clothing sales company which is collection of extra-ordinary shirts.5th Anfold try their best to make every piece of shirt with is class comfort porche design and lead fashion trends.Through exquisite technology,high quality fabrics,a variety of options,bright colours,with each garment.5th Anfold offers every customer high quality clothing showing their different unique personality,styles and the grade of life and culture."
        },
        {
          id: 3,
          name: "PETER ENGLAND",
          text: "Zip-Front Biker Jacket",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210216/U1xH/602ae2647cdb8c1f144143c0/peter_england_navy_blue_zip-front_biker_jacket.jpg",
          originalPrice: "Rs 2199",
          reducedPrice: "Rs 658",
          discount: "34%",
          productDetail:"5th Anfold is a profeesional clothing sales company which is collection of extra-ordinary shirts.5th Anfold try their best to make every piece of shirt with is class comfort porche design and lead fashion trends.Through exquisite technology,high quality fabrics,a variety of options,bright colours,with each garment.5th Anfold offers every customer high quality clothing showing their different unique personality,styles and the grade of life and culture."
        },
        {
          id: 4,
          name: "PERFORMAX",
          text: "Quick Dry Jacket With Mask",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210203/2PUl/601abd9a7cdb8c1f1434e571/performax_navy_blue_quick_dry_running_jacket_with_mask.jpg",
          originalPrice: "Rs 2299",
          reducedPrice: "Rs 640",
          discount: "45%",
          productDetail:"5th Anfold is a profeesional clothing sales company which is collection of extra-ordinary shirts.5th Anfold try their best to make every piece of shirt with is class comfort porche design and lead fashion trends.Through exquisite technology,high quality fabrics,a variety of options,bright colours,with each garment.5th Anfold offers every customer high quality clothing showing their different unique personality,styles and the grade of life and culture."
        },
        {
          id: 5,
          name: "LEVIS",
          text: "Washed Button-Down Denim Trucker Jacket",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210205/sQWC/601c46e0f997dd5c40e7dae2/levis_black_washed_button-down_denim_trucker_jacket.jpg",
          originalPrice: "Rs 2589",
          reducedPrice: "Rs 640",
          discount: "90%",
          productDetail:"5th Anfold is a profeesional clothing sales company which is collection of extra-ordinary shirts.5th Anfold try their best to make every piece of shirt with is class comfort porche design and lead fashion trends.Through exquisite technology,high quality fabrics,a variety of options,bright colours,with each garment.5th Anfold offers every customer high quality clothing showing their different unique personality,styles and the grade of life and culture."
        },
        {
          id: 6,
          name: "PUMA",
          text: "Mercedes AMg Petronas Sweat Jacket with Pockets",
          image:
            "https://assets.ajio.com/medias/sys_master/root/h5c/h15/14163266502686/puma__mercedes_amg_petronas_sweat_jacket_with_pockets.jpg",
          originalPrice: "Rs 1699",
          reducedPrice: "Rs 600",
          discount: "50%",
          productDetail:"5th Anfold is a profeesional clothing sales company which is collection of extra-ordinary shirts.5th Anfold try their best to make every piece of shirt with is class comfort porche design and lead fashion trends.Through exquisite technology,high quality fabrics,a variety of options,bright colours,with each garment.5th Anfold offers every customer high quality clothing showing their different unique personality,styles and the grade of life and culture."
        },
        {
          id: 7,
          name: "Maniac",
          text: "Quilted Zip-Front Sleeveless Jacket",
          image:
            "https://rukminim1.flixcart.com/image/428/514/kbjox3k0/t-shirt/z/b/a/l-ss18-fs-chckd-black-olive-maniac-original-imafsvgrhmedjqs4.jpeg?q=50",
          originalPrice: "Rs 1599",
          reducedPrice: "Rs 600",
          discount: "76%",
          productDetail:"5th Anfold is a profeesional clothing sales company which is collection of extra-ordinary shirts.5th Anfold try their best to make every piece of shirt with is class comfort porche design and lead fashion trends.Through exquisite technology,high quality fabrics,a variety of options,bright colours,with each garment.5th Anfold offers every customer high quality clothing showing their different unique personality,styles and the grade of life and culture."
        },
        {
          id: 8,
          name: "Nike",
          text: "Dri-Fit Zip Front Bomber Jacket With INsert Pockets",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210218/cxAD/602d74837cdb8c1f1442cbe0/nike_grey_dri-fit_zip-front_bomber_jacket_with_insert_pockets.jpg",
          originalPrice: "Rs 1399",
          reducedPrice: "Rs 550",
          discount: "86%",
          productDetail:"5th Anfold is a profeesional clothing sales company which is collection of extra-ordinary shirts.5th Anfold try their best to make every piece of shirt with is class comfort porche design and lead fashion trends.Through exquisite technology,high quality fabrics,a variety of options,bright colours,with each garment.5th Anfold offers every customer high quality clothing showing their different unique personality,styles and the grade of life and culture."
        },
        {
          id: 9,
          name: "EASYFEED",
          text: "Women A line Grey Dress and very Good idea of dreesing sense",
          image:
            "https://rukminim1.flixcart.com/image/428/514/kl8ccy80/dress/z/h/i/3xl-272-easyfeed-original-imagyefyjzupes3k.jpeg?q=50",
          originalPrice: "Rs 2099",
          reducedPrice: "Rs 610",
          discount: "44%",
          productDetail:"5th Anfold is a profeesional clothing sales company which is collection of extra-ordinary shirts.5th Anfold try their best to make every piece of shirt with is class comfort porche design and lead fashion trends.Through exquisite technology,high quality fabrics,a variety of options,bright colours,with each garment.5th Anfold offers every customer high quality clothing showing their different unique personality,styles and the grade of life and culture."
        },
        {
          id: 10,
          name: "VEBNOR",
          text: "Art Silk Woven Saree with varansi Look aand Feel",
          image:
            "https://rukminim1.flixcart.com/image/309/371/kiyw9e80-0/fabric/i/h/g/yes-unstitched-self-design-vebnor-original-imafyn3cz3bag3wn.jpeg?q=50",
          originalPrice: "Rs 2299",
          reducedPrice: "Rs 240",
          discount: "47%",
          productDetail:"5th Anfold is a profeesional clothing sales company which is collection of extra-ordinary shirts.5th Anfold try their best to make every piece of shirt with is class comfort porche design and lead fashion trends.Through exquisite technology,high quality fabrics,a variety of options,bright colours,with each garment.5th Anfold offers every customer high quality clothing showing their different unique personality,styles and the grade of life and culture."
        },
        {
          id: 11,
          name: "Jacket",
          text: "Winter Jacket",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210216/U1xH/602ae2647cdb8c1f144143c0/peter_england_navy_blue_zip-front_biker_jacket.jpg",
          originalPrice: "Rs 1099",
          reducedPrice: "Rs 250",
          discount: "60%",
          productDetail:"5th Anfold is a profeesional clothing sales company which is collection of extra-ordinary shirts.5th Anfold try their best to make every piece of shirt with is class comfort porche design and lead fashion trends.Through exquisite technology,high quality fabrics,a variety of options,bright colours,with each garment.5th Anfold offers every customer high quality clothing showing their different unique personality,styles and the grade of life and culture."
        },
        {
          id: 12,
          name: "Lehenga",
          text: "PeaCock Lehanga",
          image:
            "https://assets.ajio.com/medias/sys_master/root/ajio/catalog/5f0ef704f997dd433b4de59c/dillinger_blue_colourblock_crew-neck_t-shirt.jpg",
          originalPrice: "Rs 1599",
          reducedPrice: "Rs 620",
          discount: "63%",
          productDetail:"5th Anfold is a profeesional clothing sales company which is collection of extra-ordinary shirts.5th Anfold try their best to make every piece of shirt with is class comfort porche design and lead fashion trends.Through exquisite technology,high quality fabrics,a variety of options,bright colours,with each garment.5th Anfold offers every customer high quality clothing showing their different unique personality,styles and the grade of life and culture."
        },
        {
          id: 13,
          name: "SUPERDRY",
          text: "Storm Sonic Luxe Hybrid Quilted Zip Frond Hoodie",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20201113/PzWK/5fae7e77aeb269d5630e2180/superdry_pink_storm_sonic_luxe_hybrid_quilted_zip-front_hoodie.jpg",
          originalPrice: "Rs 1299",
          reducedPrice: "Rs 500",
          discount: "67%",
          productDetail:"5th Anfold is a profeesional clothing sales company which is collection of extra-ordinary shirts.5th Anfold try their best to make every piece of shirt with is class comfort porche design and lead fashion trends.Through exquisite technology,high quality fabrics,a variety of options,bright colours,with each garment.5th Anfold offers every customer high quality clothing showing their different unique personality,styles and the grade of life and culture."
        },
        {
          id: 14,
          name: "Steve Madden",
          text: "Ariele Strappy Flat Sandals",
          image:
            "https://assets.ajio.com/medias/sys_master/root/ajio/catalog/5f036f937cdb8c721b7858b0/steve_madden_brown_ariele_strappy_flat_sandals.jpg",
          originalPrice: "Rs 2199",
          reducedPrice: "Rs 600",
          discount: "45%",
          productDetail:"5th Anfold is a profeesional clothing sales company which is collection of extra-ordinary shirts.5th Anfold try their best to make every piece of shirt with is class comfort porche design and lead fashion trends.Through exquisite technology,high quality fabrics,a variety of options,bright colours,with each garment.5th Anfold offers every customer high quality clothing showing their different unique personality,styles and the grade of life and culture."
        },
      ],
      count:0,
      cartArray:[],
      cardData:[]
    }
  }

  renderItem = ({ item,index }) => {
    return (
    
        <View style={{ flex: 1, flexDirection: "column" , marginBottom:10 , marginTop:10}}>
          <TouchableOpacity >
              {/* <Header/> */}
          <Image
            source={{ uri: item.image }}
            style={{
              width: 180,
              borderRightWidth:2,
              borderColor:'red',
              height: 220,
              borderColor:'red',
              resizeMode: "contain",
              flexDirection: "row",
              justifyContent: "center",
              borderRadius: 2 ,
              marginBottom:5,
              zIndex:2
            }}
          />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", justifyContent: 'space-around' , marginBottom:5}}>
            <Text style={{ color: "#6c6c6c", fontWeight: "bold",fontSize:14 }}>
              {item.name}
            </Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: 'space-between' , marginBottom:5,marginLeft:5}}>
            <Text style={{ color: "#747474" }}>{item.text}</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" , marginBottom:5}}
          >
            <Text style={{ color: "#141414", fontWeight: "bold",marginLeft:-15 }}>
              {item.reducedPrice}
            </Text>
            <Text
              style={{
                color: "#7d7d7d",
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
                marginLeft:-90
              }}
            >
              {item.originalPrice}
            </Text>
        
          </View>
          <View style={styles.cartStyle}>
            <TouchableOpacity >
              <TouchableOpacity onPress={()=>this.addToCart(item.id)} >
              <Image style={{height:40,width:40}} source={{uri:"https://cdn0.iconfinder.com/data/icons/shopping-extras-set-1/512/1-512.png"}}/>
              </TouchableOpacity>
            </TouchableOpacity>
            </View>
        </View>
    );
  };

  addToCart = (id) => {
      const {productsArray} = this.state;
      let newArray = [...productsArray]
      console.log(newArray,"newArray is in Addto cart function")
      const id1 = id;
      console.log(id1,"got id1 in addtocart FUnction")
      const index = newArray.findIndex((item)=> item.id === id)
      console.log(index,'got index in the add to cart function')
      actions.addToCart(newArray,index)



  }

   toastConfig = {
    success: ({ text1, props, ...rest }) => (
      <View style={{ height: 20, width: '50%', backgroundColor: 'green'}}>
        <Text style={{fontSize:20}}>{text1}</Text>
        {/* <Text>{props.guid}</Text> */}
      </View>
    ),
    error: () => {},
    info: () => {},
    any_custom_type: () => {}
  };

  render(){
    const {productsArray}= this.state;
    // console.log(productsArray,"got the product array in app.js")
    return (
      <View >
          <FlashMessage position="top"/>
          <Header/>
          
          <Toast activeOpacity={1000}  ref={(ref) => Toast.setRef(ref)} />
      <FlatList 
      data={productsArray}
      renderItem={this.renderItem}
      numColumns={2}
      />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  forlogoHeading: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textInput: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    maxHeight: 50,
    // borderRadius: 12,
    marginLeft: 32
  },
  inputField: {
    padding: 8
  },
  header: {
    flex: 2,
    backgroundColor: "#f0f4f7",
    justifyContent:'space-around'
  },
  cartStyle:{
    marginLeft:30,
    width: "60%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
    backgroundColor: 'white',
  }
});
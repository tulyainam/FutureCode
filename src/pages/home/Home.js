import { View, Text, FlatList, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../../components/search/Search';
import { horizontalScale, moderateScale, verticalScale } from '../../components/response';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../../redux/actions';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Home = ({navigation}) => {
  const [dataList, setDataList] = useState({});
  const fetchData = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();
    console.log(data.limit)
    setDataList(data);
  };


  useEffect(()=> {
    
    let timer = setInterval(function(){
     
      fetchData();
    
   },3000);
   if(dataList.limit != undefined){
   clearInterval(timer)}
  },[dataList.limit])


  
  return (
    <View style={{backgroundColor: '#F3F3F3', paddingVertical:verticalScale(20)}}>
      <Search/>
      <View style={{marginTop:30, marginBottom:130, marginHorizontal:horizontalScale(15)}}>
        <FlatList
          data={dataList.products}
          numColumns={2}
          renderItem={({item}) => (
            <View style={styles.ProductBoxContainer}>
              {console.log('itemmmm-----------------------',item)}
              <TouchableOpacity style={styles.ProductBox}>
                <View style={styles.RowBetween}>
                  <Text style={{color:'#34C231', fontSize:moderateScale(12), fontFamily:'Poppins-Regular'}}>Kargo Bedava</Text>
                  <TouchableOpacity>
                    <Image source={item.images[0]} style={styles.FavIcon}/>
                  </TouchableOpacity>
                </View>
                  <Image source={item.images[0]} style={styles.ProductImg}/>
                 
                
               
                <View style={[styles.RowStart,{marginVertical:verticalScale(10)}]}> 
                  <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                  <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                  <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                  <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                  <Image source={require('../../assets/icons/star-gray.png')} style={styles.StarIcon}/>
                </View>
                <Text style={[styles.TitleColor, styles.TxtFont]}>{item.title.slice(0,18)}</Text>
                <Text style={[styles.SubTitleColor, styles.TxtFont]}>{item.description.slice(0,18)}..</Text>
                <Text style={styles.PriceTxt}>{item.price} TL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ProductBoxBtn}>
                <Text style={styles.ProductBoxBtnTxt}>Sepete Ekle</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  RowBetween:{
    flexDirection:'row',
    justifyContent:'space-between', 
    alignItems: 'center'
  },
  RowCenter:{
    justifyContent:'center',
    alignItems:'center'
  },
  RowStart:{
    flexDirection:'row',
    justifyContent:'space-start', 
    alignItems: 'center'
  },
  ProductBoxContainer:{
    flex:1,
    marginBottom:10
  },
  ProductBox:{
    backgroundColor:'#FFFFFF',
    width: horizontalScale(170),
    height:verticalScale(330),
    padding:10,
    justifyContent:'space-between',
  },
  FavIcon:{
    height:horizontalScale(24), 
    width:horizontalScale(28)
  },
  ProductBoxBtn:{
    height:verticalScale(50),
    backgroundColor:'#FFFFFF',
    width: horizontalScale(170),
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.10,
    shadowRadius: 4.65,
    elevation: 8,
  },
  ProductBoxBtnTxt:{
    fontFamily: 'Poppins-Regular',
    fontSize:moderateScale(16),
    color: '#6D6D6D'
  },
  StarIcon:{
    width:verticalScale(12),
    height:verticalScale(12),
    marginRight:3
  },
  TitleColor:{
    color:'#353535'
  },
  TxtFont:{
    fontFamily:'Poppins-Regular',
    fontSize:moderateScale(13)
  },
  SubTitleColor:{
    color:'#9E9E9E',
    marginBottom:verticalScale(8),
    marginTop:verticalScale(3)
  },
  PriceTxt:{
    color:'#4A4A4A',
    fontFamily:'Poppins-SemiBold',
    fontSize:moderateScale(16)
  },
  ProductImg:{
    height: verticalScale(155),
    width:verticalScale(155),
    resizeMode:'contain'
  }
})
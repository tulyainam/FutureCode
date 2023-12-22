import { View, Text, FlatList, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Search from '../../components/search/Search';
import { horizontalScale, moderateScale, verticalScale } from '../../components/response';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Home = () => {
  return (
    <View style={{backgroundColor: '#F3F3F3', height: windowHeight}}>
      <Search/>
      <View style={{width:windowWidth-20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems:'flex-start', flexWrap:'wrap', marginVertical:30}}>
          <View style={styles.ProductBoxContainer}>
            <TouchableOpacity style={styles.ProductBox}>
              <View style={styles.RowBetween}>
                <Text style={{color:'#34C231', fontSize:moderateScale(12), fontFamily:'Poppins-Regular'}}>Kargo Bedava</Text>
                <TouchableOpacity>
                  <Image source={require('../../assets/icons/fav-button.png')} style={styles.FavIcon}/>
                </TouchableOpacity>
              </View>
              <View style={[styles.RowCenter,{marginVertical:verticalScale(5)}]}>
                <Image source={require('../../assets/images/list-img.png')} style={styles.ProductImg}/>
              </View>
              <View style={[styles.RowStart,{marginVertical:verticalScale(10)}]}> 
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-gray.png')} style={styles.StarIcon}/>
              </View>
              <Text style={[styles.TitleColor, styles.TxtFont]}>Title</Text>
              <Text style={[styles.SubTitleColor, styles.TxtFont]}>SubTitle</Text>
              <Text style={styles.PriceTxt}>Fiyat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ProductBoxBtn}>
              <Text style={styles.ProductBoxBtnTxt}>Sepete Ekle</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ProductBoxContainer}>
            <TouchableOpacity style={styles.ProductBox}>
              <View style={styles.RowBetween}>
                <Text style={{color:'#34C231', fontSize:moderateScale(12), fontFamily:'Poppins-Regular'}}>Kargo Bedava</Text>
                <TouchableOpacity>
                  <Image source={require('../../assets/icons/fav-button.png')} style={styles.FavIcon}/>
                </TouchableOpacity>
              </View>
              <View style={[styles.RowCenter,{marginVertical:verticalScale(5)}]}>
                <Image source={require('../../assets/images/list-img.png')} style={styles.ProductImg}/>
              </View>
              <View style={[styles.RowStart,{marginVertical:verticalScale(10)}]}> 
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-gray.png')} style={styles.StarIcon}/>
              </View>
              <Text style={[styles.TitleColor, styles.TxtFont]}>Title</Text>
              <Text style={[styles.SubTitleColor, styles.TxtFont]}>SubTitle</Text>
              <Text style={styles.PriceTxt}>Fiyat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ProductBoxBtn}>
              <Text style={styles.ProductBoxBtnTxt}>Sepete Ekle</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ProductBoxContainer}>
            <TouchableOpacity style={styles.ProductBox}>
              <View style={styles.RowBetween}>
                <Text style={{color:'#34C231', fontSize:moderateScale(12), fontFamily:'Poppins-Regular'}}>Kargo Bedava</Text>
                <TouchableOpacity>
                  <Image source={require('../../assets/icons/fav-button.png')} style={styles.FavIcon}/>
                </TouchableOpacity>
              </View>
              <View style={[styles.RowCenter,{marginVertical:verticalScale(5)}]}>
                <Image source={require('../../assets/images/list-img.png')} style={styles.ProductImg}/>
              </View>
              <View style={[styles.RowStart,{marginVertical:verticalScale(10)}]}> 
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-gray.png')} style={styles.StarIcon}/>
              </View>
              <Text style={[styles.TitleColor, styles.TxtFont]}>Title</Text>
              <Text style={[styles.SubTitleColor, styles.TxtFont]}>SubTitle</Text>
              <Text style={styles.PriceTxt}>Fiyat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ProductBoxBtn}>
              <Text style={styles.ProductBoxBtnTxt}>Sepete Ekle</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ProductBoxContainer}>
            <TouchableOpacity style={styles.ProductBox}>
              <View style={styles.RowBetween}>
                <Text style={{color:'#34C231', fontSize:moderateScale(12), fontFamily:'Poppins-Regular'}}>Kargo Bedava</Text>
                <TouchableOpacity>
                  <Image source={require('../../assets/icons/fav-button.png')} style={styles.FavIcon}/>
                </TouchableOpacity>
              </View>
              <View style={[styles.RowCenter,{marginVertical:verticalScale(5)}]}>
                <Image source={require('../../assets/images/list-img.png')} style={styles.ProductImg}/>
              </View>
              <View style={[styles.RowStart,{marginVertical:verticalScale(10)}]}> 
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-yellow.png')} style={styles.StarIcon}/>
                <Image source={require('../../assets/icons/star-gray.png')} style={styles.StarIcon}/>
              </View>
              <Text style={[styles.TitleColor, styles.TxtFont]}>Title</Text>
              <Text style={[styles.SubTitleColor, styles.TxtFont]}>SubTitle</Text>
              <Text style={styles.PriceTxt}>Fiyat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ProductBoxBtn}>
              <Text style={styles.ProductBoxBtnTxt}>Sepete Ekle</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    width: horizontalScale(150),
    height:verticalScale(386),
    marginBottom:verticalScale(10),
    justifyContent:'space-between'
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
    resizeMode:'contain'
  }
})
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import TopMenu from '../../components/menus/TopMenu';
import { horizontalScale, moderateScale, verticalScale } from '../../components/response';

const ProductDetail = () => {
  return (
    <View>
      <TopMenu>
        <View style={styles.RowBetween}>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/fav-button.png')} style={styles.FavIcon}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/share.png')} style={styles.ShareIcon}/>
          </TouchableOpacity>
        </View>
      </TopMenu>
      <View style={""}>

      </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  RowBetween:{
    flexDirection:'row',
    alignItems:'center'
  },
  FavIcon:{
    height:horizontalScale(25),
    width:horizontalScale(30),
    marginRight:8
  },
  ShareIcon:{
    height:horizontalScale(30),
    width:horizontalScale(30)
  }
})
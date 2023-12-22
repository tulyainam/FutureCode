import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { horizontalScale, moderateScale, verticalScale } from '../response';

const TopMenu = ({children, onPress}) => {
  return (
    <View style={styles.MenuBox}>
      <TouchableOpacity onPress={onPress}>
        <Image source={require('../../assets/icons/back-button.png')} style={styles.Img}/>
      </TouchableOpacity>
      {children}
    </View>
  )
}

export default TopMenu

const styles = StyleSheet.create({
    MenuBox:{
        width:'100%',
        height: verticalScale(50),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: horizontalScale(16)
    },
    Img:{
        height:verticalScale(20),
        width:horizontalScale(38)
    }
})
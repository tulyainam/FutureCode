import { Image, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const ImageBack = require('../../assets/images/login-img.png');

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const LoginImage = ({children}) => {
  return (
    <ImageBackground source={ImageBack} style={styles.ImgBackground}>
      {children}
    </ImageBackground>
  )
}

export default LoginImage

const styles = StyleSheet.create({
    ImgBackground:{
        width: windowWidth,
        height: windowHeight / 4,
        paddingHorizontal: 40,
        justifyContent:'center',
    }
})
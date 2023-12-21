import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get("screen").width;

const LoginButton = ({children}) => {
  return (
    <View style={styles.ButtonBox}>
      <Text style={styles.TxtBox}>
        {children}
      </Text>
    </View>
  )
}

export default LoginButton

const styles = StyleSheet.create({
    ButtonBox:{
        height:46, 
        width: windowWidth-90,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#383838',
        borderRadius: 10,
        marginBottom:30
    },
    TxtBox: {  
      color:'#fff',
      lineHeight: 21.6,
      fontFamily: 'Roboto-Regular',
      fontSize: 18
    }
})
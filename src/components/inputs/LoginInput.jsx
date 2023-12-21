import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get("screen").width;

const LoginInput = ({placeholder, onChangeText, value, keyboardType, children, secureTextEntry}) => {
  return (
    <View style={styles.InputBox}>
      <TextInput 
        placeholder={placeholder} 
        onChangeText={onChangeText} 
        value={value} 
        keyboardType={keyboardType}
        placeholderTextColor={'#7C7C7C'} style={styles.InputTxt} 
        secureTextEntry={secureTextEntry}/>
        {children}
    </View>
  )
}

export default LoginInput

const styles = StyleSheet.create({
    InputBox: {
      height: 50,
      width: windowWidth - 90,
      backgroundColor: '#F5F5F5',
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 11,
      marginBottom: 30,
      fontFamily: "Roboto"
    },
    InputTxt: {
      fontSize:18,
      color: '#383838',
      width:'90%'
    }
})
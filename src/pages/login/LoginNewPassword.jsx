import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Dimensions} from 'react-native'
import React, { useState } from 'react'
import LoginInput from '../../components/inputs/LoginInput'
import LoginButton from '../../components/buttons/LoginButton'
import LoginImage from '../../components/ui/LoginImage';

const windowWidth = Dimensions.get('window').width;

function LoginNewPassword() {
  return (
    <View>
      <LoginImage/>
      <View style={{alignItems:'center'}}>
        <ScrollView style={{paddingVertical:30}}>
          <Text style={[styles.TxtLogin, styles.TxtMarginBottom]}>Alışverişe başlamak için yeni parola oluşturun.</Text>
          <LoginInput placeholder={"Yeni Şifre *"} secureTextEntry={true}>
            <TouchableOpacity>
              <Text>asad</Text>
            </TouchableOpacity>
          </LoginInput>
          <LoginInput placeholder={"Yeni Şifre Tekrar *"} secureTextEntry={true}>
            <TouchableOpacity>
              <Text>asad</Text>
            </TouchableOpacity>
          </LoginInput>
          <LoginButton>Kaydet ve Giriş Yap</LoginButton>
        </ScrollView>
      </View>
    </View>
  )
}

export default LoginNewPassword

const styles = StyleSheet.create({
  TxtLogin:{
    color:'#939393',
    fontFamily:'Roboto-Regular',
    fontSize:18,
  },
  TxtMarginBottom:{
    marginBottom:30
  },
})
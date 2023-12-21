import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginInput from '../../components/inputs/LoginInput'
import LoginButton from '../../components/buttons/LoginButton'

const Login = () => {
  return (
    <View>
      <LoginInput placeholder={"E-posta *"} keyboardType={"email-address"}/>
      <LoginInput placeholder={"Şifre *"} >
        <TouchableOpacity>
          <Text>asad</Text>
        </TouchableOpacity>
      </LoginInput>
      <LoginButton>Giriş Yap</LoginButton>
    </View>
  )
}

export default Login
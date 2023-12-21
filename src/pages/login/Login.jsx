import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import LoginInput from '../../components/inputs/LoginInput'
import LoginButton from '../../components/buttons/LoginButton'
import LoginImage from '../../components/ui/LoginImage'

const windowWidth = Dimensions.get('window').width;

const Login = () => {
  return (
    <View>
      <LoginImage>
        <View style={styles.ImgTxtBox}>
          <Text style={[styles.ImgTitle, styles.ImgTxtColor]}>Giriş</Text>
          <Image source={require('../../assets/icons/profile-icon.png')} style={styles.ImgIcon}/>
        </View>
        <Text style={[styles.ImgSubTitle, styles.ImgTxtColor]}>Hoşgeldiniz</Text>
      </LoginImage>
      <View style={{alignItems:'center'}}>
        <ScrollView style={{paddingVertical:30}}>
          <Text style={[styles.TxtLogin, styles.TxtMarginBottom]}>Alışverişe başlamak için giriş yapınız.</Text>
          <LoginInput placeholder={"E-posta *"} keyboardType={"email-address"}/>
          <LoginInput placeholder={"Şifre *"} >
            <TouchableOpacity>
              <Text>asad</Text>
            </TouchableOpacity>
          </LoginInput>
          <Text style={[styles.TxtLogin, styles.TxtMarginBottom]}>Şifremi Unuttum</Text>
          <LoginButton>Giriş Yap</LoginButton>
          <View style={[styles.TxtMarginBottom, {flexDirection:'row', justifyContent:'space-between', alignItems:'center'}]}>
            <View style={styles.Line}></View>
            <Text style={styles.TxtLogin}>veya</Text>
            <View style={styles.Line}></View>
          </View>
          <LoginButton>Kayıt Ol</LoginButton>
        </ScrollView>
      </View>
    </View>
  )
}
export default Login

const styles = StyleSheet.create({
  ImgTxtBox: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    marginBottom:5
  },
  ImgIcon:{
    height: 25,
    width:25
  },
  ImgTxtColor:{
    color: '#FFFFFF'
  },
  ImgTitle:{
    fontFamily:'Roboto-Bold',
    fontSize: 30,
    marginRight:17
  },
  ImgSubTitle: {
    fontFamily:'Roboto-Regular',
    fontSize:20
  },
  TxtLogin:{
    color:'#939393',
    fontFamily:'Roboto-Regular',
    fontSize:18,
  },
  Line:{
    width: windowWidth / 3 - 20,
    height:1,
    backgroundColor: '#B9C0C9'
  },
  TxtMarginBottom:{
    marginBottom:30
  }
})
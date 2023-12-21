import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Dimensions, Button} from 'react-native'
import React, { useState } from 'react'
import LoginInput from '../../components/inputs/LoginInput'
import LoginButton from '../../components/buttons/LoginButton'
import LoginImage from '../../components/ui/LoginImage'
import LoginModal from '../../components/modal/LoginModal'

const windowWidth = Dimensions.get('window').width;

function Register() {
  const [isForgetModalVisible, setIsForgetModalVisible] = useState(false);
  return (
    <View>
      <LoginImage>
        <View style={styles.ImgTxtBox}>
          <Text style={[styles.ImgTitle, styles.ImgTxtColor]}>Kayıt Ol</Text>
          <Image source={require('../../assets/icons/profile-icon.png')} style={styles.ImgIcon}/>
        </View>
        <Text style={[styles.ImgSubTitle, styles.ImgTxtColor]}>Hoşgeldiniz</Text>
      </LoginImage>
      <View style={{alignItems:'center'}}>
        <ScrollView style={{paddingVertical:30}}>
          <Text style={[styles.TxtLogin, styles.TxtMarginBottom]}>Alışverişe başlamak için kayıt olunuz.</Text>
          <LoginInput placeholder={"Ad *"}/>
          <LoginInput placeholder={"Soyad *"} />
          <LoginInput placeholder={"E-posta *"} keyboardType={"email-address"}/>
          <LoginInput placeholder={"Telefon *"} keyboardType={"numeric"}/>
          <LoginInput placeholder={"Şifre *"} secureTextEntry={true}>
            <TouchableOpacity>
              <Text>asad</Text>
            </TouchableOpacity>
          </LoginInput>
          <LoginInput placeholder={"Şifre Tekrar *"} secureTextEntry={true}>
            <TouchableOpacity>
              <Text>asad</Text>
            </TouchableOpacity>
          </LoginInput>
          <LoginButton onPress={()=>setIsForgetModalVisible(true)}>Kayıt Ol</LoginButton>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={[styles.TxtLogin]}>Zaten bir hesabın mı var?</Text>
            <TouchableOpacity>
              <Text style={styles.BtnTxt}>Giriş Yap</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <LoginModal isVisible={isForgetModalVisible}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={[styles.ModalTxtFont, styles.ModalTitle]}>Kayıt Ol</Text>
          <Image source={require('../../assets/icons/correct.png')} style={styles.ModalImg}/>
          <Text style={[styles.ModalTxtFont, styles.ModalTxt]}>Size bir e-posta gönderdik, e-posta onayından sonra giriş yapabilirsiniz.</Text>
          <LoginButton onPress={()=>setIsForgetModalVisible(false)}>Lütfen, e-posta adresinizi onaylayın.</LoginButton>
        </View>
        
        <TouchableOpacity onPress={()=>setIsForgetModalVisible(false)} style={styles.BackBtn}>
          <Image source={require('../../assets/icons/back-button.png')} style={styles.BackImg}/>
        </TouchableOpacity>
      </LoginModal>
    </View>
  )
}

export default Register

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
  },
  BtnTxt: {
    color:'#FF3D00',
    fontFamily:'Roboto-Regular',
    fontSize:18,
  },
  BackBtn:{
    position: 'absolute',
    top:38,
    left:17
  },
  BackImg:{
    height: 14,
    width:27
  },
  ModalImg:{
    height:96,
    width:96,
    marginTop:24,
    marginBottom:42
  },
  ModalTxtFont:{
    fontFamily: 'Roboto-Regular',
  },
  ModalTitle:{
    fontSize: 18,
    color:'#4F4F4F'
  },
  ModalTxt:{
    fontSize:16,
    color: '#484C52',
    textAlign:'center',
    marginBottom:92
  }
})
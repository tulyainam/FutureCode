import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Dimensions} from 'react-native'
import React, {useState} from 'react'
import LoginInput from '../../components/inputs/LoginInput'
import LoginButton from '../../components/buttons/LoginButton'
import LoginImage from '../../components/ui/LoginImage'
import LoginModal from '../../components/modal/LoginModal'

const windowWidth = Dimensions.get('window').width;

const Login = () => {
  const [isForgetModalVisible, setIsForgetModalVisible] = useState(false);
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
          <LoginInput placeholder={"Şifre *"} secureTextEntry={true}>
            <TouchableOpacity>
              <Text>asad</Text>
            </TouchableOpacity>
          </LoginInput>
          <TouchableOpacity onPress={()=> setIsForgetModalVisible(true)}>
            <Text style={[styles.TxtLogin, styles.TxtMarginBottom]}>Şifremi Unuttum</Text>
          </TouchableOpacity>
          <LoginButton>Giriş Yap</LoginButton>
          <View style={[styles.TxtMarginBottom, {flexDirection:'row', justifyContent:'space-between', alignItems:'center'}]}>
            <View style={styles.Line}></View>
            <Text style={styles.TxtLogin}>veya</Text>
            <View style={styles.Line}></View>
          </View>
          <LoginButton>Kayıt Ol</LoginButton>
        </ScrollView>
      </View>
      <LoginModal isVisible={isForgetModalVisible}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={[styles.ModalTxtFont, styles.ModalTitle]}>Şifremi Unuttum</Text>
          <Image source={require('../../assets/icons/forget-password.png')} style={styles.ModalImg}/>
          <Text style={[styles.ModalTxtFont, styles.ModalTxt]}>Kayıt olurken kullandığınız e-posta adresini giriniz.</Text>
          <LoginInput placeholder={"E-posta *"} keyboardType={"email-address"}/>
          <LoginButton onPress={()=>setIsForgetModalVisible(false)}>Gönder</LoginButton>
        </View>
        
        <TouchableOpacity onPress={()=>setIsForgetModalVisible(false)} style={styles.BackBtn}>
          <Image source={require('../../assets/icons/back-button.png')} style={styles.BackImg}/>
        </TouchableOpacity>
      </LoginModal>
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
    height:93,
    width:144,
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
    marginBottom: 38
  }
})
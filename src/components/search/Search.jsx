import { StyleSheet, Text, View, Dimensions, TextInput, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get("window").width;

const Search = () => {
  return (
    <View style={styles.SearchBox}>
      <TextInput placeholder='Ürün Ara' placeholderTextColor={'#595959'} style={styles.SearchInput}/>
      <TouchableOpacity>
        <Image source={require('../../assets/icons/search-icon.png')} style={styles.SearchIcon}/>
      </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    SearchBox:{
        height:50,
        width: windowWidth,
        backgroundColor: '#FFFFFF',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: 14
    },
    SearchInput: {
        width: '90%',
        color:'#595959',
        fontFamily:'Poppins-SemiBold',
        fontSize:16
    },
    SearchIcon:{
        height:27, 
        width:27
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Modal from 'react-native-modal';

const LoginModal = ({ children, isVisible }) =>{
    console.log(isVisible);
    return (
        <Modal
            isVisible={isVisible}
            backdropColor='#7E7E7E'
            backdropOpacity={0.50}
            backdropTransitionOutTiming={800}
            style={styles.ModalBottom}>
            <View style={styles.ModalBox}>
                {children}
            </View>
        </Modal>
    );
}

export default LoginModal

const styles = StyleSheet.create({
    ModalBottom:{
        margin: 0,
      },
      ModalBox:{
        backgroundColor:'#FFFFFF',
        height: '50%',
        marginTop: 'auto',
        padding:34
      }
})
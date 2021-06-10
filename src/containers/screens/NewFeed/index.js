import React from 'react'
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import images from '../../../assets/images/index';
import Tus from './Tus';
import {scale} from '../../../utils/scaling/scaling';
export const NewFeed = () => {
    return (
        <View>
            <View style={styles.header} >
                <Image source= {images.logo} style={styles.logo}/>
                
            </View>
            <SafeAreaView  >
                <Tus/>
            </SafeAreaView>
            
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
       
        paddingHorizontal: scale(16),
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: scale(48),
        backgroundColor: "#f9fafc",
        borderBottomColor:"#ecf0f1",
        borderBottomWidth:1,       
     },
     logo:{
         width:scale(30),
         height:scale(24)
     }
        

    
    
    
});

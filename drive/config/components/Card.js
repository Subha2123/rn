import React from 'react'
import {View,Image,StyleSheet } from 'react-native'
import CustomText from './CustomText';



const Card = ({image,title,subtitle,titcolor,subcolor,backstyle}) => {
    return (
        <View style={[styles.conatainer,backstyle]}>
            <Image source={{uri:image}} style={styles.img}></Image>
            <CustomText text={title} textcolor={titcolor}></CustomText>
            <CustomText text={subtitle} textcolor={subcolor}></CustomText>
            </View>     
    );
}

export default Card;

const styles = StyleSheet.create({
    conatainer:{
        borderRadius:20, 
        marginLeft:2 
    },
    img:{
        height:200,
        width:"90%",
        margin:20,
        borderRadius:20
    },
    
  })

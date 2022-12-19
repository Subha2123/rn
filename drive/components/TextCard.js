import React from 'react'
import {View,Image,StyleSheet } from 'react-native'
import colors from '../config/colors';
import CustomText from './CustomText';



const TextCard = ({status,title,subtitle1,subtitle2,subdiv,sub4,subtitle3,subtitle4,titcolor,subcolor,backstyle,customStyle}) => {
    return (
        <View style={[styles.conatainer,backstyle]}>
            <CustomText style={styles.title} text={title} textcolor={titcolor}></CustomText>
            <View style={subdiv}>
            <CustomText style={[styles.subtitle,customStyle]} text={subtitle1} textcolor={styles.subcolor}></CustomText>
            <CustomText style={[styles.subtitle,customStyle]} text={subtitle2} textcolor={subcolor}></CustomText>
            <CustomText style={[styles.subtitle,customStyle]} text={subtitle3} textcolor={subcolor}></CustomText>
            <CustomText style={[styles.subtitle,customStyle]} text={subtitle4} textcolor={subcolor}></CustomText>
            </View>
            </View>     
    );
}

export default TextCard;

const styles = StyleSheet.create({
    conatainer:{
        borderRadius:10, 
        marginLeft:2 ,
        backgroundColor:colors.white,
        height:150,
        padding:12,
        width:"100%",
        margin:10,
        
    },
    img:{
        height:200,
        width:"100%",
        margin:20,
        borderRadius:20
    },
    title:{
        marginTop:4,
        fontWeight:'600',
        color:'blue',
        fontSize:20
    },
    subtitle:{
        fontSize:19,
        fontFamily:'Roboto',

        
    },
   
    
  })

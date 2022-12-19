import React from 'react'
import { View, StyleSheet} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import CustomText from './CustomText';
import colors from '../config/colors';



const CustomIcon = ({container1,icon,color,size,title,style,onPress}) => {
    return (
    <View style={[styles.conatainer,container1]}>
   
    <MaterialCommunityIcons onPress={onPress} style={[styles.icon,style]} color={color} size={size} name={icon}></MaterialCommunityIcons>
    <CustomText text={title} textcolor={styles.text}></CustomText>
    </View>
    
    );
}

export default CustomIcon;

const styles = StyleSheet.create({
    conatainer:{
        flexDirection:'row', 
        backgroundColor:colors.white,
        
     },
     icon:{
        borderRadius:50,
        padding:5,
        width:40,
        height:40
     },
     text:{
        padding:8,
        fontSize:30,
    
     }
})
import React from 'react'
import { StyleSheet,TouchableOpacity,View } from 'react-native'
import CustomText from './CustomText';


const AppButton = ({title,style,color ,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={[styles.container,style]}>
        <CustomText textcolor={color} text={title}></CustomText>
        </View>
        </TouchableOpacity>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:50,
       }
    
})
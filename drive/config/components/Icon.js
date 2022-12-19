import React from 'react'
import { StyleSheet,View } from 'react-native'
import {MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'




const Icon = ({icon,size=25,color="white",backgroundColor,onPress}) => {
    return (
        <View style={[styles.container,{backgroundColor:backgroundColor}]}>
        <MaterialCommunityIcons onPress={onPress} color={color}  size={size}  name={icon} style={styles.icon}></MaterialCommunityIcons>
       

    </View>
    );
}

export default Icon;


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
          width:50,
         height:50,
         borderRadius:25,
         
       
    },
icon:{
    paddingTop:7
}
})
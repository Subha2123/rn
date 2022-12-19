import React from 'react'
import { StyleSheet,Image,View, TouchableHighlight,Text } from 'react-native'
import colors from '../config/colors';
import CustomText from './CustomText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView } from 'react-native-gesture-handler'
import Icon from './Icon';


const ListItem = ({image,title,subtitle,numberOfLines,titcolor,subcolor,backstyle,iconPress,onPress,renderLeftActions,icon,showChevrons}) => {
    
    return (
        <GestureHandlerRootView>
        <Swipeable   renderLeftActions={renderLeftActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.cyan}>
        <View style={[styles.conatainer,backstyle]}>
        {image?(<Image source={{uri:image}} style={styles.img}></Image>):null}
        <View style={styles.textview}>
        <Text  textcolor={titcolor}>{title}</Text>
        <Text numberOfLines={numberOfLines} textcolor={subcolor}>{subtitle}</Text>
        </View>
        {showChevrons&&(<Icon icon={icon} size={30} color="black" onPress={iconPress}></Icon>)}
        </View> 
        </TouchableHighlight> 
        </Swipeable>
        </GestureHandlerRootView>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    conatainer:{
       flexDirection:'row', 
       flex:1,
       alignItems:'center',
       padding:15
    },
    img:{
        height:100,
        width:100,
        borderRadius:50
    },
    textview:{
        marginTop:18,
        paddingLeft:10,
        flex:1    
    }

})
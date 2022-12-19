import React from 'react'
import { View ,TextInput,StyleSheet,Text} from 'react-native'
import colors from '../config/colors';
import Icon from './Icon';




const AppTextInput = ({icon,color,size,width,...otherProps}) => {

    return (
        <View style={styles.container} width={width}>
        {icon&&(<Icon icon={icon} size={size} color={color}></Icon>)}
        <TextInput  {...otherProps}></TextInput>    
        </View>
    );
}
// onChangeText={text=>setVal(text)}
export default AppTextInput;


const styles = StyleSheet.create({
    container:{
        marginLeft:10,
        flexDirection:'row',
        marginVertical:10,
        backgroundColor:colors.white,
    },
    width:{
     width:0
    }
})
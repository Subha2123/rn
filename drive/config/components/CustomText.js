import React from 'react'
import { StyleSheet,Text} from 'react-native'



const CustomText = ({text,textcolor,...otherProps}) => {
    return (
        <Text style={textcolor} {...otherProps}>{text}</Text>
       
    );
}

export default CustomText;


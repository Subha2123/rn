import React from 'react'
import { StyleSheet,View } from 'react-native'
import CustomText from './CustomText';

const AppError = ({error,visible}) => {
    return (
        <View>
           {!error||!visible?null:(<CustomText textcolor={styles.color} visible={visible} text={error}></CustomText>)}
        </View>
    );
}

export default AppError;


const styles = StyleSheet.create({
    color:{
        color:"red"
    }
})
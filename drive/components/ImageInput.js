import React,{useEffect} from 'react';
import { View, StyleSheet,Image, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from './Icon';
import * as ImagePicker from 'expo-image-picker'



function ImageInput({imageUri,onPress}) {
  

  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
        {!imageUri?<Icon icon='camera' onPress={onPress} size={50} color="grey"></Icon>:
         <Image source={{uri:imageUri}} style={{height:100,width:100}} ></Image>
        }
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height:100,
    width:100,
    borderRadius:15,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  }
});

export default ImageInput;
import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import colors from './colors'

export default{
    text:{
        fontSize:10,
        color:"black",
        fontFamily:Platform.OS==='android'?'Roboto':'Avanir'
    },
    colors:colors
}
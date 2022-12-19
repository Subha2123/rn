import { FlatList, StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import { getToken } from '../../api/token'
import axios from 'axios'
import CustomText from '../../components/CustomText'
import colors from '../../config/colors'
import CustomIcon from '../../components/CustomIcon'
import AppButton from '../../components/AppButton'
import { useNavigation } from '@react-navigation/native'


export default function StudentProfileScreen() {
    useEffect(() => {
      viewProfile()
    }, [])

    const navigation=useNavigation()
    const[result,setResult]=useState()
    
    async function viewProfile(){
        let token=await getToken()
        await axios.get('http://192.168.43.2:5647/api/student/profile',{headers:{
            auth:token
        }})
        .then(res=>{
            if(res.data) setResult(res.data)
            console.log(res.data)   
      })
        .catch(err=>console.log(err)) 
     }
        
    
   
  return (
    <View>
        {result?(
            <View>
            <View style={styles.name}>
                <CustomText text={result.name} textcolor={styles.nametext}></CustomText>
                <CustomText text={result.RegNo} textcolor={styles.reg}></CustomText>
            </View>
            <View style={styles.contain}>
            <CustomText textcolor={styles.textcolor} text={`Email:${result.email}`}></CustomText>
            <CustomText  textcolor={styles.textcolor} text={`Department:${result.Dept}`}></CustomText>
            <CustomText  textcolor={styles.textcolor}  text={`Section:${result.Section}`}></CustomText>
            <CustomText  textcolor={styles.textcolor} text={`Batch:${result.Batch}`}></CustomText>
            </View>
            </View>
        ):null}
        <AppButton title="Fine Details" onPress={()=>navigation.navigate("Fine Details")} style={styles.bgcolor} color={styles.finebtn} ></AppButton>
      

    </View>
  )
}

const styles = StyleSheet.create({
 name:{
    backgroundColor:colors.white,
    justifyContent:'center',
    textAlign:'center',
    marginVertical:10
 },
 nametext:{
    fontSize:25,
    color:colors.brown,
    fontWeight:'bold'
 },
 reg:{
    fontSize:20,
    fontWeight:150
 },
 contain:{
    marginTop:20,
    backgroundColor:colors.light,
    borderRadius:20,
    justifyContent:'center',
    fontSize:20,
    
 },
 textcolor:{
    fontSize:20,
    fontWeight:500,
    alignItems:'center'
 },
 finebtn:{
    backgroundColor:colors.primary,
    fontSize:20,
    color:colors.white,
    height:60,
    borderRadius:20,
    width:"80%"
 },
 bgcolor:{
    alignItems:'center',
    marginVertical:20,
  },
})
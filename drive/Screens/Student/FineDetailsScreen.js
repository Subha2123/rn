import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { getToken } from '../../api/token'
import TextCard from '../../components/TextCard'
import moment from 'moment'

export default function FineDetailsScreen() {
    useEffect(() => {
        viewProfile()
      }, [])
  
      const navigation=useNavigation()
      const[result,setResult]=useState([])
      
      async function viewProfile(){
          let token=await getToken()
          await axios.get('http://192.168.43.2:5647/api/fine/getone',{headers:{
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
      
      <FlatList
       data={result}
       renderItem={({item})=>(
        <View>
        <Text style={[item.status=='Not paid'?styles.subpaid:styles.notpaid]}>{item.status}</Text>
        <TextCard title={moment(item.date).format('YYYY-MM-DD')} subtitle1={`Reason:  ${item.reason}`}
        subtitle2={`Last Date: ${item.Datepayment}`} subtitle3={`Fine Amount: ${item.amount}`}></TextCard>
      
        </View>
       )}></FlatList> 
    </View>
  )
}

const styles = StyleSheet.create({
    subpaid:{
        fontWeight:'bold',
        color:"red"
    },
    notpaid:{
        fontWeight:'bold',
        color:"green"
    }
})
import { FlatList, StyleSheet, Text, View ,ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { DataTable } from 'react-native-paper'
import moment from 'moment'
import Icon from '../../components/Icon'

export default function ViewFineScreen() {
    const[result,setResult]=useState([])
    const[loading,setLoading]=useState(false)

    useEffect(() => {
      addFine()
    }, [])
    

    async function addFine(){
        await axios.get('http://192.168.43.2:5647/api/fine/get')
        .then(res=>{
            console.log(res.data)
            if(res.data) setResult(res.data)
      })
        .catch(err=>console.log(err))
       //  navigation.navigate('Student Login')
     }

     async function updateFine(id){
        console.log(id);
        await axios.post('http://192.168.43.2:5647/api/fine/update',{
            id:id
        })
        .then(res=>{
            console.log(res.data)
            setLoading(true)
            if(res.data){
                setLoading(false)
                
            }
      })
        .catch(err=>console.log(err))
     }
  return (
    <View>
        {loading?(<ActivityIndicator />):null}
         <DataTable.Header>
            <DataTable.Title>S.NO</DataTable.Title>
            <DataTable.Title style={{flex:2}}>RegsiterNum</DataTable.Title>
            <DataTable.Title>Batch</DataTable.Title>
            <DataTable.Title style={{flex:3}}>Reason</DataTable.Title>
            <DataTable.Title style={{flex:2}}>Amount</DataTable.Title>
            <DataTable.Title style={{flex:2}}>Date</DataTable.Title>
            <DataTable.Title>Status</DataTable.Title>
            <DataTable.Title>Datepayment</DataTable.Title>
            <DataTable.Title></DataTable.Title>
          </DataTable.Header>
      <FlatList
       data={result}
       renderItem={({item,index})=>(
        <DataTable style={styles.table}>
          <DataTable.Row>
            <DataTable.Cell>{index+1}</DataTable.Cell>
            <DataTable.Cell style={{flex:2}}>{item.RegNo}</DataTable.Cell>
            <DataTable.Cell>{item.Batch}</DataTable.Cell>
            <DataTable.Cell style={{flex:3}}>{item.reason}</DataTable.Cell>
            <DataTable.Cell>{item.amount}</DataTable.Cell>
            <DataTable.Cell style={{flex:2}}>{moment(item.date).format('YYYY-MM-DD')}</DataTable.Cell>
            <DataTable.Cell >{item.status}</DataTable.Cell>
            <DataTable.Cell>{moment(item.Datepayment).format('YYYY-MM-DD')}</DataTable.Cell>
            <DataTable.Cell><Icon icon="table-edit" color="blue"  onPress={()=>updateFine(item._id)}></Icon></DataTable.Cell>
          </DataTable.Row>
        </DataTable>
       )}></FlatList> 
    </View>
  )
}

const styles = StyleSheet.create({
    table:{
        padding:10
    }
})
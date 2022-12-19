import React,{useState} from 'react'
import { StyleSheet, View ,Image, Button,Text} from 'react-native'
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import colors from '../../config/colors';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'


const AddFineScreen = () => {

    const navigation=useNavigation()
   
      
       async function addFine({RegNo,reason,Datepayment,amount,Batch}){
         await axios.post('http://192.168.43.2:5647/api/fine/add',{
            
            RegNo,reason,Datepayment,amount,Batch
        })
         .then(res=>{console.log(res.data)
         if(res.data) alert("Fine Added")
       })
         .catch(err=>console.log(err))
        //  navigation.navigate('Student Login')

      }
   
  
    return (
        <View style={styles.container}>
          
        <Image source={require("../../assets/cashi2.png")} style={styles.image}></Image>
        
        <Formik initialValues={{RegNo:"",reason:"",Datepayment:"",amount:"",Batch:''}} onSubmit={addFine}>
            {({handleChange,handleSubmit,setFieldTouched})=>(
        <>        

                <AppTextInput onChangeText={handleChange("RegNo")} style={styles.text} 
                 placeholder="RegNo" icon="regex" size={30} color="grey" onBlur={()=>setFieldTouched("RegNo")}></AppTextInput>

                <AppTextInput onChangeText={handleChange("reason")} style={styles.text} 
                 placeholder="Reason" icon="book-education-outline" size={30} color="grey" onBlur={()=>setFieldTouched("reason")}></AppTextInput>

                <AppTextInput onChangeText={handleChange("Datepayment")} style={styles.text} 
                 placeholder="Datepayment" icon="vector-intersection" size={30} color="grey" onBlur={()=>setFieldTouched("Datepayment")}></AppTextInput>

                 <AppTextInput onChangeText={handleChange("amount")} style={styles.text} 
                 placeholder="amount" icon="email" size={30} color="grey" onBlur={()=>setFieldTouched("amount")}></AppTextInput>
                

                <AppTextInput onChangeText={handleChange("Batch")} style={styles.text} 
                 placeholder="Batch" icon="calendar-today" size={30} color="grey" onBlur={()=>setFieldTouched("Batch")}></AppTextInput>
           
               <AppButton title="Add Fine" onPress={handleSubmit} color={styles.button}></AppButton>
             
           
         </>
            )}
        </Formik>
      
        </View>  
    );
 }

export default AddFineScreen;


const styles = StyleSheet.create({
    container:{
       marginTop:30
    },
    button:{
        backgroundColor:colors.cyan,
        height:50,
        color:colors.white,
        fontSize:30,
        paddingLeft:140,
        marginVertical:40,
        borderRadius:50
    },
    form:{
        marginTop:30,
        marginVertical:20
    },
    image:{
        height:100,
        width:100,
        borderRadius:50,
        marginLeft:120

    },
    newb:{
        width:"50%",
        color:"red",
        height:"100px"
    },
    reg:{
        marginTop:50,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    iconreg:{
        justifyContent:'center',
        fontSize:20
    }

})
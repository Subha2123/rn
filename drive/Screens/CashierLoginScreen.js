import React,{useState} from 'react'
import { StyleSheet, View ,Image, Button,Text} from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import { Formik } from 'formik';
import * as Yup from 'yup'
import AppError from '../components/AppError';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import Icon from '../components/Icon';
import CustomIcon from '../components/CustomIcon';

const CashierLoginScreen = () => {

    const navigation=useNavigation()
   
    const validationSchema= Yup.object().shape({
        email:Yup.string().required().email().label("Email"),
        password:Yup.string().required().min(2).label("Password")
       })
      

       async function handleSubmit({email,password}){
         await axios.post('http://192.168.43.2:5647/api/staff/login',{email,password})
         .then(res=>console.log(res.data))
         .catch(err=>console.log(err))
        // navigation.navigate('AdminPage')

      }
   
  
    return (
        <View style={styles.container}>
          
        <Image source={require("../assets/usericon.png")} style={styles.image}></Image>
        
        <Formik initialValues={{email:'',password:''}} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>(
        <>
                 <AppTextInput onChangeText={handleChange("email")} style={styles.text} 
                 placeholder="Email" icon="email" size={30} color="grey" onBlur={()=>setFieldTouched("email")}></AppTextInput>
                {touched.email&&(<AppError error={errors.email}></AppError>)}
                <AppTextInput  onChangeText={handleChange("password")} style={styles.text}
                placeholder="Password" icon="lock" size={30} color="grey" secureEntry={true}></AppTextInput>
              {touched.password&&(<AppError error={errors.password}></AppError>)}
             <AppButton title="Login" onPress={handleSubmit} color={styles.button}></AppButton>
           
         </>
            )}
        </Formik>
       
        <View style={styles.reg}>
        <Text style={{padding:10,fontSize:20,textAlign:'center',color:'blue'}}>New User?</Text>
        <CustomIcon container1={styles.iconreg} title="Regsiter" icon="account-wrench" color="grey" size={50} onPress={()=>navigation.navigate("Cashier Register")}></CustomIcon>
        </View>
      
        </View>  
    );
 }

export default CashierLoginScreen;


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
        fontSize:12
    }

})
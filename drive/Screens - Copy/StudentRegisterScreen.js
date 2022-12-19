import React,{useState} from 'react'
import { StyleSheet, View ,Image, Button,Text} from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'


const StudentRegisterScreen = () => {

    const navigation=useNavigation()
   
    const validationSchema= Yup.object().shape({
        email:Yup.string().required().email().label("Email"),
        password:Yup.string().required().min(2).label("Password")
       })
      
       async function handleSubmit({name,RegNo,Dept,email,password,Batch}){
         await axios.post('http://192.168.43.2:5647/api/student/register',{name,RegNo,Dept,email,password,Batch})
         .then(res=>console.log(res.data))
         .catch(err=>console.log(err))
         navigation.navigate('Student Login')

      }
   
  
    return (
        <View style={styles.container}>
          
        <Image source={require("../assets/usericon.png")} style={styles.image}></Image>
        
        <Formik initialValues={{name:'',email:'',password:'',Batch:''}} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>(
        <>        
                <AppTextInput onChangeText={handleChange("name")} style={styles.text} 
                 placeholder="Name" icon="account-circle" size={30} color="grey" onBlur={()=>setFieldTouched("RegNo")}></AppTextInput>

                <AppTextInput onChangeText={handleChange("RegNo")} style={styles.text} 
                 placeholder="RegNo" icon="regex" size={30} color="grey" onBlur={()=>setFieldTouched("RegNo")}></AppTextInput>

                <AppTextInput onChangeText={handleChange("Dept")} style={styles.text} 
                 placeholder="Dept" icon="book-education-outline" size={30} color="grey" onBlur={()=>setFieldTouched("Dept")}></AppTextInput>

                <AppTextInput onChangeText={handleChange("Section")} style={styles.text} 
                 placeholder="Section" icon="vector-intersection" size={30} color="grey" onBlur={()=>setFieldTouched("Section")}></AppTextInput>

                 <AppTextInput onChangeText={handleChange("email")} style={styles.text} 
                 placeholder="Email" icon="email" size={30} color="grey" onBlur={()=>setFieldTouched("email")}></AppTextInput>
                
                <AppTextInput  onChangeText={handleChange("password")} style={styles.text}
                placeholder="Password" icon="lock" size={30} color="grey" secureEntry={true}></AppTextInput>

                <AppTextInput onChangeText={handleChange("Batch")} style={styles.text} 
                 placeholder="Batch" icon="calendar-today" size={30} color="grey" onBlur={()=>setFieldTouched("Batch")}></AppTextInput>
           
               <AppButton title="Regsiter" onPress={handleSubmit} color={styles.button}></AppButton>
           
         </>
            )}
        </Formik>
      
        </View>  
    );
 }

export default StudentRegisterScreen;


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
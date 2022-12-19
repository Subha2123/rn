import React from 'react'
import { View,ImageBackground,Image,StyleSheet} from 'react-native'

import CustomText from '../components/CustomText';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';

const HomeScreen = () => {
    const navigation=useNavigation()

    return (
    <Screen>
      <View style={styles.container}>
       
      <View style={styles.logo}>
        <Image source={require('../assets/rvslogo.jpg')} style={styles.imgsize}></Image>
        <CustomText text="RVSCAS" textcolor={styles.rvstext}></CustomText>
        <CustomText text="FINE MANAGEMANT SYSTEM" textcolor={styles.textcolor}></CustomText>
      </View>
      <View style={styles.btncnt}>
      <AppButton title="Cashier Login" color={styles.text} style={[styles.bgcolor,{backgroundColor:colors.coral}]} onPress={()=>navigation.navigate('Cashier')}></AppButton>
      <AppButton title="Student Login" color={styles.text} style={[styles.bgcolor,{backgroundColor:colors.seagreen}]} onPress={()=>navigation.navigate('Student')}></AppButton>
      </View>
      
    </View>
    </Screen>
    );
}


export default HomeScreen;
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'space-between'
      },
      bgcolor:{
        alignItems:'center',
        borderRadius:40,
        marginVertical:10
      },
      imgsize:{
        height:100,
        width:100,
        borderRadius:50
      },
      logo:{
        alignItems:'center',
      },
      size:{
        height:"100%",
        width:"100%",
        justifyContent:"flex-end",  
      },
      text:{
        color:"white",
        fontSize:20,
        paddingTop:10
      },
      textcolor:{
         marginTop:16,
         fontSize:25,
         color:colors.coral
      },
      rvstext:{
         color:colors.seagreen,
         fontWeight:'bold',
         fontSize:40
      },
      btncnt:{
        textAlign:'center',
        
      }
  
  })
  
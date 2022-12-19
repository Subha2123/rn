import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '../components/Icon';
import colors from '../config/colors';
import StudentProfileScreen from '../Screens/Student/StudentProfileScreen';

export default function StudentTabNavigation() {
    const Tab=createBottomTabNavigator()

  return (
     
     
    <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
    <Tab.Screen  options={{
      tabBarLabel: 'View',
      tabBarIcon: () => (<Icon icon='view-dashboard' size={30} color={colors.coral}></Icon>),}}
       name='Profile'  component={StudentProfileScreen}></Tab.Screen>
    

        {/* <Tab.Screen options={{
      tabBarLabel: 'Delete',
      tabBarIcon: () => (<Icon icon='delete-empty' size={30} color={colors.sandal}></Icon>),}}
       name='Camps' component={DeleteStudentScreen}></Tab.Screen>  */}
       
       
    </Tab.Navigator>
    
   
    
  )
}

const styles = StyleSheet.create({})
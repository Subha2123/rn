// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import ViewEventScreen from '../screens/Event/ViewEventScreen';
// import AddEventScreen from '../screens/Event/AddEventScreen';
// import DeleteEventScreen from '../screens/Event/DeleteEventScreen';
// import Icon from '../components/Icon';
// import colors from '../config/colors';

// export default function EventTabNavigation() {
//     const Tab=createBottomTabNavigator()
//   return (
  
//     <Tab.Navigator screenOptions={{
//         headerShown: false
//       }}>
//     <Tab.Screen  options={{
//       tabBarLabel: 'View',
//       tabBarIcon: () => (<Icon icon='view-dashboard' size={30} color={colors.coral}></Icon>),}}
//        name='View'  component={ViewEventScreen}></Tab.Screen>
//         <Tab.Screen options={{
//       tabBarLabel: 'Create',
//       tabBarIcon: () => (<Icon icon='human-edit' size={30} color={colors.cyan}></Icon>),}}
//        name='Add' component={AddEventScreen}></Tab.Screen>
//         <Tab.Screen options={{
//       tabBarLabel: 'Delete',
//       tabBarIcon: () => (<Icon icon='delete-empty' size={30} color={colors.sandal}></Icon>),}} 
//        name='Delete' component={DeleteEventScreen}></Tab.Screen>
       
       
//     </Tab.Navigator>
   
    
//   )
// }

// const styles = StyleSheet.create({})
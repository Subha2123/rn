
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import CashierLoginScreen from "../Screens/CashierLoginScreen";
import StudentLoginScreen from "../Screens/StudentLoginScreen";
import StudentRegisterScreen from "../Screens/StudentRegisterScreen";
import CashierRegisterScreen from "../Screens/CashierRegisterScreen";
import CashierTabNavigation from "./CashierTabNavigation";
import StudentTabNavigation from "./StudentTabNavigation";
import FineDetailsScreen from "../Screens/Student/FineDetailsScreen";
import ViewFineScreen from "../Screens/Cashier/ViewFineScreen";


export default function AppNavigation() {
 
  const Stack=createNativeStackNavigator()
  return(
    <>
   <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{
    headerShown: false
  }}> */}
  <Stack.Navigator>
    <Stack.Screen name="update fine" component={ViewFineScreen}></Stack.Screen>
    <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
    <Stack.Screen name="Student Page" component={StudentTabNavigation}></Stack.Screen>
    <Stack.Screen name="Cashier Page" component={CashierTabNavigation}></Stack.Screen>
   
    <Stack.Screen name="Student" component={StudentLoginScreen}></Stack.Screen>
    <Stack.Screen name="Cashier" component={CashierLoginScreen}></Stack.Screen>
     
     <Stack.Screen name="Fine Details" component={FineDetailsScreen}></Stack.Screen>
       
        
    <Stack.Screen name="Student Register" component={StudentRegisterScreen}></Stack.Screen>
    <Stack.Screen name="Cashier Register" component={CashierRegisterScreen}></Stack.Screen>
      
      
        
      </Stack.Navigator>

      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
});

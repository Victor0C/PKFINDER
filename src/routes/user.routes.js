import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Search from '../pages/Search';
import ViewDataPeople from "../pages/viewData/people";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabScreenOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: "#0E0E0E",
    height: 60,
    position: "absolute",
    elevation: 0,
    borderTopColor: "#6E6E6E",
  },
};

const stackScreenOptions = {
  headerShown: false
}

function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions} initialRouteName="TabRoutes">
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Search" component={Search}/>
      <Stack.Screen name="ViewDataPeople" component={ViewDataPeople}/>
    </Stack.Navigator>
  );
}

export function UserRoutes() {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
 
      <Tab.Screen
        name='StackRoutes'
        component={StackRoutes}
        options={{ tabBarIcon: ({focused}) =>{
          return focused ? <Fontisto name="home" size={40} color="#FFF" /> : <Fontisto name="home" size={40} color="#6E6E6E" />
        },headerShown: false, tabBarLabelStyle: { display: "none" } }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{ tabBarIcon: ({focused}) =>{
            return focused ? <MaterialCommunityIcons name="account" size={55} color="#FFF" /> : <MaterialCommunityIcons name="account" size={55} color="#6E6E6E" />
          },headerShown: false, tabBarLabelStyle: { display: "none" } }}
      />
    </Tab.Navigator>
  );
}
import React from "react";
import HomeScreenHeader from "../components/HomeScreenHeader";
import ProfileScreenHeader from "../components/ProfileScreenHeader";
import DrawerNavigator from "./DrawerNavigator";
import MessagesScreen from "../screens/MessagesScreen";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import HomeScreen from "../screens/HomeScreen";
import MyJobs from "../screens/MyJobs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#6200ee",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          header: () => <HomeScreenHeader />,
        }}
      />
      <Tab.Screen
        name="My Jobs"
        component={MyJobs}
        options={{
          tabBarLabel: "My Jobs",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DrawerNavigator}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          header: () => <ProfileScreenHeader />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;

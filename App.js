import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationsScreen from "./screens/NotificationsScreen";
import SearchJobTitle from "./screens/SearchJobTitle";
import SearchLocation from "./screens/SearchLocation";
import TabNavigator from "./navigators/TabNavigator";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ title: "Notifications" }}
        />
        <Stack.Screen
          name="SearchJobTitle"
          component={SearchJobTitle}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="SearchLocation"
          component={SearchLocation}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

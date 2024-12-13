import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import HomeScreen from "./screens/HomeScreen";
import MyJobs from "./screens/MyJobs";
import NotificationsScreen from "./screens/NotificationsScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Appbar } from "react-native-paper";
import SearchJobTitle from "./screens/SearchJobTitle";
import SearchLocation from "./screens/SearchLocation";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenHeader = () => {
  const navigation = useNavigation();
  return (
    <Appbar.Header
      style={{
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("./assets/indeed_logo.png")}
          style={{ width: 100, height: 120 }}
        />
      </View>
      <Appbar.Action
        icon={() => (
          <MaterialCommunityIcons name="bell" size={30} color="grey" />
        )}
        onPress={() => navigation.navigate("Notifications")}
      />
    </Appbar.Header>
  );
};

const ProfileScreenHeader = () => {
  const navigation = useNavigation();
  return (
    <Appbar.Header
      style={{
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>
          Profile
        </Text>
      </View>
      <Appbar.Action
        icon={() => (
          <MaterialCommunityIcons name="menu" size={30} color="black" />
        )}
        onPress={() => navigation.openDrawer()}
      />
    </Appbar.Header>
  );
};

const DrawerContent = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 50 }}>
    <TouchableOpacity
      style={{ marginLeft: 20, marginBottom: 20 }}
      onPress={() => navigation.closeDrawer()}
    >
      <MaterialCommunityIcons name="close" size={30} color="grey" />
    </TouchableOpacity>
    <TouchableOpacity
      style={{ marginLeft: 20, marginBottom: 20, padding: 10, borderRadius: 5 }}
      onPress={() => navigation.navigate("Profile")}
    >
      <Text style={{ color: "#333", fontSize: 20, fontWeight: "bold" }}>
        Profile
      </Text>
    </TouchableOpacity>
  </View>
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: "#fff", width: "100%" },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

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

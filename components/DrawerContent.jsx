import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const DrawerContent = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 50 }}>
    <TouchableOpacity
      style={{ marginLeft: 20, marginBottom: 20 }}
      onPress={() => navigation.closeDrawer()}
    >
      <MaterialCommunityIcons name="close" size={30} color="grey" />
    </TouchableOpacity>

    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      }}
      onPress={() => {
        navigation.navigate("ProfileSettings");
        navigation.closeDrawer();
      }}
    >
      <Text
        style={{
          color: "#333",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Profile Settings
      </Text>
      <MaterialCommunityIcons name="chevron-right" size={24} color="#333" />
    </TouchableOpacity>

    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      }}
      onPress={() => {
        navigation.navigate("CreateJobs");
        navigation.closeDrawer();
      }}
    >
      <Text
        style={{
          color: "#333",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Create Jobs
      </Text>
      <MaterialCommunityIcons name="chevron-right" size={24} color="#333" />
    </TouchableOpacity>

    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 435,
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      }}
      onPress={() => {
        navigation.replace("LoginScreen");
        navigation.closeDrawer();
      }}
    >
      <Text
        style={{
          color: "#333",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Logout
      </Text>
      <MaterialCommunityIcons name="chevron-right" size={24} color="#333" />
    </TouchableOpacity>
  </View>
);

export default DrawerContent;

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
      style={{ marginLeft: 20, marginBottom: 20, padding: 10, borderRadius: 5 }}
      onPress={() => navigation.navigate("Profile")}
    >
      <Text style={{ color: "#333", fontSize: 20, fontWeight: "bold" }}>
        Profile
      </Text>
    </TouchableOpacity>
  </View>
);
export default DrawerContent;

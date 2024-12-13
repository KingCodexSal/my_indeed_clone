import React from "react";
import { View, Text } from "react-native";
import CustomHeader from "../components/CustomHeader.jsx";

const NotificationsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ marginTop: 20, textAlign: "center" }}>
        You dont have any notifications yet
      </Text>
    </View>
  );
};

export default NotificationsScreen;

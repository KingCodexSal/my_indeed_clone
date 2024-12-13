import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={{ backgroundColor: "#6200ee" }}>
      <Appbar.Content title={title} />
      <Appbar.Action
        icon="bell"
        onPress={() => navigation.navigate("Notifications")}
      />
    </Appbar.Header>
  );
};

export default CustomHeader;

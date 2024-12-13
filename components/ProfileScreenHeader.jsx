import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";

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
export default ProfileScreenHeader;

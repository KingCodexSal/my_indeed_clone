import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, View } from "react-native";
import { Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";

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
          source={require("../assets/indeed_logo.png")}
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
export default HomeScreenHeader;

import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("LoginScreen");
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/indeed_logo.png")}
        style={{ width: 100, height: 120 }}
      />
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default SplashScreen;

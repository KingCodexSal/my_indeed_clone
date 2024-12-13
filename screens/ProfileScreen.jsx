import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Add a resume to Indeed</Text>

        <TouchableOpacity style={[styles.button, styles.topButton]}>
          <Text style={styles.buttonText}>Upload Resume</Text>
        </TouchableOpacity>
        <View style={styles.space} />

        <TouchableOpacity style={[styles.button, styles.bottomButton]}>
          <Text style={styles.bottomButtonText}>Build a Indeed Resume</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  statusWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    alignSelf: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 60,
    justifyContent: "center",
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  button: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
  },
  topButton: {
    backgroundColor: "#6200ee",
    borderRadius: 10,
  },
  bottomButton: {
    backgroundColor: "#6200ee",
    borderRadius: 10,
    color: "white",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  space: {
    marginVertical: 10,
  },
});

export default ProfileScreen;

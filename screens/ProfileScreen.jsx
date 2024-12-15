import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as DocumentPicker from "expo-document-picker";

const ProfileScreen = () => {
  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
      });

      if (result.type === "cancel") {
        console.log("User cancelled the picker");
        return;
      }

      console.log(result);

      const fileName = result.name || "No name";
      const fileType = result.mimeType || "No type";

      Alert.alert("File Selected", `Name: ${fileName}\nType: ${fileType}`);
    } catch (err) {
      console.error("Error picking file:", err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Add a resume to Indeed</Text>

        <TouchableOpacity
          onPress={pickFile}
          style={[styles.button, styles.topButton]}
        >
          <Text style={styles.buttonText}>Upload Resume</Text>
        </TouchableOpacity>

        <View style={styles.space} />

        <TouchableOpacity style={[styles.button, styles.bottomButton]}>
          <Text style={styles.bottomButtonText}>Build an Indeed Resume</Text>
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

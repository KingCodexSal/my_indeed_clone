import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const SearchJobTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search for Title, Keywords, Company</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Job Title, Keywords, or Company"
      />
      <Button title="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderBottomWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default SearchJobTitle;
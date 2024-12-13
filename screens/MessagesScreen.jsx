import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const MessagesScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("inbox");
  const [items, setItems] = useState([
    { label: "Inbox", value: "inbox" },
    { label: "Archive", value: "archive" },
    { label: "Spam", value: "spam" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.statusWrapper}>
        <View style={styles.statusDot}></View>
        <Text style={styles.statusText}>Online Status: On</Text>
      </View>
      <View style={styles.pickerWrapper}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.picker}
          containerStyle={styles.pickerContainer}
          dropDownContainerStyle={styles.dropdownContainer}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to Messages</Text>
        <Text style={styles.spantext}>
          When an employer contacts you, you'll see messages here
        </Text>

        <TouchableOpacity style={[styles.button, styles.topButton]}>
          <Text style={styles.buttonText}>Find Jobs</Text>
        </TouchableOpacity>
        <View style={styles.space} />

        <TouchableOpacity style={[styles.button, styles.bottomButton]}>
          <Text style={styles.bottomButtonText}>Upload your CV</Text>
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
  statusDot: {
    width: 12,
    height: 12,
    backgroundColor: "green",
    borderRadius: 6,
    marginRight: 10,
  },
  statusText: {
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
  },
  pickerWrapper: {
    width: "85%",
    alignSelf: "center",
    marginTop: 20,
  },
  pickerContainer: {
    height: 40,
  },
  picker: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#ccc",
  },
  dropdownContainer: {
    backgroundColor: "#fSSSff",
    borderColor: "#ccc",
    elevation: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  spantext: {
    fontSize: 14,
    marginBottom: 15,
    textAlign: "center",
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
    borderColor: "#6200ee",
    borderWidth: 2,
    backgroundColor: "transparent",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomButtonText: {
    color: "#6200ee",
    fontSize: 16,
    fontWeight: "bold",
  },
  space: {
    marginVertical: 10,
  },
});

export default MessagesScreen;

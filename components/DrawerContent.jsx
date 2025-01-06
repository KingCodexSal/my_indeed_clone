import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const DrawerContent = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.closeButton}
      onPress={() => navigation.closeDrawer()}
    >
      <MaterialCommunityIcons name="close" size={30} color="grey" />
    </TouchableOpacity>

    <View style={styles.content}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate("ProfileSettings");
          navigation.closeDrawer();
        }}
      >
        <Text style={styles.menuText}>Profile Settings</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate("CreateJobs");
          navigation.closeDrawer();
        }}
      >
        <Text style={styles.menuText}>Create Jobs</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="#333" />
      </TouchableOpacity>
    </View>

    <View style={styles.logoutContainer}>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          navigation.replace("LoginScreen");
          navigation.closeDrawer();
        }}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  closeButton: {
    marginLeft: 20,
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  menuText: {
    color: "#333",
    fontSize: 20,
    fontWeight: "bold",
  },
  logoutContainer: {
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  logoutButton: {
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DrawerContent;

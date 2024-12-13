import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const Interviews = () => (
  <View style={styles.tabContainer}>
    <Text>Interviews</Text>
  </View>
);

const AppliedJobs = () => (
  <View style={styles.tabContainer}>
    <Text>Applied Jobs</Text>
  </View>
);

const SavedJobs = () => (
  <View style={styles.tabContainer}>
    <Text>Saved Jobs</Text>
  </View>
);

const Archived = () => (
  <View style={styles.tabContainer}>
    <Text>Archived</Text>
  </View>
);

const MyJobs = () => {
  const [count, setCount] = useState(0);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "bold",
          textAlign: "left",
        },
        tabBarStyle: {
          backgroundColor: "white",
          elevation: 0,
          paddingVertical: 10,
        },
        tabBarIndicatorStyle: { backgroundColor: "transparent" },
        tabBarItemStyle: { width: "auto", marginHorizontal: -5 },
      }}
    >
      <Tab.Screen name={`Saved (${count})`} component={SavedJobs} />
      <Tab.Screen name={`Applied (${count})`} component={AppliedJobs} />
      <Tab.Screen name={`Interviews (${count})`} component={Interviews} />
      <Tab.Screen name={`Archived (${count})`} component={Archived} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyJobs;

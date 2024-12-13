import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

import { Card, Button } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const jobData = [
  { id: "1", title: "Software Engineer", company: "Company A" },
  { id: "2", title: "Product Manager", company: "Company B" },
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.company}>{item.company}</Text>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="contained"
          /* onPress={() => navigation.navigate("JobDetails", { jobId: item.id })}*/
        >
          View Details
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TouchableOpacity
          style={[
            styles.searchButton,
            {
              borderRightWidth: 1,
              borderColor: "#ccc",
            },
          ]}
          onPress={() => navigation.navigate("SearchJobTitle")}
        >
          <MaterialCommunityIcons
            name="briefcase-search"
            size={20}
            color="#333"
          />
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => navigation.navigate("SearchLocation")}
        >
          <MaterialCommunityIcons name="map-marker" size={20} color="#333" />
          <Text style={styles.searchButtonText}>City, State</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>Jobs For You</Text>
        <Text style={styles.spantext}>
          Jobs based on your activity on indeed
        </Text>
        <FlatList
          data={jobData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
    overflow: "hidden",
    elevation: 20,
    borderColor: "#ccc",
  },
  searchButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "white",
  },
  searchButtonText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginLeft: 10,
  },
  card: {
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  company: {
    fontSize: 14,
    color: "#777",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 0,
    color: "#333",
  },
  spantext: {
    fontSize: 14,
    marginBottom: 15,
  },
});

export default HomeScreen;

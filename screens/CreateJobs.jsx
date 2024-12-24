import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";

const CreateJobs = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    salary: "",
    location: "",
  });

  const handleChange = (field, value) => {
    setJobDetails({ ...jobDetails, [field]: value });
  };

  const handleAddJob = () => {
    if (!jobDetails.title || !jobDetails.description) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }

    Alert.alert("Job Added", `Title: ${jobDetails.title}`);
    setJobDetails({ title: "", description: "", salary: "", location: "" });
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Post a New Job</Text>

        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[styles.button, styles.topButton]}
        >
          <Text style={styles.buttonText}>+ Add Job</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Job Details</Text>

            <TextInput
              style={styles.input}
              placeholder="Job Title *"
              value={jobDetails.title}
              onChangeText={(text) => handleChange("title", text)}
            />

            <TextInput
              style={[styles.input, { height: 100 }]}
              placeholder="Job Description *"
              value={jobDetails.description}
              onChangeText={(text) => handleChange("description", text)}
              multiline
            />

            <TextInput
              style={styles.input}
              placeholder="Salary (Optional)"
              value={jobDetails.salary}
              onChangeText={(text) => handleChange("salary", text)}
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
              placeholder="Location (Optional)"
              value={jobDetails.location}
              onChangeText={(text) => handleChange("location", text)}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleAddJob}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    borderRadius: 10,
  },
  topButton: {
    backgroundColor: "#6200ee",
  },
  bottomButton: {
    backgroundColor: "#6200ee",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  saveButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#f44336",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
  },
  cancelButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default CreateJobs;

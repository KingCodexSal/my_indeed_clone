import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const CreateJobs = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!title.trim()) {
      Alert.alert("Validation Error", "Title is required");
      return false;
    }
    if (!description.trim()) {
      Alert.alert("Validation Error", "Description is required");
      return false;
    }
    if (!salary.trim()) {
      Alert.alert("Validation Error", "Salary is required");
      return false;
    }
    if (!location.trim()) {
      Alert.alert("Validation Error", "Location is required");
      return false;
    }
    if (!postedBy.trim()) {
      Alert.alert("Validation Error", "Posted By is required");
      return false;
    }
    return true;
  };

  const handleAddJob = async () => {
    if (!validateForm()) return;
    setLoading(true);

    try {
      await addDoc(collection(db, "jobs"), {
        title,
        description,
        salary,
        location,
        postedBy,
        createdAt: new Date(),
      });
      Alert.alert("Success", "Form submitted successfully");
      setModalVisible(false);
      setTitle("");
      setDescription("");
      setSalary("");
      setPostedBy("");
      setLocation("");
    } catch (error) {
      console.error("Error submitting form", error);
      Alert.alert("Error", "Failed to submit the form. Please try again later");
    } finally {
      setLoading(false);
    }
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
        isVisible={modalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Job Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Job Title *"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={[styles.input, { height: 100 }]}
              placeholder="Job Description *"
              value={description}
              onChangeText={setDescription}
              multiline
            />
            <TextInput
              style={styles.input}
              placeholder="Salary (Optional)"
              value={salary}
              onChangeText={setSalary}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Posted By"
              value={postedBy}
              onChangeText={setPostedBy}
            />
            <TextInput
              style={styles.input}
              placeholder="Location (Optional)"
              value={location}
              onChangeText={setLocation}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleAddJob}
                disabled={loading}
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
    margin: 0,
    padding: 0,
  },
  modalContent: {
    width: "110%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    marginTop: 100,
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

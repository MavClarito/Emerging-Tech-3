import React, { useState, useEffect } from 'react';
import { ScrollView, FlatList, StyleSheet, View, Text, Modal, TouchableOpacity, Alert } from 'react-native';
import GoalItem from '@/components/GoalItem';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon component

const GoalContainer = ({ useScrollView, goals, onRemoveGoal }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [warningModalVisible, setWarningModalVisible] = useState(false); // State for warning modal
  const [deleteModalVisible, setDeleteModalVisible] = useState(false); // State for delete confirmation modal
  const [goalToDelete, setGoalToDelete] = useState(null); // State for tracking which goal to delete

  // Effect to show warning modal if there are more than 5 goals
  useEffect(() => {
    if (goals.length > 5) {
      setWarningModalVisible(true);
    } else {
      setWarningModalVisible(false);
    }
  }, [goals]);

  const handleUserIconClick = () => {
    window.alert("Welcome to my goal app!");
    Alert.alert("Welcome to my goal app!");
  };
    // Show delete confirmation modal
  const confirmDeleteGoal = (index) => {
    setGoalToDelete(index);
    setDeleteModalVisible(true);
  };
    // Reset goal to delete after confirmation // Delete the goal // Hide delete confirmation modal
  const handleDeleteGoal = () => {
    if (goalToDelete !== null) {
      onRemoveGoal(goalToDelete);
      setGoalToDelete(null);
    }
    setDeleteModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleUserIconClick}>
          <Icon name="person" size={30} color="#2ecc71" />
        </TouchableOpacity>
        <Text style={styles.modeIndicator}>
          {useScrollView ? '🌀 Current Mode: ScrollView' : '📜 Current Mode: FlatList'}
        </Text>
      </View>

      {/* Button to toggle the modal visibility */}
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.showGoalsButton}>
        <Text style={styles.buttonText}>{modalVisible ? 'Hide Goals' : 'Show Goals'}</Text>
      </TouchableOpacity>

      {/* Modal for displaying goals */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {useScrollView ? (
              <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                {goals.map((goal, index) => (
                  <GoalItem key={goal.key} text={goal.text} onRemove={() => confirmDeleteGoal(index)} />
                ))}
              </ScrollView>
            ) : (
              <FlatList
                style={styles.flatListContainer}
                data={goals}
                renderItem={({ item, index }) => (
                  <GoalItem
                    text={item.text}
                    onRemove={() => confirmDeleteGoal(index)}
                  />
                )}
                keyExtractor={(item) => item.key}
                scrollEnabled={false}
              />
            )}
            {/* Close Button */}
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Warning Modal for too many goals */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={warningModalVisible}
        onRequestClose={() => setWarningModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.warningText}>Warning: You have more than 5 goals! Consider reducing your list to avoid feeling overwhelmed.</Text>
            <TouchableOpacity onPress={() => setWarningModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.confirmationText}>Are you sure you want to delete this goal?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleDeleteGoal} style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDeleteModalVisible(false)} style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>No</Text>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  modeIndicator: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10, // Add some space between the icon and text
    fontFamily: 'Roboto Mono',
  },
  showGoalsButton: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '70%',
  },
  warningText: {
    fontSize: 16,
    color: '#d9534f',
    textAlign: 'center',
    marginBottom: 20,
  },
  confirmationText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  confirmButton: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#ff7675',
    padding: 10,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#ff7675',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  flatListContainer: {
    flex: 1,
    width: '100%',
  },
});

export default GoalContainer;

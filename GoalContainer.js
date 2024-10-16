import React, { useState } from 'react';
import { ScrollView, FlatList, StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';
import GoalItem from '@/components/GoalItem';

const GoalContainer = ({ useScrollView, goals, onRemoveGoal }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.modeIndicator}>
        {useScrollView ? '🌀 Current Mode: ScrollView' : '📜 Current Mode: FlatList'}
      </Text>

      {/* Button to open the modal */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.showGoalsButton}>
        <Text style={styles.buttonText}>Show Goals</Text>
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
                  <GoalItem key={goal.key} text={goal.text} onRemove={() => onRemoveGoal(index)} />
                ))}
              </ScrollView>
            ) : (
              <FlatList
                style={styles.flatListContainer}
                data={goals}
                renderItem={({ item, index }) => (
                  <GoalItem
                    text={item.text}
                    onRemove={() => onRemoveGoal(index)}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',  // Changed to flex-start to move items up
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  modeIndicator: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
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

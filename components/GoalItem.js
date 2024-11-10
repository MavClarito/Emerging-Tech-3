import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const GoalItem = ({ text, onRemove }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>🎯 {text}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Icon name="delete" size={24} color="#ff7675" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    elevation: 1,
  },
  goalText: {
    fontSize: 16,
  },
});

export default GoalItem;

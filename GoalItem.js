import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>🎯 {props.text}</Text>
      <TouchableOpacity style={styles.removeButton} onPress={props.onRemove}>
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#dfe6e9',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  goalText: {
    color: '#2d3436',
    fontSize: 18,
  },
  removeButton: {
    backgroundColor: '#ff7675',
    padding: 5,
    borderRadius: 5,
  },
  removeText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default GoalItem;

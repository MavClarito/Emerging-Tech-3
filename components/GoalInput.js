import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoalText.trim() === '') {
      return;
    }
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        style={styles.textInput}
        placeholder="Your Course Goal"
        value={enteredGoalText}
      />
      <Pressable style={({ pressed }) => [ styles.addButton, pressed ? styles.buttonPressed : null,
        ]} onPress={addGoalHandler} onPressIn={() => console.log('Pressed in')}
            onPressOut={() => console.log('Pressed out')}
            onLongPress={() => console.log('Long pressed')} android_ripple={{ color: 'blue' }}>
        <Text style={styles.addButtonText}>Add Goal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '80%',
    padding: 13,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: 'skyblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    backgroundColor: 'deepskyblue',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GoalInput;

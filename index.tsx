import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'Brayles': require('@/assets/fonts/Brayles.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading font:', error);
      }
    };
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoalText.trim() === '') {
      return;
    }
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setEnteredGoalText('');
  };

  const removeGoalHandler = (index) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((_, i) => i !== index)
    );
  };

  const renderGoalItem = ({ item, index }) => (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>🎯 {item}</Text>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeGoalHandler(index)}>
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.appContainer}>
      <Image source={require('@/assets/images/goal-setting-basics.jpg')} style={styles.logo} resizeMode="cover" />
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your Course Goal"
          value={enteredGoalText}
        />
        <Button title="Add Goal" color='skyblue' onPress={addGoalHandler} />
      </View>
      <Text style={styles.listTitle}>List of goals:</Text>
      <View style={styles.goalListContainer}>
        <FlatList
          style={styles.goalsContainer}
          data={courseGoals}
          renderItem={renderGoalItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: '50%',
    borderRadius: 10,
    marginBottom: 30,
  },
  appContainer: {
    flex: 1,
    backgroundColor: '#f5e8d7',
    padding: 50,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    width: '80%',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '70%',
    padding: 13,
    marginRight: 8,
  },
  listTitle: {
    fontSize: 24,
    marginVertical: 16,
    fontFamily: 'Brayles',
  },
  goalsContainer: {
    flex: 4,
    marginTop: 20,
    width: '100%',
  },
  goalItem: {
    backgroundColor: '#dfe6e9',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#2d3436',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  goalListContainer: {
    flex: 1,
    height: '60%',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#2d3436',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  goalText: {
    fontSize: 16,
    color: '#2d3436',
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

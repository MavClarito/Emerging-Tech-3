import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GoalInput from '@/components/GoalInput';
import GoalContainer from '@/components/GoalContainer';
import AppHeader from '@/components/AppHeader';
import CustomButton from '@/components/CustomButton';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [useScrollView, setUseScrollView] = useState(true);

  const addGoalHandler = (enteredGoalText) => {
    if (enteredGoalText.trim() === '') {
      return;
    }
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { key: Math.random().toString(), text: enteredGoalText },
    ]);
  };

  const removeGoalHandler = (index) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((_, i) => i !== index)
    );
  };

  const toggleListViewHandler = () => {
    setUseScrollView(!useScrollView);
  };

  return (
    <View style={styles.appContainer}>
      <AppHeader />
      <GoalInput onAddGoal={addGoalHandler} />
      <CustomButton
        title={`Switch to ${useScrollView ? 'FlatList' : 'ScrollView'}`}
        onPress={toggleListViewHandler}
      />
      <GoalContainer
        useScrollView={useScrollView}
        goals={courseGoals}
        onRemoveGoal={removeGoalHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f5e8d7',
    padding: 20,
    justifyContent: 'space-between',
  },
});

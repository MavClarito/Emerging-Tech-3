import React from 'react';
import { ScrollView, FlatList, StyleSheet, View, Text } from 'react-native';
import GoalItem from '@/components/GoalItem';

const GoalContainer = ({ useScrollView, goals, onRemoveGoal }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.modeIndicator}>
        {useScrollView ? '🌀 Current Mode: ScrollView' : '📜 Current Mode: FlatList'}
      </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  modeIndicator: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Brayles',
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

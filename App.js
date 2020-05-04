import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import GoalList from './components/GoalList'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [goals, setGoals] = useState([])

  const textInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const onButtonHandler = () => {
    setGoals(goals => [...goals, { id: Math.random().toString(), value: enteredGoal }])

  }

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter goal'
          style={styles.input}
          onChangeText={textInputHandler}
        />
        <Button title='Add' onPress={onButtonHandler} />
      </View>
      <FlatList
        data={goals}
        keyExtractor={((item, index) => item.id)}
        renderItem={(item) => <GoalList value = {item.item.value}/> } />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { padding: 50 },
  inputContainer: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  input: { borderColor: 'black', borderWidth: 1, padding: 10, width: '80%' },
  
});

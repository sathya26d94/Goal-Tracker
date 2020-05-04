import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

const GoalList = (props) => {
    return (
        <View style={styles.list}><Text>{props.value}</Text></View>
    );
}

const styles = StyleSheet.create({
    list: { padding: 10, borderColor: 'black', borderWidth: 1, backgroundColor: '#ccc', marginVertical: 10 }
})

export default GoalList
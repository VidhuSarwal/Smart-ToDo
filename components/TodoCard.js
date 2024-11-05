// TodoCard.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/styles'; // Import styles correctly

const TodoCard = ({ todo, onDelete }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{todo.title}</Text>
            <View style={styles.footer}>
                {/* <Text style={styles.endDateText}>{todo.heading}</Text> */}
                <Text style={styles.bodytext}>Priority: {todo.priority}</Text>
                <Button title="Delete" color="#ff6b6b" onPress={onDelete} />
            </View>
        </View>
    );
};

export default TodoCard;

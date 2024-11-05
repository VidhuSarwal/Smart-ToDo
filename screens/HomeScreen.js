// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoCard from '../components/TodoCard';
import AddTodoModal from '../components/AddTodoModal';
import { styles } from '../styles/styles';

const HomeScreen = () => {
    const [todos, setTodos] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);

    // Load todos from AsyncStorage when the app loads
    useEffect(() => {
        const loadTodos = async () => {
            try {
                const storedTodos = await AsyncStorage.getItem('todos');
                if (storedTodos) {
                    const parsedTodos = JSON.parse(storedTodos);
                    parsedTodos.sort((a, b) => a.priority - b.priority); // Sort by priority
                    setTodos(parsedTodos);
                }
            } catch (error) {
                console.log("Failed to load todos", error);
            }
        };
        loadTodos();
    }, []);

    // Save todos to AsyncStorage whenever the todos list is updated
    useEffect(() => {
        const saveTodos = async () => {
            try {
                await AsyncStorage.setItem('todos', JSON.stringify(todos));
            } catch (error) {
                console.log("Failed to save todos", error);
            }
        };
        saveTodos();
    }, [todos]);

    const addTodo = (newTodo) => {
        const updatedTodos = [...todos, newTodo];
        updatedTodos.sort((a, b) => a.priority - b.priority); // Sort by priority
        setTodos(updatedTodos);
    };

    const deleteTodo = (index) => {
        Alert.alert(
            "Delete Todo",
            "Are you sure you want to delete this todo?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        const updatedTodos = todos.filter((_, i) => i !== index);
                        setTodos(updatedTodos);
                    }
                }
            ]
        );
    };

    const showAddTodoModal = () => setModalVisible(true);
    const closeAddTodoModal = () => setModalVisible(false);

    const renderTodo = ({ item, index }) => (
        <TodoCard
            todo={item}
            onDelete={() => deleteTodo(index)}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={renderTodo}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 100 }}
            />

            <TouchableOpacity
                style={styles.floatingButton}
                onPress={showAddTodoModal}
            >
                <Text style={styles.floatingButtonText}>+</Text>
            </TouchableOpacity>

            <AddTodoModal
                onSubmit={addTodo}
                onClose={closeAddTodoModal}
                visible={isModalVisible}
            />
        </View>
    );
};

export default HomeScreen;

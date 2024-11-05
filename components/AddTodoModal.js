// AddTodoModal.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';

const AddTodoModal = ({ onSubmit, onClose, visible }) => {
    const [title, setTitle] = useState('');
    const [heading, setHeading] = useState('');
    const [priority, setPriority] = useState('');

    const handleAddTodo = () => {
        if (title && heading && priority) {
            onSubmit({ title, heading, priority: parseInt(priority, 10) });
            setTitle('');
            setHeading('');
            setPriority('');
            onClose(); // Close the modal after submission
        }
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Add New Todo</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Enter Todo Title"
                        placeholderTextColor="black"
                        value={title}
                        onChangeText={setTitle}
                    />
                    {/* <TextInput
                        style={styles.input}
                        placeholder="Enter Todo description"
                        placeholderTextColor="black"
                        value={heading}
                        onChangeText={setHeading}
                    /> */}
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Priority (e.g., 1-10)"
                        placeholderTextColor="black"
                        keyboardType="numeric"
                        value={priority}
                        onChangeText={setPriority}
                    />

                    <Button title="Add Todo" onPress={handleAddTodo} />
                    <Button title="Cancel" onPress={onClose} color="#888" />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
});

export default AddTodoModal;

// App.tsx
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { Provider as PaperProvider } from 'react-native-paper';

type Todo = {
  title: string;
  body: string;
  priority: number;
  endDate: string;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => setTodos(prev => [...prev, todo]);
  const deleteTodo = (index: number) => setTodos(prev => prev.filter((_, i) => i !== index));

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
      </SafeAreaView>
    </PaperProvider>
  );
}

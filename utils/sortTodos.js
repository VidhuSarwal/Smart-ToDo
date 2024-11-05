const sortTodos = (todos) => {
    return todos.sort((a, b) => {
        if (a.priority === b.priority) {
            return new Date(a.endDate) - new Date(b.endDate);
        }
        return a.priority - b.priority;
    });
};

export default sortTodos;

export const getDataFromEndPoint = (setTodos) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        setTodos([
            ...todos,
            {text: todos.title, completed: todos.completed, id: todos.id }
        ])
    });
};
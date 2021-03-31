import React from 'react';
 
const Form = ({ inputText, setInputText, setTodos, todos, setStatus  }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    const getDataFromEndPoint = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                console.log(element);
            });
        });
    };


    return(
        <form >
            <input value={inputText} onChange={inputTextHandler} className="todo-input" type="text"/>
            <button onClick={submitTodoHandler} className="todo-input" type="submit">
                <i className="fas fa-plus square"></i>
            </button>
            <button onClick={getDataFromEndPoint} className="todo-input" type="submit">
                <i className="fas fa-cloud-download-alt"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
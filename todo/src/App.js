import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = [];
    todos.filter((todo, i) => {
      if (i != index) {
        updatedTodos.push(todo);
      }
    });
    setTodos(updatedTodos);
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div className="App">
      <h1>TODO List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTodo(index)}>x</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default App;

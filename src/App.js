import React from 'react';
import './App.css';
// import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

function App() {
  return (
    <div className="todo-app">
    <h1>To Do List</h1>
    <div className='todo-container'>
      <TodoList />
      </div>
    </div>
  );
}

export default App;

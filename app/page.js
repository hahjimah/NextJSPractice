"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
  // State variables
  const [counter, setCounter] = useState(0); // Counter state
  const [todoList, setTodoList] = useState([]); // Todo list state
  const [newTodo, setNewTodo] = useState(''); // New todo input state

  // Event handlers
  const handleIncreaseButtonClick = () => {
    setCounter(counter + 1); // Increment counter
  };

  const handleDecreaseButtonClick = () => {
    setCounter(counter - 1); // Decrement counter
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value); // Update new todo input value
  };

  const handleAddTodo = () => {
    setTodoList([...todoList, newTodo]); // Add new todo to the list
    setNewTodo(''); // Clear new todo input
  };

  

  return (
    <div>
      <h1>Welcome to Elliot's Page</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <p>Counter: {counter}</p>
      <button onClick={handleIncreaseButtonClick}>Increase</button>
      <button onClick={handleDecreaseButtonClick}>Decrease</button>
      <div>
        {/* New todo input and add button */}
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        {/* Todo list */}
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}>
            {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;



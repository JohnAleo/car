import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MotorComponent from './components/main/motor';
import Usestate from './components/main/usestate';
import TodoList from './components/main/todo';
import Todolist from './components/main/todolist';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Usestate></Usestate>
  <TodoList/>
  <Todolist/>
  </React.StrictMode>
);



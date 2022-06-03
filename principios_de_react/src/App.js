// import logo from './logo.svg';
// import './App.css';

import React from "react";
// import TodoCounter from "./TodoCounter"; esta es la forma de importar por default
import { TodoCounter } from "./TodoCounter"; // de esta manera se importa de manera
//especifica con el nombre de la funcion, variable, componente etc. que quiero

import {TodoSearch} from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const todos =[

    {text:"cortar cebolla",completed:true},
    {text:"tomar el curso de intro a react",completed:false},
    {text:"llorar con la llorona",completed:false},
    {text:"otra tarea",completed:false},
  
];


function App() {
  return (
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />
    <TodoList>
      {todos.map( todo => (
       <TodoItem Key={todo.text} text={todo.text} completed={todo.completed}/>
       ))} 
    </TodoList>

    <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

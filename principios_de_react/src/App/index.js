// import logo from './logo.svg';
// import './App.css';

import React from "react";
// import TodoCounter from "./TodoCounter"; esta es la forma de importar por default
 // de esta manera se importa de manera
//especifica con el nombre de la funcion, variable, componente etc. que quiero


import { AppUI } from "./AppUI";

const defaultTodos =[

    {text:"cortar cebolla",completed:true},
    {text:"tomar el curso de intro a react",completed:false},
    {text:"llorar con la llorona",completed:true},
    {text:"otra tarea",completed:false},
  
];


function App() {




  
  // antes de hacer nuestro retorno se llama a el estado searchValue,setSearchValue
  const [todos,setTodos]=React.useState(defaultTodos)
  const [searchValue,setSearchValue]= React.useState("");

  // como el estado viene de TodoSearch entramos a las propiedades del componente <TodoSearch/> y le hacemos llegar los valores de 
  //searchValue y setSearchValue

  const completedTodos=todos.filter(todo=>!!todo.completed).length
  const totalTodos=todos.length;
  
  let searchedTodos=[];
  if(!searchValue.length>=1) {
    searchedTodos=todos;
  } else {
    searchedTodos= todos.filter(todo=>{
      const todoText=todo.text.toLowerCase();
      const searchText= searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo=(text)=>{
    const todoIndex=todos.findIndex(todo => todo.text===text);
    const newTodos=[...todos];
    newTodos[todoIndex].completed=true;
    setTodos(newTodos);
  };


  const deleteTodo=(text)=>{
    const todoIndex=todos.findIndex(todo => todo.text===text);
    const newTodos=[...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  };




  return (
   <AppUI
    totalTodos={totalTodos}
    completed={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}

   />
  );
}

export default App;

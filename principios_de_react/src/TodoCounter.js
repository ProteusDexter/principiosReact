import React from "react";
import "./TodoCounter.css" ;

function TodoCounter(){

    return (
        <h2 className="TodoCounter">Has completado 2 de 3 ToDo's </h2>
    );
}

// export default TodoCounter;    esta es una forma de esportar 
//ligada a su import en app.js tambien comentado

export { TodoCounter };
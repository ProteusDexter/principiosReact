import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props){
    const onClickButton=(msg)=>{
        alert(msg)
    };
    return(
        <button type="button" className="CreateTodoButton"
        onClick={
            ()=>onClickButton("aqui deberia aparecer un modal")
    }
        
        >
            +
       </button>

    );
}
export {CreateTodoButton};
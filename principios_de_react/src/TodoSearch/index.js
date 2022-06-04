import React from "react";
import "./TodoSearch.css";

function TodoSearch ({searchValue,setSearchValue}){


    // const [searchValue,setSearchValue]=React.useState("");

    const onSearchValueChange=(event)=>{
        console.log(event.target.value);
       setSearchValue(event.target.value)
    };
    
    return (
        <input 
        className="TodoSearch"
         placeholder ="Escriba referencia del ToDo que quiere buscar"
         value={searchValue}
         onChange={onSearchValueChange} />
        //  ,
        //  <p>{searchValue}</p> recordemos que todo estaba embebido en un array[] y se le quitaron los ()
    );
}

export {TodoSearch};

import React from "react";

function TodoItem(props) {
    return(
        <li>
            <p></p>
            <span>C</span>
                <p>
                    {props.text}
                </p>
            <span>X</span>
            <p></p>
        </li>


    );
}
export {TodoItem}
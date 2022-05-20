import React from "react";

function TodoList(props) {
    return(
        <section>
            <ul>
            <p>{props.children}</p>
            </ul>
        </section>
    );
}

export { TodoList }
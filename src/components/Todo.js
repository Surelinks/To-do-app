import React from "react";

const Todo=({text, todos, todo, setTodos}) => {
    //events 
    const deleteHandler =()=> {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completHandler =() => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id){
                return {
                    ...item, completed: !item.completed 
                }
            } 
            return item;
        }))
    }
    return(
        <div className ="todo">
            <li className= {`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completHandler} className="complete-btn">
                <i className="fa fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn" >
                <i className= "fa fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;
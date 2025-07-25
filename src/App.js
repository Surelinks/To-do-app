import React, { useState, useEffect} from "react";
import './App.css';
//importing components 
import Form from "./components/Form";
import TodoList from "./components/TodoList"

function App() {


  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); 
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] =useState([]);

  //Run Once 
  useEffect(() => {
    getLocalTodos();
  }, []); 

  useEffect(()=> {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler =() => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
      
        break;
      case 'uncompleted' :
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  }
  // save to local 
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify (todos));
  };
  const getLocalTodos =()=> {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
      } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Kenneth Todo List</h1>
      </header>
      <Form 
      inputText={inputText}
      todos={todos} setTodos={setTodos} setInputText={setInputText} 
      setStatus={setStatus}
      filteredTodos={filteredTodos} />
      <TodoList setTodos={setTodos} todos={todos} 
        filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;

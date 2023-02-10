import { PlayArrow } from "@mui/icons-material";
import { v4 as uuid, v4 } from "uuid";
import React, { useState } from "react";
import Todo from "./components/Todo";
import Todoform from "./components/Todoform";
import Todolist from "./components/Todolist";

function App() {
  const [todos, setTodos] = useState([]);

  const checkTodo = (id) => {
    console.log(id);
    setTodos(todos.map(todo => {
      if(todo.id=== id)
         todo.isCompleted = !todo.isCompleted
         console.log(todo.isCompleted);
         return todo;
    }))

  };

   const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id != id))
   }

  // add a todo
  const addTodo = (text) => {
    const newTodo = {
      id: v4(),
      title: text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div >
     <Todoform  addTodo={addTodo}/>
     <Todolist todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;

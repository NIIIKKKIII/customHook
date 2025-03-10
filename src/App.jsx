
import axios from "axios";
import { useEffect, useState } from "react";


function useTodos(){
  const [todos, setTodos] = useState([]); 
  useEffect(() => {
    axios.get('http://localhost:3000/todo')
      .then((response) => {
        setTodos(response.data.todos); 
      })
      
  }, []);
   return todos;
}

function App() {
const todos = useTodos();   // Custom hook made by us, always remember that whenever we make a custom hook, we start with "use"

  return (
    <div>
      <h1>My Todo List</h1>
      {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} - {todo.completed ? "Completed" : "Pending"}
          </li>
        ))}
      
    </div>
  );
}

export default App;

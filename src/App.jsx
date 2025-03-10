
import axios from "axios";
import { useEffect, useState } from "react";


function useTodos(){
  const [todos, setTodos] = useState([]); 
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('http://localhost:3000/todo')
      .then((response) => {
        setTodos(response.data.todos); 
        setLoading(false)
      })
      
  }, []);
   return {todos, loading};
}

function App() {
const {todos, loading} = useTodos();   // Custom hook made by us, always remember that whenever we make a custom hook, we start with "use"

  return  <div>
      {loading? "loading...." : <div>
      <h1>My Todo List</h1>
      {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} - {todo.completed ? "Completed" : "Pending"}
          </li>
        ))}
      
    </div>}
    </div>
  
}

export default App;

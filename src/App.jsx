import {useState} from "react";
const app = () =>{
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const addtodo =()=>{
    setTodos([...todos, todo]);
    setTodo("");
  };
 return(
  <div>
    <h1>Todo App</h1>

      <input 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button onClick={addtodo}>Add</button>

      {todos.map((todo, i) => (
        <p key={i}>{todo}</p>
      ))}
  </div>
 )
}
export default app;
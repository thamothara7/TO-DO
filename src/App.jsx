import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn JavaScript", done: true  },
    { id: 2, text: "Learn React",      done: false },
    { id: 3, text: "Build a project",  done: false },
  ]);
  const [input, setInput] = useState("");

  // Add a new todo
  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = { id: Date.now(), text: input, done: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  // Toggle done/not done
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>My Todos ✅</h1>

      {/* Add input */}
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a todo..."
        onKeyDown={e => e.key === "Enter" && addTodo()}
      />
      <button onClick={addTodo}>Add</button>

      {/* Todos list */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              {todo.done ? "✅" : "⬜"} {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </li>
        ))}
      </ul>

      {/* Conditional rendering */}
      {todos.length === 0 && <p>No todos yet! Add one above.</p>}
    </div>
  );
}

export default TodoApp;
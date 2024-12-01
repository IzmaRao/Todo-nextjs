'use client';
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const newTodoItem: Todo = { id: Date.now(), text: newTodo};
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="bg-[#BFAE9F] justify-between  mx-auto my-40 h-auto w-fit px-12 py-14 flex rounded-md gap-10">
      
      <div className="flex flex-col items-start gap-5">
      <h1 className="text-4xl text-[#261501] mb-2">Todo App</h1>
        <label htmlFor="add">
          <h2 className="text-xl font-[550] mb-2">Add a new Todo:</h2>
          <input id="add" type="text" className="bg-[#C3A27F] py-1 px-3 rounded-md text-[#60432D]" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        </label>
        <button id="add-btn" className="bg-[#261501] text-[#fff] py-[3px] px-2 rounded-md hover:bg-[#60432D]" onClick={handleAddTodo}>Add Task</button>
      </div>

      <ul className="mt-5 space-y-2 justify-items-start">
        {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center bg-[#C3A27F] px-4 max-h-fit min-h-9 rounded-md min-w-40 max-w-fit py-1 text-[#60432D]">
        <p>{todo.text}</p>
        <button className="bg-[#261501] m-2 text-[#fff] py-[2px] px-3 rounded-md hover:bg-[#60432D] text-[14px]" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </li>
        ))}
      </ul>
    </div>
  );
}

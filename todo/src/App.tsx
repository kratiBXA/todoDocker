import { useState } from 'react';
import TodoItems from './Components/TodoItems';
import './App.css'

type Todo ={
  id : number;
  text :string;
};
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    const newTask: Todo = {
      id: Date.now(),
      text: newTodo.trim(),
    };
    setTodos([...todos, newTask]);
    setNewTodo('');
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  

  return (
    <div className="app">
      <h1 className="title">Todos</h1>
      <form className="form" onSubmit={addTodo}>
        <input
          className="input"
          type="text"
          placeholder="Add Your Todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="submit" type="submit">Submit</button>
      </form>

      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItems key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;

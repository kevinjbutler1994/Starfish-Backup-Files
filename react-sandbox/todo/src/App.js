// Default imports can be named anything
import ToDoList from "./ToDoList";
import './App.css';

function App() {
  const todos = [
    'Have Fun',
    'Learn React',
    'Learn the MERN-Stack'
  ];
  
  return (
    <div className="App">
      <h1>React To-Do</h1>
      {/* Pass todos as a prop */}
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
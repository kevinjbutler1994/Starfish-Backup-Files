import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList'

function App() 
{  
  const [showTodos, setShowTodos] = useState (true)
  const [todos, setTodos] = useState([
    'Have Fun!',
    'Learn React',
    'Learn the MERN-Stack'
  ])

let x = 'buy bananas'
function handleAddTodo (todo) {
  const newTodos = [...todos, todo] ;
  setTodos (newTodos) ;
}
  return (
    <div className="App">
    <h1>React To-Do</h1>
    {/* <button onClick={() => setShowToDos '!showToDos')} Toggle Todo List
  
  } */}
    {showTodos && <ToDoList todos={todos} />}
  </div>
  )
}

export default App;

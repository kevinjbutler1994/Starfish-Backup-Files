import ToDoListItem from './ToDoListItem'
import './ToDoList.css'

function ToDoList({ todos }) {
  return (
    <ul className="list">
      {todos.map((t, idx) => (
        <ToDoListItem todo={t} key={idx} index={idx} />
      ))}
    </ul>
  )
}

export default ToDoList

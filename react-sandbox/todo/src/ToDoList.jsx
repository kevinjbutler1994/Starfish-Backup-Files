import ToDoListItem from "./ToDoListItem";

function ToDoList({todos}) {
    // Application logic, etc. goes here
    return (
    <ul>
 {todos.map((todo) => (
    <ToDoListItem todo={todo}/>
 ))}

 </ul>
);
}
  
export default ToDoList;

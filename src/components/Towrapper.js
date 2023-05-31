import React, {useState} from 'react'
import Todoform from './Todoform'
import Editform from './Editform'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';
uuidv4();
const Towrapper = () => {
    const [todos,setTodos]= useState([])
    const addtodo = (todo) => {
        setTodos([...todos, { id:uuidv4(), task:todo, completed:false , isEidting:false}])
        console.log(todos)
    }
    const toggleComplete = id => {
        setTodos( todos.map(todo => todo.id=== id ? {
            ...todos, completed:!todo .completed} :todo ) ) }
   
     const editTodo = id => {
        setTodos( todos.map(todo => todo.id=== id? {
            ...todos, isEidting : !todo.isEidting }:todo ))
      }
    const deleteTodo= id =>{
        setTodos( todos.filter(todo => todo.id!== id))
    }

    const edittask = (task,id) => {
        setTodos (todos.map (todo => todo.id===id? {...todo,task, isEditing : ! todo.isEditing}:todo ))
    }
  return (
    <div className='TodoWrapper'>
      <Todoform  addTodo={addtodo}/>
      { todos.map( (todo,index)=>(todo.isEditing ?(
        <Editform  editTodo={edittask} task={todo} />
      ):
      (
        <Todo task={todo} key={index} toggleComplete={toggleComplete}
        deletetodo={ deleteTodo } edittodo={editTodo}/>  
      )
      ))}
    </div>
  )
}

export default Towrapper

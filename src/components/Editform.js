import React,{useState} from 'react'

const Editform = ({editTodo,task}) => {
    const [value, setValue] =useState(task.task);
     
     const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value,task.id)

        setValue('')
     }
  return (
    <form className='Todoform' onSubmit={handleSubmit}>
        <h2>ToDo List</h2>
        <br />
        <input type='text' className='Todoinput' value={value}placeholder=' Update Task'  onChange={
            (e)=>{
                setValue(e.target.value);
            }
        }/>
        
         <button className='todo-btn' type='submit'> Update </button>
    </form>
  )
}

export default Editform;

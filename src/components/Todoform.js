import React,{useState} from 'react'

const Todoform = ({addTodo}) => {
    const [value, setValue] =useState('');
     
     const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value)

        setValue('')
     }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <h1>ToDo List</h1>
        <br />
        <input type='text' className='todo-input' value={value}placeholder=' Add an Item'  onChange={
            (e)=>{
                setValue(e.target.value);
            }
        }/>
         <button className='todo-btn' type='submit'>Add</button>
    </form>
  )
}

export default Todoform

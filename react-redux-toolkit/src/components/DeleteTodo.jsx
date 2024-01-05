import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
const DeleteTodo = ({id}) => {
   const dispatch=useDispatch();
    
   const removeHandler=(id)=>{
        dispatch(removeTodo(id))
    }
  return (
    <button className='bg-blue-500 px-2 rounded-md'
    onClick={()=>removeHandler(id)}>Remove</button>
  )
}

export default DeleteTodo
import React, { useState } from 'react'
import { addTodo } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
    const dispatch=useDispatch();
    const [input,setInput]=useState('');
    const addHandler=()=>{
        if(input.trim()){
        dispatch(addTodo(input))
        // console.log(input);
        setInput('')}
    }
  return (
    <div className='w-4/12 flex justify-center mb-2 gap-2'>
        <input 
        type="text" 
        placeholder='Write your task....'
        className='w-[80%] rounded-md px-2 text-black'
        value={input}
        onChange={(e)=>setInput(e.target.value)}/>
        <button className="bg-green-600 px-2 rounded" onClick={addHandler}>EventLoop</button>
    </div>
  )
}

export default AddTodo
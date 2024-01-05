import React from 'react'
import DeleteTodo from './DeleteTodo';
import { useSelector } from 'react-redux';
import { updateTodo } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';
const Todos = () => {
    const Data=useSelector((state)=>state.todos);
    console.log(Data);
    const dispatch=useDispatch();
    const changeHandler=(id)=>{
        dispatch(updateTodo(id));
    }
    return (
        <div className='w-4/12  bg-slate-600 rounded-md p-8 '>

                {Data.length ? (Data.map((data) => (
                    <div key={data.id} className='flex mx-auto w-10/12 mt-2 gap-2'>
                        <li  className={`${data.completed ? "bg-green-400":"bg-red-500"}     list-none px-4  w-[80%] rounded-sm`}>{data.text}</li>

                        <DeleteTodo id={data.id}/>
                        <button className="bg-green-400 px-2 rounded-md">Edit</button>
                        <input type="checkbox" value={data.completed} onChange={()=>changeHandler(data.id)}/>
                    </div>))):(<div className='text-center text-2xl font-bold mt-8 text-orange-700'>CallStack Empty.....</div>)}
            
        </div>
    )
}

export default Todos
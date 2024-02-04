import React from 'react'
import { addCount,removeCount } from './features/counterSlice'
import { useSelector,useDispatch } from 'react-redux'
const App = () => {
  const value=useSelector((state)=>state.count)
  console.log(value);
  const dispatch=useDispatch()
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={()=>dispatch(removeCount())}>Minus</button>
      <p>{value}</p>
      <button onClick={()=>dispatch(addCount())}>Add</button>
    </div>
  )
}

export default App
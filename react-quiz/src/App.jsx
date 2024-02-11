import React, { useState } from 'react'
import Quiz from './components/Quiz'
import Home from './components/Home'

const App = () => {
  const [start,setStart]=useState(false)
  return (
    <div className='bg-slate-800 h-screen'>
      <header className='h-12 bg-slate-700 text-center pt-3 font-semibold text-gray-300 text-2xl'>
        QuizTime
      </header>
      {start ? <Quiz handler={setStart}/>:<Home handler={setStart}/>}
    </div>
  )
}

export default App
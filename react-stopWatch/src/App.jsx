import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [minutes,setMinutes]=useState(0);
  const [seconds,setSeconds]=useState(0);
  const [isRunning,setIsRunning]=useState(false);
  const restartHandler=()=>{
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false)
  }
  const stopHandler=()=>{
    setIsRunning(false)
  }
  const startHandler=()=>{
    setIsRunning(true)
  }

  useEffect(()=>{
    let timer;
    if(isRunning){
      timer=setInterval(()=>{
          setSeconds((prev)=>{
            if(prev===59){
              setMinutes((prev)=>prev+1);
              return 0
            }else{
              return prev+1
            }
          })
      },1000)
    }

    return ()=>{clearInterval(timer)}
  },[isRunning])
  return (
    <div className='stopwatch'>
      <h1>STOP-WATCH</h1>
      <div className='clock'>
        
        <span>{minutes<10 ? "0"+minutes : minutes }</span>
        <span>:</span>
        <span>{seconds<10 ? "0"+seconds : seconds }</span>
        
      </div>
      <div className='btns'>
        <button onClick={startHandler}>start</button>
        <button onClick={stopHandler}>stop</button>
        <button onClick={restartHandler}> restart</button>
      </div>
    </div>
  )
}

export default App
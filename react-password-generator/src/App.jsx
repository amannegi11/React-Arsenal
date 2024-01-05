import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const ref=useRef(null);
  const generatePassword = useCallback(() => {
    let pass = ''
    let str=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;

    if(charAllowed) str+=`!@#%^&*()?`;

    if(numberAllowed) str+=`1230456789`;

    for (let i = 1; i < length; i++) {
      const index=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(index)
    }
   setPassword(pass); 
  },[length,charAllowed,numberAllowed]);

  function handleCopy(){
    window.navigator.clipboard.writeText(password);
    ref.current.select();
  }

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed])
  return (
    <div className='flex justify-center mt-8'>
      <div className='w-10/12 bg-gray-500 rounded-md h-[120px] flex flex-col  justify-center items-center'>
        <div>
          <label>
            <input
              type="text"
              className='rounded-l text-start pl-2'
              value={password}
              readOnly
              ref={ref}

            />
          </label>
          <button 
          onClick={handleCopy}
          className='bg-blue-500 rounded-r px-1 text-white'>copy</button>
        </div>
        <div className='flex mt-2'>
          <input type="range"
          max={20}
          min={4}
          value={length}
          onChange={(e)=>setLength(e.target.value)}/>
          <div className='ml-4'>Length : {length}</div>

        </div>
        <div className='flex items-center justify-center gap-2'>
          <label>
            <span className='p-1'>Number</span>
            <input type="checkbox" 
            value={numberAllowed}
            onChange={()=>setNumberAllowed((prev)=>!prev)}
           />
          </label>
          <label>
            <span className='p-1'>string</span>
            <input type="checkbox" 
            value={charAllowed}
            onChange={()=>setCharAllowed((prev)=>!prev)}
           />
          </label>
        </div>
      </div>


    </div>
  )
}

export default App
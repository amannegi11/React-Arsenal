import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setData]=useState(null);
  const [curr,setCurr]=useState(0);
  const fetchData=async()=>{
    let url=`https://fakestoreapi.com/products`

    let res=await fetch(url);
    let Data=await res.json();
    setData(Data.slice(-5))
   
  }

 

  useEffect(()=>{
    fetchData();
  },[])

  const preHandler=()=>{curr ? setCurr(curr-1) : setCurr(data.length-1)};
  const postHandler=()=>{setCurr((curr+1)%data.length )}
  // const postHandler=()=>{data ? setCurr((curr+1)%data.length) : setCurr(curr+1) }
  useEffect(()=>{
    if(data){
      const timer=setTimeout(() => {
        postHandler()
      }, 5000);
      return ()=>{clearTimeout(timer)}
    }
  },[data,curr])
  return (
    <div className='flex'>
      <button onClick={preHandler} >prev</button>
      {data ?
        data.map((d,index)=>(
          <li key={d.id} className={`${index===curr ? "visible" :"hidden" } w-screen justify-center h-[200px] flex bg-blue-300`}>
            
            <img src={d.image} alt=""  />
            
          </li>
        )):

        (<div>loading...</div>)
      }
      <button onClick={postHandler}>next</button>
    </div>
  )
}

export default App
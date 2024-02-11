import React, { useEffect, useState } from 'react'
import { quizData } from '../data'
const Quiz = ({ handler }) => {
    const [current, setCurrent] = useState(0);
    const [choice, setChoice] = useState(null);
    const [score, setScore] = useState(0);
    const [submit, setSubmit] = useState(false);

    const curr = localStorage.getItem("curr") ? localStorage.getItem("curr") : null;
    const val = localStorage.getItem("val") ? localStorage.getItem("val") : null;


    useEffect(() => {
        if (curr) {
            setCurrent(parseInt(curr));
            setScore(parseInt(val));
        }
    }, [])

    const chooseHandler = (text) => {
        setChoice(text)
    }

    const validate = () => {
        if (choice === quizData[current].correctAnswer) {
            setScore((prev) => prev + 1)
            localStorage.setItem("val", score + 1);
        }
        setChoice(null);
    }
    const nextHandler = () => {
        validate();

        if (!(current === quizData.length - 1)) {
            setCurrent((prev) => prev + 1)
            localStorage.setItem("curr", current + 1)
        } else {
            setSubmit(true)
            localStorage.clear();
        }


    }
    return (
        <div className='h-full mx-auto flex flex-col justify-center items-center  w-11/12 '>
            {submit ? (
                <div className='text-2xl flex flex-col justify-center items-center'>
                    <h2 className=' text-4xl  text-blue-500 font-extrabold'>Result</h2>
                    <div className='text-4xl font-semibold text-white'>Your score is <span className='text-green-500 font-semibold text-4xl'>{score}</span> Out of <span className='text-yellow-500 font-semibold text-4xl'>{quizData.length}</span></div>
                    {
                        score > 2 ? <div className=' text-amber-400 mt-2'>Well done! keep learning </div> : <div className='mt-2 text-center text-amber-400'>OOPS! Keep Trying </div>
                    }
                    <button onClick={() => handler(false)} className='border px-2 bg-blue-600 rounded-sm mt-4 text-white '>Back to Home</button>
                </div>
            ) : (<div>{
                quizData.map((data, index) => (
                    <div key={index} className={`${current === index ? `visible` : `hidden`}`}>
                        <div className='italic font-semibold text-blue-600'>Qusetion <span>{index + 1}:</span> {data.question}</div>
                        <div >
                            {data.options.map((d, index) => (
                                <div key={index} onClick={() => chooseHandler(d)} className={`${choice === d ? "bg-green-400 font-semibold " : ""} mt-2 border border-inherit px-4 cursor-pointer text-white `}>{d}</div>
                            ))}
                        </div>
                    </div>
                ))
            }</div>)}
            <div className={`${submit ? "hidden" : "visible"}`}>
                {
                    current === quizData.length - 1 ?
                        (<button onClick={nextHandler} className={`border px-2 bg-blue-500 rounded-sm mt-2 text-white`}>Submit</button>) :
                        (<button onClick={nextHandler} className=" border px-2 bg-blue-500 rounded-sm mt-2 text-white">Next</button>)
                }

            </div>
        </div>
    )
}

export default Quiz
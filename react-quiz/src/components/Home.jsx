import React from 'react'

const Home = ({ handler }) => {

    return (
        <>
            {
                localStorage.length ?
                    (
                        <>
                            <div className="flex flex-col items-center justify-center h-full ">
                                <h1 className="text-4xl font-bold mb-8 text-gray-100">Welcome Back</h1>
                                <p className="text-lg text-gray-50 mb-4">Let's complete Your pending Quiz test</p>
                                <button onClick={() => handler(true)} className="px-4 py-2  text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 bg-red-500">
                                    Let's go
                                </button>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <div className="flex flex-col items-center justify-center h-full ">
                                <h1 className="text-4xl font-bold mb-8 text-gray-100">Welcome to My QUIZ App</h1>
                                <p className="text-lg text-gray-50 mb-4">Here you learn by playing</p>
                                <button onClick={() => handler(true)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                    Get Started
                                </button>
                            </div>
                        </>
                    )
            }
        </>
    )
}

export default Home
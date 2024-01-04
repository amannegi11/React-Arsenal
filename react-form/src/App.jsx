import React, { useState } from 'react'

function App() {
  const [data, setData] = useState({ name: "", age: "", email: "" })

  const submitHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }
  const finalData = (e) => {
    e.preventDefault();
    console.log(data);
    setData({ name: "", age: "", email: "" })
  }
  return (
    <div>
      <form>
        <label>
          <div>name</div>
          <input
            required
            type="text"
            name='name'
            value={data.name}
            onChange={submitHandler} />
        </label>
        <label>
          <div>age</div>
          <input
            type="text"
            name='age'
            required
            value={data.age}
            onChange={submitHandler} />
        </label>
        <label>
          <div>email</div>
          <input
            type="email"
            name='email'

            value={data.email}
            onChange={submitHandler} />
        </label>

        <button onClick={finalData}>Submit</button>
      </form>
    </div>
  )
}

export default App
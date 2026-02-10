import { useState, useEffect } from 'react'
import './App.css'
import { api } from './services/api'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    api.get("/ml-test").then(res => {
      console.log(res.data);
    });
  }, []);

  return (
     <div>
      <h1>AI Career Assistant</h1>
    </div>
  )
}

export default App

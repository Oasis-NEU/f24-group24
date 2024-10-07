import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Home/Homepage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import ChangeTheme from './components/ChangeTheme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile />
      <Login />
      <ChangeTheme />
    </>
  )
}

export default App

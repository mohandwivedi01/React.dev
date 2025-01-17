import React, {useState} from 'react'
import './App.css'
import UserContextProvider from './context/UsercontextProvider'
import Profile from './components/Profile'
import Login from './components/Login'
import UserContext from './context/UserContext.js'

function App() {
  const [user, setUser] = useState(null);
  return (
      <UserContext.Provider value={{user, setUser}}>
        Hello React
        <Login />
        
        <Profile />
      </UserContext.Provider>
  )
}

export default App

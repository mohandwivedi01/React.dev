import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Counter from './components/counter'


function App() {

  return (
    <>
      <div class="flex justify-center items-center h-screen">
        {/* <Counter/> */}
        <Card userName="Mountains are the best place to get lost" img = "https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80" />
        <Card userName="Noteworthy technology acquisitions 2021" button="Read more"/>
        <Card userName="Looking for something different" img = "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" button="click me"/>
      </div>
    
    </>
  )
}

export default App

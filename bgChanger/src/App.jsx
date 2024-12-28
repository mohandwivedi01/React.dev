import { useState, useEffect, useRef} from 'react'

function App() {
  const [color, setColor] = useState("skyBlue")

  const prevColorRef = useRef(null); // Create a ref to store the previous value

  // Update the ref with the current value after each render
  useEffect(() => {
    prevColorRef.current = color;
  });

  const prevColor = prevColorRef.current; // Access the previous value


  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
            <div className='fixed flex flex-wrap justify-center inset-x-0 px-2 mt-20 text-4xl font-bold font-san' style={{color: prevColor}}>
              Bg Color Changer React App
            </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        
          <button onClick={()=>setColor("#FCC737")} className="oulitline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#FCC737"}}>Yellow</button>

          <button onClick={()=>setColor("#D2FF72")} className="oulitline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#D2FF72"}}>Lemon</button>

          <button onClick={()=>setColor("#73EC8B")} className="oulitline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#73EC8B"}}>Light Green</button>

          <button onClick={()=>setColor("#FF8383")} className="oulitline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#FF8383"}}>Pink</button>

          <button onClick={()=>setColor("#FB4141")} className="oulitline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#FB4141"}}>Red</button>

          <button onClick={()=>setColor("#8B5DFF")} className="oulitline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#8B5DFF"}}>Purple</button>

          <button onClick={()=>setColor("#3E7B27")} className="oulitline-none px-4 py-1 rounded-full text-white shadow-lg" style=
          {{backgroundColor: "#3E7B27"}}>Green</button>

          <button onClick={()=>setColor("#074799")} className="oulitline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#074799"}}>Blue</button>

          <button onClick={()=>setColor("#001F3F")} className="oulitline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#001F3F"}}>Dark Blue</button>

        </div>
      </div>      
    </div>

  )
}

export default App

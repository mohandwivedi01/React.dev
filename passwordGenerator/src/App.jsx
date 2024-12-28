import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [passLength, setPassLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    
    if(num) str += "0123456789";  
    if(num) str += "!@#$%^&*:;";

    for(let i=1; i <= passLength; i++){
      let char = Math.floor(Math.random() * str.length + 1); 

      pass += str.charAt(char) 
    }

    setPassword(pass)

  }, [passLength, num, char, setPassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,8) //we can define how many charaters we want to select
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[passLength, num, char, passwordGenerator])
  return(
  <div className='w-full h-screen bg-gray-800 flex items-center justify-center'>
    <div className='w-full max-w-md bg-gray-700 p-6 rounded-lg shadow-lg text-orange-500 '>
      <h2 className='text-2xl font-bold font-sans  text-center mb-4'>Password Generator</h2>
      <div className='flex shadow my-8'>
      <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3 rounded-md'
        placeholder='password' 
        readOnly
        ref={passwordRef}
      />
      <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-md'>
        Copy
      </button>
      </div>
      <div className='flex text-sm gap-x-3'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={32}
            value={passLength}
            className='cursor-pointer'
            onChange={(e) => {setPassLength(e.target.value) }}
          />
          <label>Length: {passLength}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={num}
            id="numberInput"
            onChange={()=>{
              setNum((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={char}
              id='characterInput'
              onChange={() => {
                setChar((prev)=> !prev);
              }}
            />
            <label htmlFor='charaterInput'>Characters</label>
        </div>
      </div>      
    </div>
  </div>

  )
}


export default App

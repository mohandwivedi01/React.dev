import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
            onChange={(e) => setUsername(e.target.value) }
            placeholder="username" />
            <br/>
            <br/>
            <input type="text" 
            onChange={(e) => setPassword(e.target.value) }
            placeholder="password" />
            <br/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
            
        </div>
    )
}

export default Login;
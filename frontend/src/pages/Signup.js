import React, { useState } from 'react'
import useSignup from '../hook/useSignup'

function Signup() {
    
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const {signup, error} = useSignup()
    

    const handleSignup = async (e) => {
        e.preventDefault()
       await signup(username, email, password)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

  return (
    <form className='signup' onSubmit={handleSignup}>
        <div className="signup-title">
            <h3>Signup</h3>
        </div>
        <div>
            <label>Username <i className="bi bi-person-circle"></i></label>
        </div>
        <div>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
            <label>Email <i className="bi bi-envelope"></i></label>
        </div>
        <div>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}  />
        </div>
        
        <div>
            <label>Password <i className="bi bi-shield-lock"></i></label>
        </div>
        <div>
            <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className='show-password' onClick={handleShowPassword}>Show Password</div>
        <button className='btn-submit' type='submit'>Submit <i className="bi bi-box-arrow-left"></i></button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Signup
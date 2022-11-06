import React, { useState } from 'react'
import useLogin from '../hook/useLogin'

function Login() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const {login, error} = useLogin()
    
    const handleLogin = async (e) => {
        e.preventDefault()
        await login(email, password)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

  return (
    <form className='signup' onSubmit={handleLogin}>
        <div className="signup-title">
            <h3>Login</h3>
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
            <input type={showPassword ? "text" : "password"} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className='show-password' onClick={handleShowPassword}>Show Password</div>
        <button className='btn-submit' type='submit'>Submit <i className="bi bi-box-arrow-left"></i></button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Login
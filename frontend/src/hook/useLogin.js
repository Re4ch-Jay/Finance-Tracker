import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import { useContext, useState } from 'react'

function useLogin() {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const {dispatch} = useContext(AuthContext)
    const url = "api/user/login"

    const login = async (email, password) => {
        await axios.post(url, {email, password})
            .then(res => {
                console.log(res.data)
                localStorage.setItem("user", JSON.stringify(res.data))
                dispatch({type: "LOGIN", payload: res.data})
                setError(null)
                navigate('/')
                
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.error)
            })
    }
  return {login, error}
}

export default useLogin
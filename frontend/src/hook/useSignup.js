import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

function useSignup() {
    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)
    const [error, setError] = useState(null)
    const url = "api/user/signup"

    const signup = async (username, email, password) => {
        await axios.post(url, {username, email, password})
        .then(res => {
            console.log(res.data)
            localStorage.setItem("user", JSON.stringify(res.data))
            dispatch({type: "LOGIN", payload: res.data})
            navigate('/')
        })
        .catch(err => {
            console.log(err)
            setError(err.response.data.error)
        })
    }
  return {signup, error}
}

export default useSignup
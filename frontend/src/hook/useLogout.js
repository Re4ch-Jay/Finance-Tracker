import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import {FinanceContext} from '../context/FinanceContext'

function useLogout() {
    const {dispatch: authDispatch} = useContext(AuthContext)
    const {dispatch: financeDispatch} = useContext(FinanceContext)

    const logout = () => {
        localStorage.removeItem("user")
        authDispatch({type:"LOGOUT"})
        financeDispatch({type: "SET_FINANCE", payload: null})
        
    }
  return {logout}
}

export default useLogout
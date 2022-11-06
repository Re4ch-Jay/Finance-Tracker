import React, { useContext, useState } from 'react'
import axios from 'axios'
import {FinanceContext} from '../context/FinanceContext'
import { AuthContext } from '../context/AuthContext'

function Form() {
    const [transaction, setTransaction] = useState('')
    const [amount, setAmount] = useState('')
    const [error, setError] = useState('')
    const {dispatch} = useContext(FinanceContext)
    const {user} = useContext(AuthContext)
    const url = "api/finance/"

    const addFinance = async (e) => {
        e.preventDefault()

        await axios.post(url, {transaction, amount}, {
            headers: {'Authorization': `Bearer ${user.token}`}
            })
            .then(res => {
                console.log(res.data)
                dispatch({type: "ADD_FINANCE", payload: res.data})
                setTransaction('')
                setAmount('')
                setError(null)
            })
            .catch(error => {
                console.log(error)
                setError(error.response.data.error)
            })
    }

  return (
    <form onSubmit={addFinance}>
        <div>
            <label>Transaction <i className="bi bi-bag"></i></label>
        </div>
        <div>
            <input type="text" value={transaction} onChange={e => setTransaction(e.target.value)} />
        </div>
        <div>
            <label>Amount <i className="bi bi-currency-dollar"></i></label>
        </div>
        <div>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        <div className='text-sample'>
            e.g. buy cafe - $5
        </div>
        <button className='btn-submit' type='submit'>Submit <i className="bi bi-plus-circle"></i></button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Form
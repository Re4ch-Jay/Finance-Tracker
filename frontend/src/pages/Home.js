import React, { useContext, useEffect, useState } from 'react'
import Form from '../components/Form'
import axios from 'axios'
import {formatDistanceToNow} from 'date-fns'
import { FinanceContext } from '../context/FinanceContext'
import { AuthContext } from '../context/AuthContext'
import SkeletonScreen from '../components/SkeletonScreen'

function Home() {
    const {finances, dispatch} = useContext(FinanceContext)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const {user} = useContext(AuthContext)
    const url = "api/finance/"

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(url, {
                headers: {'Authorization': `Bearer ${user.token}`}
            })
            .then(res => {
                console.log(res.data)
                dispatch({type: "SET_FINANCE", payload: res.data})
                setError(null)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setError("Failed to fetch the data")
                setIsLoading(false)
                dispatch({type: "SET_FINANCE", payload: null})
            })
        }   
        if(user) fetchData() 
    }, [dispatch, user]);

    const handleDelete = async (_id) => {
        await axios.delete(url + _id, {
            headers: {'Authorization': `Bearer ${user.token}`}
            })
            .then(res => {
                setIsLoading(false)
                setError(null)
                console.log(res.data)
                dispatch({type: "DELETE_FINANCE", payload: res.data})
            })
            .catch(err => {
                console.log(err)
                setError("Cannot delete")
                setIsLoading(null)
            })
    }

  return (
    <section className='home'>
        <div className='container '>
            <div className='text-title'>
                <h3>All finances data -  <i className="bi bi-person"></i> {user.user.username}</h3> 
            </div>
            {error && <div className='error'>{error}</div>}
            <div className="grid-container">
            {!error && <Form/>}
                <div>
                {isLoading && <div><SkeletonScreen/></div>}
                    {finances && finances.map(item => (
                        <div className="card" key={item._id}>
                            <div className="card-content">
                                <h4><i className="bi bi-bag"></i> {item.transaction}</h4>    
                                <p><strong className='date'>Date</strong>: {formatDistanceToNow(new Date(item.createdAt), {addSuffix: true})} </p>      
                            </div>
                            <div className='card-transaction'>
                                <h4>${item.amount}</h4>
                            </div>
                            <div className='card-action'>
                                <p className='btn' onClick={() => handleDelete(item._id)}>Delete <i className="bi bi-trash"></i></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
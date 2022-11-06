import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'
import useLogout from '../hook/useLogout'

function Navbar() {
    const {user} = useContext(AuthContext)
    const {toggleMode} = useContext(ThemeContext)
    const {logout} = useLogout()
  

  return (
    <nav>
        <div className='container'>
            <div className='grid-container'>
                <div>
                    <Link to="/">
                        <div className='logo' onClick={toggleMode}>
                        <i className="bi bi-bank"></i> Finance Tracker
                        </div> 
                    </Link>  
                    <div className='small'> 
                        {user && 
                            <li className='grid-container'>
                                <button onClick={logout} className='btn'>Logout <i className="bi bi-box-arrow-right"></i></button>
                            </li>
                        }
                        {!user && <li>
                            <Link to="/login">Login <i className="bi bi-box-arrow-left"></i></Link>
                        </li>}
                        {!user && <li>
                            <Link to="/signup">Signup</Link>
                        </li>}
                    </div>
                </div>
                <ul className='big'>
                    {!user && <li>
                        <Link to="/login">Login <i className="bi bi-box-arrow-left"></i></Link>
                    </li>}
                    {!user && <li>
                        <Link to="/signup">Signup</Link>
                    </li>}                
                    {user && 
                        <li>
                            <button onClick={logout} className='btn'>Logout <i className="bi bi-box-arrow-right"></i></button>
                        </li>
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
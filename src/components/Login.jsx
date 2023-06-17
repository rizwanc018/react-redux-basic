import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'

function Login() {
    const dispatch = useDispatch()
    return (
        <div>
            <button
                onClick={() => dispatch(login({
                    name: "tim",
                    age: 20,
                    email: "tim@tim.com"
                }))}
            >Login</button>
            <br />
            <button 
            onClick={() => dispatch(logout()) }
            >Logout</button>
        </div>
    )
}

export default Login
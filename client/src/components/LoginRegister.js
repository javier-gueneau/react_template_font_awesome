import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Login=()=>{
    const navigate=useNavigate()
    const {user,setUser}= useContext(UserContext)

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    
    const[error,setError]=useState('')

    const[loggedUser,setLoggedUser]=useState()

    const handleLogin=(e)=>{
        e.preventDefault();
        axios.post('/api/user/login',{
            "email":email,
            "password":password
        })
        .then((res)=>{
            if(!res.data.error){
                setError('')
                console.log('this is res LOGIN @LOGIN...', res.data)
                setUser(true)
                setLoggedUser(JSON.parse(sessionStorage.getItem('')))
                navigate('/')
                
            } else{
                console.log('this is THE ERROR')
                //alert('error')
                setError('there is an error in THEN')
            }
        })
        .catch((err)=>{
            console.log('this is error in CATCH....' , err.message)
            //alert('error')
            setError('Error in CATCH: Info doesnt match')
            //console.log( err)
        })
    }

    return(
        <div>

            <div className='navbar' >
                <Link to={'/login'} ><h1> My stocks</h1></Link>
                
            </div>

            <div className="login-div">
            <form onSubmit={handleLogin}  >
                <label htmlFor="email" >Email</label>
                <input type='text'id="email" onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="password" >Password</label>
                <input type='password'id="password" onChange={(e)=>setPassword(e.target.value)} />
                <button>Login</button>
            </form>

            <p className="error">
            {error} 
            </p>

            <Link to={'/register'} >Need an account? .. Register now!</Link>

            </div>

        </div>
    )
}

export default Login;
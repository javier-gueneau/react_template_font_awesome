import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register=()=>{
    const navigate  =useNavigate()

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')

    const[errorEmail,setErrorEmail]=useState('')

    const handleRegister=(e)=>{
        e.preventDefault();
        axios.post('/api/user/register',{
            "name":name,
            "email":email,
            "password":password,
            "confirmPassword":confirmPassword
        })
        .then((res)=>{
            console.log(res)
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div>

            <div className='navbar' >
                <Link to={'/register'} ><h1> My stocks</h1></Link>
                
            </div>


            <form onSubmit={handleRegister} >
            <label htmlFor="username" >username</label>
                <input type='text'id="username" onChange={(e)=>setName(e.target.value)} />
                <label htmlFor="email" >Email</label>
                <input type='text'id="email" onChange={(e)=>setEmail(e.target.value)}/>
                {errorEmail !=='' ? <p className="error-msg" >Error {errorEmail} </p>:'' }

                <label htmlFor="password" >Password</label>
                <input type='password'id="password" onChange={(e)=>setPassword(e.target.value)}/>
                <label htmlFor="confirmPassword" >Confirm Password</label>
                <input type='password'id="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <button>Register</button>
            </form>

            <Link to={'/login'} >Already have an account?</Link>
        </div>
    )
}

export default Register;
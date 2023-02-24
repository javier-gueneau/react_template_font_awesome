import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Stock from '../components/Stock';
import Resumen from '../components/Resumen';
/* 
import List from '../components/List'; */


const Register_screen=()=>{

    


  // 10 29 1 es mi app nueva , probando apis, calls, Register, Login, etc.

  const[title,setTitle]=useState('')

  const [username,setUsername]=useState('')
  
  const [password,setPassword]=useState('')
  const[confirmPassword,setConfirmPassword]=useState('')

  const [user,setUser]=useState('')

  const[email,setEmail]=useState('')
  const[error,setError]=useState('  ')

  const handleSubmit_async = async e =>{
    
  }

const handleSubmit=e=>{



    e.preventDefault()
    console.log('. . . . . . new run')
    //console.log('username ...', username)
    //console.log('email ....', email)
    //console.log('password ....', password)
    //console.log('confirm pwd ...', confirmPassword)

    // aqui hacer el axios Post de la info

    //esta info está en MERN SPANISH - Full Stack Mern
    // "Crear (Pt 2)"

    axios.post('http://localhost:8000/api/user/register',{
      name:username,
      email,
      password,
      confirmPassword
    })
        .then(res=>{
            console.log('this is res...', res)
            console.log('this is res.data...', res.data)
            //console.log('this is res.data...', res.data)
          //console.log('this is res.data.errors...', res.data.errors)
          //console.log('this is OBJECT VALUES ...', Object.values(res.data.errors)[0] )
          //console.log('this is OBJECT VALUES.name ...', Object.values(res.data.errors)[0].name )
          //console.log('this is OBJECT VALUES.message ...', Object.values(res.data.errors)[0].message )
          
          if(res.data.errors){
            console.log('in app.js ... in error...')
            setError(`There is an error : ${Object.values(res.data.errors)[0].message}` )
          }
          else if(res.data.code){
            setError('User or email already exists')
          }
          else{
            alert('user created')
            console.log('we are ok')
            setError('')
          }

        })
        .catch(err=>console.log(err))

}

//console.log('s')



    return(

        <div className="App">
            
        <h2> FORM </h2>

        <h2> Register Screen </h2>
  
      <p className='error' >{error} </p>
  
      <p className='error' >
          {error ? '':'' }
      </p>
  
  
        <form onSubmit={handleSubmit} >
          <div>
              <label>
                Name
                <input type='text' onChange={e=>setUsername(e.target.value)} />
              </label>
  
          </div>
          <div>
              <label>
                E-mail
                <input type='text' onChange={e=>setEmail(e.target.value)} />
              </label>
  
          </div>
          <div>
              <label>
                Password
                <input type='password' onChange={e=>setPassword(e.target.value)} />
              </label>
  
          </div>
          <div>
              <label>
                Confirm Password
                <input type='password' onChange={e=>setConfirmPassword(e.target.value)} />
              </label>
  
          </div>
          <button>Register me! </button>
        </form>
  
  
  <Link to='/login'> Login </Link>
  
        </div>



    )
}

export default Register_screen;

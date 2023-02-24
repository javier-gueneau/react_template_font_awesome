import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, Navigate, useNavigate, useNavigation } from 'react-router-dom';
import moment from 'moment';
import Stock from '../components/Stock';
import Resumen from '../components/Resumen';
/* 
import List from '../components/List'; */


const Login_screen=()=>{

    


  // 10 29 1 es mi app nueva , probando apis, calls, Register, Login, etc.

  const[title,setTitle]=useState('')

  const [username,setUsername]=useState('')
  
  const [password,setPassword]=useState('')
  const[confirmPassword,setConfirmPassword]=useState('')

  const [user,setUser]=useState('')

  const[email,setEmail]=useState('')
  const[error,setError]=useState('')

  const navigate=useNavigate()

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

    axios.post('http://localhost:8000/api/user/login',{
      email,
      password,
      
    })
        .then(res=>{
          console.log('this is res...', res)
          console.log('this is res.data JAVIER...', res.data)

          const users=res.data
          //localStorage.setItem('jwt',users.auth_token)
          localStorage.setItem('user',JSON.stringify(users))
          //localStorage.setItem('user',users.user.name)
          console.log('users is ....',users)
          console.log('users.user.name ....',users.user.name)

          setUser(users.user.name)


          //console.log('this is res.data...', res.data)
          //console.log('this is res.data.errors...', res.data.errors)
          //console.log('this is OBJECT VALUES ...', Object.values(res.data.errors)[0] )
          //console.log('this is OBJECT VALUES.name ...', Object.values(res.data.errors)[0].name )
          //console.log('this is OBJECT VALUES.message ...', Object.values(res.data.errors)[0].message )
          
          if(res.data.errors){
            console.log('in app.js ... in error...')
            setError(`hay un error estimado .... ${Object.values(res.data.errors)[0].message}` )
          }
          else{
            console.log('we are ok, we are in ELSE (of then)')
            setError('')
            navigate('/')
          }

        })
        .catch(err=>{
          console.log('this is ERR in LOGIN SCREEN...', err)
          //console.log('err.response.data.msg...', err.response.data.msg)
            
          if(err.response.data.msg){
              console.log('err.response.data.msg...', err.response.data.msg)
              setError(`${err.response.data.msg} `)
          }
          else if(err.message){
          console.log('err.message...', err.message)
          setError(`${err.message}`)

          }
          else{
            setError(`Error - invalid hook call , probably the NAVIGATION HOOK `)

          }


        } 
        )

}

//console.log('s')



    return(

        <div className="App">

        <h2> Login Screen </h2>
  
      <p className='error' >{error} </p>
  
      <p className='error' >
          {error ? '':'' }
      </p>
  
  
        <form onSubmit={handleSubmit} >
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
          
          <button>Login me </button>

        </form>

        <Link to='/register' > Register </Link>
  
  
        </div>



    )
}

export default Login_screen;

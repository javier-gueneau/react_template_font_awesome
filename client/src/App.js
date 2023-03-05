import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes, useNavigate, useNavigation } from 'react-router-dom';
import Register_screen from './screens/Register_screen';
import Login_screen from './screens/Login_screen';
import Dashboard_screen from './screens/Dashboard_screen';
import Cover from './cover/Cover';


function App() {


  // 10 29 1 es mi app nueva , probando apis, calls, Register, Login, etc.

  const[title,setTitle]=useState('')

  const [username,setUsername]=useState('')
  
  const [password,setPassword]=useState('')
  const[confirmPassword,setConfirmPassword]=useState('')

  const [user,setUser]=useState('')

  const[email,setEmail]=useState('')
  const[error,setError]=useState('no hay error ahora')

  const navigate=useNavigate()


const handleSubmit=e=>{



    e.preventDefault()
    console.log('. . . . . . new run')

    
    axios.post('http://localhost:8000/api/user/register',{
      name:username,
      email,
      password,
      confirmPassword
    })
        .then(res=>{
          console.log('this is res...', res)
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
            console.log('we are ok')
            setError('')
          }

        })
        .catch(err=>console.log(err))

}

//console.log('s')

  return (
    <div className="App">

         
          
          <Routes>
              
                <Route path='/login' element={<Login_screen/> } />

                <Route path='/register' element={<Register_screen/> } />

                <Route path='/dashboard' element={<Dashboard_screen/> } />
                <Route path='/' element={<Dashboard_screen/> } />


          </Routes>
      


      </div>
  );
}

export default App;

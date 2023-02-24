import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import moment from 'moment';
//import Stock from '../components/Stock';
//import Resumen from '../components/Resumen';
/* 
import List from '../components/List'; */


const CommentComponent=()=>{

  const [titleOfPost,setTitleOfPost]=useState('')
  const[post,setPost]=useState('')

    
  // 10 29 1 es mi app nueva , probando apis, calls, Register, Login, etc.
  

  const navigate=useNavigate()

  let userDetail=JSON.parse(localStorage.getItem('user'))


const handleClick=e=>{
  //e.preventDefault()
  //console.log('rr')
  console.log('userDetail is ...', userDetail)
  //console.log(userDetail.user)
  //console.log(userDetail.user.name)
}

const handleSubmit=e=>{
  e.preventDefault()
  console.log('this is handle submit ..... javier ')
  axios.post('http://localhost:8000/api/comment/create',{
    title:titleOfPost,
    comment:post,
    user:userDetail.user.name
  })
  .then(res=>{
    console.log('this is then , res ....', res)
    console.log('this is user - userDetail ... ', userDetail)
    console.log('this is user - userDetail-user-name ... ', userDetail.user.name)

    
    alert('alert testing')
    navigate('/')

  })

}


    return(

        <div className="comment">
            
<h3>
    This is comment 
</h3>


<form onSubmit={handleSubmit} >
          <div>
              <label>
                Title of Post
                <input type='text' onChange={e=>setTitleOfPost(e.target.value)} />
              </label>
  
          </div>
          <div>
              <label>
                Post
                <textarea  name="description" defaultValue=''  onChange={e=>setPost(e.target.value)}/>
              </label>
  
          </div>
 
 
          <button>Send Post </button>
        </form>


        </div>


    )
}

export default CommentComponent;

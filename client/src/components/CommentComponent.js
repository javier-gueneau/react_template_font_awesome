import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CommentComponent=({comments,setComments})=>{

  const [titleOfPost,setTitleOfPost]=useState('')
  const[post,setPost]=useState('')
  const navigate=useNavigate()
  let userDetail=JSON.parse(localStorage.getItem('user'))
  
const handleSubmit=e=>{
  e.preventDefault()
  console.log('this is handle submit ..... javier ')
  setComments([...comments, {
    title:titleOfPost,
    comment:post
  }])
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

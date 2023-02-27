import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CommentComponent from '../components/CommentComponent';
import List from '../components/List';

const Dashboard_screen=()=>{

  const navigate=useNavigate()
  const[comments,setComments]=useState([])

  let userDetail=JSON.parse(localStorage.getItem('user'))

  useEffect(()=>{
    axios.get('http://localhost:8000/api/comment/list')
    .then(res=>{
        console.log('did it - use effect get ')
        console.log('this is res', res)
        console.log('this is res.data....', res.data)
        setComments(res.data)
    })
},[])

  const handle_action=e=>{
    e.preventDefault()
    console.log('this is action button , y comments', comments)
  }

    return(

        <div className="App">
            
            <button onClick={e=>handle_action(e)} >action</button>
            <CommentComponent comments={comments} setComments={setComments} />
            <List comments={comments} setComments={setComments} />
      
        </div>

    )
}

export default Dashboard_screen;

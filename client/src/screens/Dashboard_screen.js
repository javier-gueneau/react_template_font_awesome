import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CommentComponent from '../components/CommentComponent';
import List from '../components/List';
import Image_component from '../Image_component/Image_component';
import FontAwesome from 'react-fontawesome'
import ReactDom from 'react-dom'


// Import Projects
import stock_3 from '../img_mystocks/stock_3.png'
import stock_4 from '../img_mystocks/stock_4.png'
import stock_5 from '../img_mystocks/stock_5.png'

// Import Background Img
import zurich_pexels from '../pexels/zurich_pexels.jpeg';

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

const back_to_cover=e=>{
  e.preventDefault()
  console.log('back to cover')
  navigate('/')
}

    return(

        <div className="App">




            <h1>javier gueneau</h1>
            <button onClick={e=>handle_action(e)} >action</button>
            <button onClick={e=>back_to_cover(e)} >back to cover</button>

{/*             <img src={zurich_pexels} alt='stock_3'  />
 */}
            <div className='iconos' >
                    <Image_component/>
                
                
                
                

            </div>

            <img src={stock_3} alt='stock_3' width='400px' />
            <img src={stock_4} alt='stock_4' width='400px' />
            <img src={stock_5} alt='stock_5' width='400px' />
      
        </div>

    )
}

export default Dashboard_screen;

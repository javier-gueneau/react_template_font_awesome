import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const List=()=>{

    const[comments,setComments]=useState([])
    
    // Probando apis, calls, Register, Login, etc.

    const navigate=useNavigate()

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

    return(

        <div className="list">
            
            <h3>List</h3>

            <table className='list-table' >
                <thead>
                    <tr>
                        <th>Item Title</th>
                        <th>Item Comment</th>
                        <th>Item User</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((item,i)=>{
                        return(
                            <tr key={i} >
                                <th>{item.title}</th>
                                <th>{item.comment}</th>
                                <th>{item.user}</th>
                            </tr>

                        )
                    })}
                </tbody>
            </table>

            <ul>
            {comments.map((item,i)=> {
                return(
                    <li key={i} >{item.title}</li>
                )
            })}
            </ul>

        </div>

    )
}

export default List;

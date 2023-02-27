import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const List=({comments,setComments})=>{
    
    const navigate=useNavigate()

    let userDetail=JSON.parse(localStorage.getItem('user'))

    const handle_delete=(e,i,item,_id)=>{
        e.preventDefault()

        let prueba=[...comments]
        let array=prueba.splice(i.i,1)
        console.log('item:', item.item._id)
        setComments(prueba)

        axios.delete(`http://localhost:8000/api/comment/${item.item._id}`)
          .then(res=>{
            console.log('this is then , res ....', res)
            
            alert('alert testing')
            navigate('/')
        
          })

    }

    return(

        <div className="list">
            
            <h3>List</h3>

            <table className='list-table' >
                <thead>
                    <tr>
                        <th>Item index</th>
                        <th>Item id</th>
                        <th>Item Title</th>
                        <th>Item Comment</th>
                        <th>Item User</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((item,i)=>{
                        return(
                            <tr key={i} >
                                <th>{i}</th>
                                <th>{item._id}</th>
                                <th>{item.title}</th>
                                <th>{item.comment}</th>
                                <th>{item.user}</th>
                                <th><button onClick={e=>handle_delete(e,{i},{item})} >Delete</button> </th>
                            </tr>

                        )
                    })}
                </tbody>
            </table>

        </div>

    )
}

export default List;

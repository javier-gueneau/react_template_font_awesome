import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Add =()=>{
    
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const[amount,setAmount]=useState('');
    const[price,setPrice]=useState('');
    const[purchaseDate,setPurchaseDate]=useState('');
    const [error,setError]=useState('');

    const handleSubmit=e=>{
        e.preventDefault();
        //console.log('activado handle Submit');
        //console.log(nombre);
        axios.post('http://localhost:8000/api/invest/create',{
        //axios.post('/api/invest/create',{
                name:name,
            amount:amount,
            price:price,
            purchaseDate:purchaseDate
        })
        .then(res=>{
            console.log(res);
            if(res.data.errors){
                console.log('res data errors....', res.data.errors)
                setError(res.data.errors)
            }
            else{navigate('/')} 

        })
    }

    const backto=E=>{
        navigate('/')
    }
    
    return(
        <div className="App-add">

            <div className='navbar'>
                <Link to={'/'} > <h3>My stocks</h3> </Link>
                <h1>Add Purchase</h1>
            </div>
            
            <div className='main-add'>

                <form onSubmit={handleSubmit} className="add-form" >
                    <label>Choose a stock: </label>
                    <select name="stock name" onChange={(e)=>setName(e.target.value)} >
                        <option >...</option>
                        <option value="voo">VOO</option>
                        <option value="arkk" >ARKK</option>
                        <option value="btc">BTC</option>
                    </select>

                    <label>Amount  (US):
                        <input type="text" onChange={(e)=>setAmount(e.target.value)} />
                    </label>
                    <label>Price (US):
                        <input type="text" onChange={(e)=>setPrice(e.target.value)} />
                    </label>
                    <label>Purchase Date:
                        <input type="date" onChange={(e)=>setPurchaseDate(e.target.value)} />
                    </label>
                    <br/>

                    {error!='' ? <p className='error'> All values are required. </p> : null }

                    <button>Add Purchase</button>
                    <button onClick={backto} className='cancel-button' >Cancel</button>
                </form>

            </div>
        
        </div>

    )
}

export default Add;

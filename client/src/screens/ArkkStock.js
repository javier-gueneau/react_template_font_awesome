import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Stock from '../components/Stock';
import Resumen from '../components/Resumen';
/* 
import List from '../components/List'; */


const ArkkStock=()=>{

    const [stocks,setStocks]=useState([]);
   
    const [arkk,setArkk]=useState([]);
    const[sumOfArkk,setSumOfArkk]=useState(0);
    const[ArkkStocks,setArkkStocks]=useState(0);
    const[arkkCurrentValue,setArkkCurrentValue]=useState(45);

    useEffect(()=>{
      axios.get('http://localhost:8000/api/invest/list')
      //axios.get('/api/invest/list')
      .then(res=>{
            //console.log('this is res.....', res.data)
            const arkk_temp=[]
           res.data.forEach((purchase)=>{
              if(purchase.name==="arkk"){
                arkk_temp.push(purchase)
              }
            })
            setArkk(arkk_temp)
            //console.log(arkk_temp)
            
            //total balance

            let arkk_sum_temp=0
            let number_stocks_arkk_temp=0
            for (let i=0; i<arkk_temp.length;i++){
              arkk_sum_temp+=arkk_temp[i].amount
              number_stocks_arkk_temp+=(arkk_temp[i].amount/arkk_temp[i].price)
            }
            setSumOfArkk(arkk_sum_temp);
            setArkkStocks(Math.round(number_stocks_arkk_temp*100)/100);
            
            })

            axios.get('http://localhost:8000/api/value/list')
            //axios.get('/api/value/list')
            .then(res=>{
              //console.log('axios get value list....',  res)
              //console.log('axios get res.data...',  res.data)
              const arkk_value_temp=[]
                res.data.forEach((purchase)=>{
                  if(purchase.name==="arkk"){
                    arkk_value_temp.push(purchase.value)
                  }
                })
                setArkkCurrentValue(arkk_value_temp)
                //console.log('arkk value temp....', arkk_value_temp)
            })



      },[]) 

      const handleSubmit=e=>{
        e.preventDefault();
        console.log(arkkCurrentValue)
        axios.put(`http://localhost:8000/api/value/6324af7d088d2f020eda3fea`,{
        //axios.put(`/api/value/6324af7d088d2f020eda3fea`,{
            name:'arkk',
          value:arkkCurrentValue
        })
        .then(res=>{
          console.log('this is AXIOS PUT RES .....', res)
        })
      }

      const remove=(s,id)=>{
        console.log('Removing')
        
        axios.delete(`http://localhost:8000/api/invest/${id}`)
        //axios.delete(`/api/invest/${id}`)
        .then(res=>{
            if(!res.data.error){
              axios.get('http://localhost:8000/api/invest/list')
              //axios.get('/api/invest/list')
              .then(res=>{
                  const arkk_temp=[]
                  res.data.forEach((purchase)=>{
                    if(purchase.name==="arkk"){
                      arkk_temp.push(purchase)
                    }
                  })
                    setArkk(arkk_temp)

                    let arkk_sum_temp=0
                    let number_stocks_arkk_temp=0
                    for (let i=0; i<arkk_temp.length;i++){
                      arkk_sum_temp+=arkk_temp[i].amount
                      number_stocks_arkk_temp+=(arkk_temp[i].amount/arkk_temp[i].price)
                    }
                    setSumOfArkk(arkk_sum_temp);
                    setArkkStocks(Math.round(number_stocks_arkk_temp*100)/100);
                    
                })
            }
            else{
                console.log('Error');
            }            
            })
      }

    return(
        <div className="App">

          <div className='navbar'>
              <Link to={'/'} > <h1>My stocks</h1></Link>
              <p>Purchases in ARKK</p>
              <Link to={'/new'} > <p>+ Add purchase</p> </Link>
          </div>

          <div className='main'>
              <Stock title={"ARKK"} stocks={arkk} remove={remove} sumOfAsset={sumOfArkk}/>
              <h3>Resumen</h3>
              <Resumen  sumOfVoo={sumOfArkk} VooStocks={ArkkStocks} vooCurrentValue={arkkCurrentValue} />

              <form onSubmit={handleSubmit} className='current-value-form'>
                  <label>Enter current value:
                    <input type="text" onChange={(e)=>setArkkCurrentValue(e.target.value) } />
                  </label>
                  <button>OK</button>
              </form> 
          </div>

        </div>
    )
}

export default ArkkStock;

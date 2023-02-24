import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Stock from '../components/Stock';
import Resumen from '../components/Resumen';
/* 
import List from '../components/List'; */


const VooStock=()=>{

    const [stocks,setStocks]=useState([]);
    const [voo,setVoo]=useState([]);
   
    const[sumOfVoo,setSumOfVoo]=useState(0);
   
    const[VooStocks,setVooStocks]=useState(0);


    const[vooCurrentValue,setVooCurrentValue]=useState(375);
    
    useEffect(()=>{
      axios.get('http://localhost:8000/api/invest/list')
      //axios.get('/api/invest/list')
      .then(res=>{
            //console.log('this is res data.....', res.data)
            const voo_temp=[]
           
            res.data.forEach((purchase)=>{
              if(purchase.name==="voo"){
                voo_temp.push(purchase)
              }
            })
            setVoo(voo_temp)
            //console.log('voo temp is ....',  voo_temp)
            
            //total balance Voo-1

            let voo_sum_temp=0
            let number_stocks_voo_temp=0
            for (let i=0; i<voo_temp.length;i++){
              voo_sum_temp+=voo_temp[i].amount
              number_stocks_voo_temp+=(voo_temp[i].amount/voo_temp[i].price)
            }
            setSumOfVoo(voo_sum_temp);
            setVooStocks(number_stocks_voo_temp.toFixed(2)); 
            })

            axios.get('http://localhost:8000/api/value/list')
            //axios.get('/api/value/list')
            .then(res=>{
              //console.log('axios get value list....',  res)
              //console.log('axios get res.data...',  res.data)
              const voo_value_temp=[]
                res.data.forEach((purchase)=>{
                  if(purchase.name==="voo"){
                    voo_value_temp.push(purchase.value)
                  }
                })
                setVooCurrentValue(voo_value_temp)
                //console.log('voo value temp....', voo_value_temp)
            })




      },[]) 

      const handleSubmit=e=>{
        e.preventDefault();
        console.log(vooCurrentValue)
        axios.put(`http://localhost:8000/api/value/6324adfb46046c90f65a8cf2`,{
        //axios.put(`/api/value/6324adfb46046c90f65a8cf2`,{
            name:'voo',
          value:vooCurrentValue
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
                    //console.log(res)
                    const voo_temp=[]
                    res.data.forEach((purchase)=>{
                      if(purchase.name==="voo"){
                        voo_temp.push(purchase)
                      }
                    })
                    setVoo(voo_temp)

                    let voo_sum_temp=0
                    let number_stocks_voo_temp=0
                    for (let i=0; i<voo_temp.length;i++){
                      voo_sum_temp+=voo_temp[i].amount
                      number_stocks_voo_temp+=(voo_temp[i].amount/voo_temp[i].price)
                    }
                    setSumOfVoo(voo_sum_temp);
                    setVooStocks(Math.round(number_stocks_voo_temp*100)/100); 
                    
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
              <Link to={'/'} > <h1>My stocks.</h1></Link>
              <p>Purchases in VOO</p>
              <Link to={'/new'} > <p>+ Add purchase</p> </Link>
          </div>

          <div className='main'>
              <Stock title={"VOO"} stocks={voo} remove={remove} sumOfAsset={sumOfVoo} handleSubmit={handleSubmit}/>
              <h3>Resumen</h3>
              <Resumen  sumOfVoo={sumOfVoo} VooStocks={VooStocks} vooCurrentValue={vooCurrentValue} setVooCurrentValue= {setVooCurrentValue}/>

              <form onSubmit={handleSubmit} className='current-value-form'>
                  <label>Enter current value:
                    <input type="text" onChange={(e)=>setVooCurrentValue(e.target.value) } />
                  </label>
                  <button>OK</button>
              </form> 
          </div>

        </div>
    )
}

export default VooStock;

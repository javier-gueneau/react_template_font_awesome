import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Stock from '../components/Stock';
import Resumen from '../components/Resumen';
/* 
import List from '../components/List'; */


const BtcStock=()=>{

    const [btc,setBtc]=useState([]);
    const[sumOfBtc,setSumOfBtc]=useState(0);

    const[BtcStocks,setBtcStocks]=useState(0);

    const[btcCurrentValue,setBtcCurrentValue]=useState(19500);

    useEffect(()=>{
      axios.get('http://localhost:8000/api/invest/list')
      //axios.get('/api/invest/list')
      .then(res=>{
            //console.log('this is res.....', res.data)
            const btc_temp=[]
            res.data.forEach((purchase)=>{
              if(purchase.name==="btc"){
                btc_temp.push(purchase)
              }
            })
            setBtc(btc_temp)
            //console.log(btc_temp)
            
            //total balance 

            let btc_sum_temp=0
            let number_stocks_btc_temp=0
            for (let i=0; i<btc_temp.length;i++){
              btc_sum_temp+=btc_temp[i].amount
              number_stocks_btc_temp+=(btc_temp[i].amount/btc_temp[i].price)
            }
            setSumOfBtc(btc_sum_temp);
            setBtcStocks(number_stocks_btc_temp.toFixed(2));
            
            })

            axios.get('http://localhost:8000/api/value/list')
            //axios.get('/api/value/list')
            .then(res=>{
              //console.log('axios get value list....',  res)
              //console.log('axios get res.data...',  res.data)
              const btc_value_temp=[]
                res.data.forEach((purchase)=>{
                  if(purchase.name==="btc"){
                    btc_value_temp.push(purchase.value)
                  }
                })
                setBtcCurrentValue(btc_value_temp)
                //console.log('btc value temp....', btc_value_temp)
            })

      },[]) 

      const handleSubmit=e=>{
        e.preventDefault();
        //console.log(btcCurrentValue)
        axios.put(`http://localhost:8000/api/value/6324e5fb2694342e4ce03815`,{
        //axios.put(`/api/value/6324e5fb2694342e4ce03815`,{
            name:'btc',
          value:btcCurrentValue
        })
        .then(res=>{
          console.log('this is AXIOS PUT RES .....', res)
        })
      }

      const remove=(s,id)=>{
        //console.log('Removing')
        
        axios.delete(`http://localhost:8000/api/invest/${id}`)
        //axios.delete(`/api/invest/${id}`)
        .then(res=>{
            if(!res.data.error){
              axios.get('http://localhost:8000/api/invest/list')
              //axios.get('/api/invest/list')
              .then(res=>{
                    //console.log(res)
                    const btc_temp=[]
                    res.data.forEach((purchase)=>{
                      if(purchase.name==="btc"){
                        btc_temp.push(purchase)
                    }})
                    setBtc(btc_temp)
                
                    let btc_sum_temp=0
                    let number_stocks_btc_temp=0
                    for (let i=0; i<btc_temp.length;i++){
                      btc_sum_temp+=btc_temp[i].amount
                      number_stocks_btc_temp+=(btc_temp[i].amount/btc_temp[i].price)
                    }
                    setSumOfBtc(btc_sum_temp);
                    setBtcStocks(number_stocks_btc_temp.toFixed(2));
                    
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
              <p>Purchases in BTC</p>
              <Link to={'/new'} > <p>+ Add purchase</p> </Link>
          </div>

          <div className='main'>
              <Stock title={"BTC"} stocks={btc} remove={remove} sumOfAsset={sumOfBtc}/>
              <h3>Resumen</h3>
              <Resumen sumOfVoo={sumOfBtc} VooStocks={BtcStocks} vooCurrentValue={btcCurrentValue} />
        
              <form onSubmit={handleSubmit} className='current-value-form' >
                  <label>Enter current value:
                    <input type="text" onChange={(e)=>setBtcCurrentValue(e.target.value) } />
                  </label>
                  <button>OK</button>
              </form> 
          </div>  

        </div>
    )
}

export default BtcStock;

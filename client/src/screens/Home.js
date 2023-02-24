import axios from 'axios';
import React,{useState,useEffect, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
/* 
import List from '../components/List'; */
import Stock from '../components/Stock'
import { UserContext } from '../context/userContext';


const Home =()=>{

    //const navigate=useNavigate()
    //const {user,setUser} =useContext(UserContext)

    const [stocks,setStocks]=useState([]);
    const [voo,setVoo]=useState([]);
    const [arkk,setArkk]=useState([]);
    const [btc,setBtc]=useState([]);
    const[sumOfVoo,setSumOfVoo]=useState(0);
    const[sumOfArkk,setSumOfArkk]=useState(0);
    const[sumOfBtc,setSumOfBtc]=useState(0);

    const[VooStocks,setVooStocks]=useState(0);
    const[ArkkStocks,setArkkStocks]=useState(0);
    const[BtcStocks,setBtcStocks]=useState(0);


    const[vooCurrentValue,setVooCurrentValue]=useState(375);
    const[arkkCurrentValue,setArkkCurrentValue]=useState(45);
    const[btcCurrentValue,setBtcCurrentValue]=useState(19500);
    
    
    
    useEffect(()=>{
      //console.log('HOME - USER IS ......',user)
      //console.log('HOME - USERCONTEXT IS ......',UserContext)
      if(1==1){
      //if(true==true){

          axios.get('http://localhost:8000/api/invest/list')
          //axios.get('/api/invest/list')
          .then(res=>{
              //console.log('this is res.....', res.data)
              //console.log('this is RES ..........', res)
              
              const voo_temp=[]
              const arkk_temp=[]
              const btc_temp=[]
              res.data.forEach((purchase)=>{
                if(purchase.name==="voo"){
                  voo_temp.push(purchase)
                } else if (purchase.name==="arkk"){
                  arkk_temp.push(purchase)
                } else if (purchase.name==="btc") {
                  btc_temp.push(purchase)
                }
              })
              setVoo(voo_temp)
              setArkk(arkk_temp)
              setBtc(btc_temp)
              //console.log('btc temp', btc_temp)
              
              //total balance Voo-1
  
              let voo_sum_temp=0
              let number_stocks_voo_temp=0
              for (let i=0; i<voo_temp.length;i++){
                voo_sum_temp+=voo_temp[i].amount
                number_stocks_voo_temp+=(voo_temp[i].amount/voo_temp[i].price)
              }
              setSumOfVoo(voo_sum_temp);
              //console.log(suma_temp)
              setVooStocks(Math.round(number_stocks_voo_temp*100)/100);
  
              //total balance Arkk-2
  
              let arkk_sum_temp=0
              let number_stocks_arkk_temp=0
              for (let i=0; i<arkk_temp.length;i++){
                arkk_sum_temp+=arkk_temp[i].amount
                number_stocks_arkk_temp+=(arkk_temp[i].amount/arkk_temp[i].price)
              }
              setSumOfArkk(arkk_sum_temp);
              //console.log(suma_temp)
              setArkkStocks(Math.round(number_stocks_arkk_temp*100)/100);
  
              //total balance Btc-3
  
              let btc_sum_temp=0
              let number_stocks_btc_temp=0
              for (let i=0; i<btc_temp.length;i++){
                btc_sum_temp+=btc_temp[i].amount
                number_stocks_btc_temp+=(btc_temp[i].amount/btc_temp[i].price)
              }
              setSumOfBtc(btc_sum_temp);
              //console.log(suma_temp)
              setBtcStocks(Math.round(number_stocks_btc_temp*100)/100);
              //console.log('math round btc temp...',  Math.round(number_stocks_btc_temp*100)/100)
              //console.log('btc temp To Fixed...',  number_stocks_btc_temp.toFixed(3))
              //setStocks(res.data)
  
            })

            //ahora cerré ahi el Azul-Morado del primer axios Get - Invest List

  
            axios.get('http://localhost:8000/api/value/list')
            //axios.get('/api/value/list')
            .then(res=>{
                  //console.log('this is res.....', res.data)
                  const voo_value_temp=0
                  const arkk_value_temp=0
                  const btc_value_temp=0
  
                  //console.log('axios get value list ........'  ,res)
                  
                  res.data.forEach((purchase)=>{
                    if(purchase.name==="voo"){
                      setVooCurrentValue(purchase.value)
                    } else if (purchase.name==="arkk"){
                      setArkkCurrentValue(purchase.value)
                    } else if (purchase.name==="btc") {
                      setBtcCurrentValue(purchase.value)
                    }
                  })
                  /* setVooCurrentValue(voo_value_temp)
                  setArkkCurrentValue(arkk_value_temp)
                  setBtcCurrentValue(btc_value_temp)
                  console.log('btc temp', btc_value_temp) */
  
                })

                //cierra Then.. y Get Value
              //cierra ... Antes estaba aqui el Azul y Morado del primer Then y Get - Invest List

            } 
            //else {
              
              //navigate('/login')
            //}

//ahi ... porque el IF y ELSE está DENTRO del USe-Effect....

          },[])
  
      const handleSubmit=e=>{
        e.preventDefault();
      }
      
      const remove=(s,id)=>{
        console.log('Removing')
        
        /* axios.delete(`http://localhost:8000/api/invest/${id}`)
        .then(res=>{
            if(!res.data.error){
                axios.get('http://localhost:8000/api/invest/list')
                .then(res=>{
                    //console.log(res)
                    setStocks(res.data) 
                })
            }
            else{
                console.log('Error');
            }            
            }) */
      }

    return(
      <div className="App">

        <div className='navbar' >
            <Link to={'/'} ><h1> My stocks</h1></Link>
            <Link to={'/new'} ><p> + Add purchase</p></Link>
            {/* <Link to={'/login'} ><p> Log Out</p></Link> */}
            
        </div>
        
        <div className='main'>
          <table className='home-table'>
              <thead>
                  <tr>
                      <th>Stock name</th>
                      <th>Current Value (US)</th>
                      <th>Amount Invested (US)</th>
                      <th>Balance in Stocks</th>
                      <th>Balance (US)</th>
                      <th>You've Earned (US) </th>
                  </tr>
              </thead>
              <tbody>
                  <tr> 
                          <td><Link to={'/voo'} >VOO</Link></td>  
                          <td> <Link to={'/voo'}> {vooCurrentValue} </Link></td>  
                          <td>{sumOfVoo}</td>  
                          <td>{VooStocks}</td>  
                          <td> {(VooStocks*vooCurrentValue).toFixed(2)}</td>  
                          <td>{Math.round((VooStocks*vooCurrentValue-sumOfVoo)*1000)/1000}</td>  
                      </tr>
                      <tr> 
                          <td><Link to={'/arkk'} >ARKK</Link></td>  
                          <td><Link to={'/arkk'}>{arkkCurrentValue}</Link></td>  
                          <td>{sumOfArkk}</td>  
                          <td>{ArkkStocks}</td>  
                          <td> {(ArkkStocks*arkkCurrentValue).toFixed(2)}</td>  
                          <td>{Math.round((ArkkStocks*arkkCurrentValue-sumOfArkk)*1000)/1000} </td>  
                      </tr>
                      <tr> 
                          <td><Link to={'/btc'} >BTC</Link></td>  
                          <td><Link to={'/btc'}>{btcCurrentValue} </Link></td>  
                          <td>{sumOfBtc}</td>  
                          <td>{BtcStocks}</td>  
                          <td> {(BtcStocks*btcCurrentValue).toFixed(2)}</td>  
                          <td>{Math.round((BtcStocks*btcCurrentValue-sumOfBtc)*1000)/1000}</td>  
                      </tr>
                      <tr> 
                          <td>Total Balance</td>  
                          <td>- </td>  
                          <td>{sumOfVoo+sumOfArkk+sumOfBtc}</td>  
                          <td>-</td>  
                          <td> {(VooStocks*vooCurrentValue+ArkkStocks*arkkCurrentValue+BtcStocks*btcCurrentValue).toFixed(2 )}</td>  
                          <td>{((VooStocks*vooCurrentValue-sumOfVoo)+(ArkkStocks*arkkCurrentValue-sumOfArkk)+(BtcStocks*btcCurrentValue-sumOfBtc)).toFixed(2)}</td>  
                      </tr>
              </tbody>
          </table>
        </div>

      </div>
              
    )
}

export default Home;

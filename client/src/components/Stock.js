import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
/* 
import List from '../components/List'; */


const Stock=({title,stocks,remove,sumOfAsset})=>{

    const [sumOfStocks_stocks,setSumOfStocks_stocks]=useState(0)

    /* let asset_sum_temp=0
    for (let i=0; i<stocks.length;i++){
      asset_sum_temp+=stocks[i].amount
    }
    setSumOfStocks_stocks(asset_sum_temp); */



return(
        <div className="App">

            {/* <h1>Purchases {title} </h1> */}

            <table className='home-table' >
                <thead>
                    <tr>
                        <th>Purchase Date</th>
                        <th>Amount (USD)</th>
                        <th>Price (USD) </th>
                        <th>Stocks</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((j,i)=>(
                        <tr key={i}> 
                            <td>{moment(j.purchaseDate).format("MMM Do YY")} </td>  
                            <td>{j.amount} </td>  
                            <td>{j.price} </td>  
                            <td>{(j.amount/j.price).toFixed(2)} </td>  
                            <td><button onClick={e=>remove(i,j._id)}>Remove</button> </td>  
                        </tr>
                    ))}
                </tbody>
                

            </table>

        </div>
    )
}

export default Stock;

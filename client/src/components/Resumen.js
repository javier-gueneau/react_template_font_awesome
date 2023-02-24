import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
/* 
import List from '../components/List'; */


const Resumen=(sumOfVoo)=>{

    //console.log('this is sum of voo , in resumen .....', sumOfVoo)
    //console.log('this is VOO STOCKS in resumen .....', VooStocks)

return(
        <div className="App">

<table className='home-table' >
                <thead>
                    <tr>
                        <th>Current Value</th>
                        <th>Amount invested (USD)</th>
                        <th>Balance in stocks</th>
                        <th>Balance (USD)</th>
                        <th>You've Earned (US)</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr > 
                            <td>{sumOfVoo.vooCurrentValue} </td>  
                            <td>{sumOfVoo.sumOfVoo} </td>  
                            <td>{sumOfVoo.VooStocks} </td>  
                            <td>{(sumOfVoo.VooStocks*sumOfVoo.vooCurrentValue).toFixed(2)} </td>  
                            <td>{(sumOfVoo.VooStocks*sumOfVoo.vooCurrentValue-sumOfVoo.sumOfVoo).toFixed(2)} </td>  
                        </tr>
                </tbody>
                

            </table>
</div>
    )
}

export default Resumen;

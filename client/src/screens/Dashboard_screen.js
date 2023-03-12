import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />


const prueba_html=<i class="fa-brands fa-html5"/>
const prueba_html_grande=<i class="fa-brands fa-html5 fa-10x" />

const Dashboard_screen=()=>{
  
  const handle_action=e=>{
    e.preventDefault()
    console.log('this is action button , y comments')
  }

  return(

        <div className="App">

            <h1>javier gueneau</h1>
            <button onClick={e=>handle_action(e)} >action</button>
            
            
            


            <div className='back_pink' >
              <p>abajo element entre llaves. Se llama un elemento que usa Font Awesome component (version React) </p>
              <p> ... que no me funciona mucho, porque </p>
              {element}
            </div>

            <div className='back_green'>
              <p>este funciona. Esto es HTML tambien. i class.</p>
              <i class="fa-solid fa-mug-hot"></i>
            </div>

            <div className='back_pink' >
              <p>esto es prueba HTML , para font awesome </p>
              {prueba_html}

            </div>

            <div className='back_green' >
              <p>prueba HTML grande</p>
              {prueba_html_grande}
            </div>

        </div>

    )
}

export default Dashboard_screen;

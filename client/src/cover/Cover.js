import { useNavigate } from "react-router-dom"

const Cover=()=>{

const navigate=useNavigate()


const handle_click=e=>{
    e.preventDefault()
    console.log('en cover')
    navigate('/dashboard')
}


    return(
        <div>
<button onClick={e=>handle_click(e)} >go to dashboard</button>
        </div>
    )
}

export default Cover
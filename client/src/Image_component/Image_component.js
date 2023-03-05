
//import iconos
import css_4 from '../iconos/css_4.png'
import ex_2 from '../iconos/ex_2.png'
import git_ from '../iconos/git_.png'
import github_black from '../iconos/github_black.png'
import html_black from '../iconos/html_black.png'
import js_black from '../iconos/js_black.png'
import mongodb_black from '../iconos/mongodb_black.png'
import node_4 from '../iconos/node_4.png'
import postman_black from '../iconos/postman_black.png'
import react_black from '../iconos/react_black.jpg'
import n1_html_no_back from '../icons_no_background/n1_html_no_back.png'
import n2_css_no_back from '../icons_no_background/n2_css_no_back.jpg'
import FontAwesome from 'react-fontawesome'


const Image_component=({image})=>{
    return(
        <div className='iconos_in' >

            <div className='icons_each' >
                <img className='img_tec' src={n1_html_no_back} alt='html_black' />
                <p>HTML 5</p>
            </div>
            <div className='icons_each'  >
                <img className='img_tec' src={n2_css_no_back} alt='css_4' />
                <p>CSS 3</p>
            </div>
            <div className='icons_each' >
                <img className='img_tec' src={js_black} alt='js_black' />
                <p>Javascript</p>
            </div>
            <div className='icons_each' >
                <img className='img_tec' src={react_black} alt='react_black' />
                <p>React</p>
            </div>
            <div className='icons_each' >
                <img className='img_tec' src={node_4} alt='node_4' />
                <p>Node JS</p>
            </div>
            <div className='icons_each' >
                <img className='img_tec' src={mongodb_black} alt='mongodb_black' />
                <p>MongoDB</p>
            </div>
            
            <div className='icons_each' >
                <img className='img_tec' src={postman_black} alt='postman_black' />
                <p>Postman</p>
            </div>
            <div className='icons_each' >
                <img className='img_tec' src={github_black} alt='github_black' />
                <p>Github</p>
            </div>
            <div className='icons_each' >
                <img className='img_tec' src={git_} alt='github_black' />
                <p>Git</p>
            </div>



        </div>
    )
}

export default Image_component

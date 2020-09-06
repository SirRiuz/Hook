

import React from 'react';
import ProgressBar from 'react-progressbar-on-scroll'
import './nav.css'
import { Link } from 'react-router-dom'

class NabBarArticle extends React.Component {

    render(){
        return(
        <div className='nav'>
            <Link to='/'> Home </Link>
            <ProgressBar height={4} gradient={true} color='#15C39A' gradientColor="#fff"/>
        </div> 
        );
    }

}


export default NabBarArticle;
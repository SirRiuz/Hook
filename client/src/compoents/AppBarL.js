
import { AppBar , Toolbar } from '@material-ui/core'
import React from 'react'
import '../compoents/styles/appBarLogin.css'

class AppBarL extends React.Component {

    constructor(props){
        super(props)
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.form)
    }

    render(){
        return(
            <AppBar position='fixed' className='appbar' color='inherit' elevation={0} style={{boxShadow:'2px 2px 10px rgba(0,0,0,0.04)'}}>
                <Toolbar style={{background:'#fff'}}>
                </Toolbar>
            </AppBar>
        )
    }
}


export default AppBarL

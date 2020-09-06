

import React from 'react'
import './login.css'
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Button from '@material-ui/core/Button';
 import { Redirect } from 'react-router-dom'
import FacebookLoginButton from './LoginFcebook'
import PostMenu from './PostMenu';


class Login extends React.Component {

    constructor(props){
        super(props);
        this.state={
            url:'http://127.0.0.1:5000/login/',
            email:'',
            password:'',
            loginStatus:'',
            open:false
        }
    }

    openDialog = () => {
        this.setState({open:!this.state.open})
    }

    //nacional21_23@hotmail.com
    onSubmit = (event) => {
        //console.log('Email ' + this.state.email)
        //console.log('Password ' + this.state.password)
        event.preventDefault()
        fetch(this.state.url , {
            method:'POST',
            body:new URLSearchParams({
                email:this.state.email,
                password:this.state.password
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.session) {
                var json  = JSON.stringify(res.session)
                localStorage.setItem('session' , json)
                window.location = '/'
            } else {
                console.warn(res.error.type)
                this.setState({loginStatus:res.error.type})

            }
        })
        .catch(e =>{
            //#alert('Error al iniciar sesion')
            this.setState({loginStatus:'server-error'})
        })
    }

    onChangeEmail = (event) => {
        this.setState({
            email:event.target.value
        })
    }

    onChangePassword = (event) => {
        this.setState({
            password:event.target.value
        })
    }

    componentDidMount(){
        document.title = 'Inicia secion para continuar | Hook'
    }

    render(){
        var messegeError
        switch (this.state.loginStatus) {
            case 'server-error':
                messegeError = (
                    <Alert style={{textAlign:'start' , borderRadius:'10px'}} severity="error">
                        <AlertTitle style={{fontWeight:'bold'}} >Server error</AlertTitle>
                        Lo sentimos pero estamos teniendo problemas en el servidor
                    </Alert>
                );
                break;

            case 'ban-account':
                return(
                    <Redirect to='/support/ban/' />
                )
                break;
        }

        return(
            <div className='row center-xs'>
                <div className='col-xs-12 col-md-3'>
                    <div className='box'>
                        <div className='login-container'>
                            <h1>Login</h1>
                            <strong style={{fontWeight:'normal'}}>Es un hecho establecido hace demasiado tiempo que un lector se distraerá</strong>
                            <br/>
                            <br/>
                            <div className='form-container'>
                                <form onSubmit={this.onSubmit} >
                                    <div className='input-container'>
                                        <TextField style={{width:'100%' , background:'#ffffff'}} type='email' label="Correo" onChange={this.onChangeEmail} required/>
                                    </div>
                                    <div className='input-container'>
                                        <TextField style={{width:'100%' , background:'#ffffff'}} type='password' label="Contraseña" onChange={this.onChangePassword} required/>
                                    </div>
                                    <br/>
                                    <Button  style={{width:'100%' , borderRadius:'100px'}} variant="contained" color="primary" type='submit'> iniciar sesion </Button>
                                </form>
                                <FacebookLoginButton/>
                            </div>
                            <br/>
                            <br/>
                            {messegeError}
                            Regisyer
                            <button onClick={this.openDialog} > Dialog test </button>
                            <PostMenu open={this.state.open} />
                        </div>
                    </div>



                    <div className='box'>
                        <div className='login-container'>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}




export default Login;

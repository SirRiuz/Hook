

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

class Register extends React.Component {

    render() {
        return (
            <div className='row center-xs'>
            <div className='col-xs-12 col-md-3'>
                <div className='box'>
                    <div className='login-container'>
                        <h1>Registrarme</h1>
                        <strong style={{fontWeight:'normal'}}>Es un hecho establecido hace demasiado tiempo que un lector se distraerá</strong>
                        <br/>
                        <br/>
                        <div className='form-container'>
                            <form onSubmit={this.onSubmit} >
                                <div className='input-container'>
                                    <TextField style={{width:'100%' , background:'#ffffff'}} label="Nombre" onChange={this.onChangeEmail} required/>
                                </div>
                                <div className='input-container'>
                                    <TextField style={{width:'100%' , background:'#ffffff'}} label="Apellido" onChange={this.onChangeEmail} required/>
                                </div>
                                <div className='input-container'>
                                    <TextField style={{width:'100%' , background:'#ffffff'}} type='email' label="Correo" onChange={this.onChangeEmail} required/>
                                </div>
                                <div className='input-container'>
                                        <TextField style={{width:'100%' , background:'#ffffff'}} type='password' label="Contraseña" onChange={this.onChangePassword} required/>
                                </div>
                                <div className='input-container'>
                                    <TextField select style={{width:'100%' , background:'#ffffff'}} label="Sexo" onChange={this.onChangeEmail} required>
                                        <MenuItem value='Maculino'>
                                            Maculino
                                        </MenuItem>

                                        <MenuItem value='Maculino'>
                                            Maculino
                                        </MenuItem>

                                        <MenuItem value='Otros'>
                                            Otros
                                        </MenuItem>

                                    </TextField>
                                </div>
                                <br/>
                                <Button  style={{width:'100%' , borderRadius:'100px'}} variant="contained" color="primary" type='submit'> registrarme </Button>
                            </form>
                        </div>
                        <br/>

                    </div>
                </div>
            </div>
        </div>
        );
    }

}


export default Register;
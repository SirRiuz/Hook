
import React from 'react';
import './ban.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Divider } from '@material-ui/core';
import { Redirect } from 'react-router-dom'


class BanView extends React.Component {

    onClick = () => {
        return <Redirect to='/'/>
    }

    render() {
        return (
            <div class="row center-xs">
                <div class="col-xs-11 col-md-5">
                    <div class="box">
                        <div className='messege-container'>
                            <Card style={{padding:'3px' , boxShadow:'1px 1px 5px #e8e8e8' , borderRadius:'5px'}}>
                                <CardContent>
                                    <h2>Cuenta suspendida temporalmente</h2>
                                    <Divider />
                                    <br/>

                                    Hey <strong>Mateo</strong> tu cuenta a sido suspendida temporalmente durante <strong>25 horas</strong> porque al parecer incumpliste los terminos y condiciones de Hooks
                                    <br/>
                                    <br/>
                                    Motivo de tu suspencion : <br/>
                                    Incumplimiento de las normas de la cuminindad

                                    <br/>
                                    <br/>

                                </CardContent>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}



export default BanView;
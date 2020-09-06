

import React from 'react';
import Login from '../compoents/Login'

class RequiereAuth extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoggin:false
        }
    }

    getLogin = () => {
        var storage = localStorage.getItem('session')
        if (storage){
            this.setState({isLoggin:true})
        }
    }

    componentDidMount(){
        this.getLogin()
    }

    render(){
        if(!this.state.isLoggin) {
            return(
                <div>
                    <Login/>
                </div>
            );
        }
        return(
            <div>
                {this.props.component}
            </div>
        );
    }
}



export default RequiereAuth;

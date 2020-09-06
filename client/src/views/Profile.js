
import React from 'react';

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            url:`http://127.0.0.1:5000/profile/`,
            dataProfile:{},
            profileStatus:''
        }
    }

    getDataProfile = () =>{
        fetch(this.state.url, {
            method:'POST',
            body:new URLSearchParams({
                nickName:this.props.match.params.nickName
            })
        })
        .then(response => response.json())
        .then(res => {
            if(res.profile){
                console.log(res)
                this.setState({
                    dataProfile:res
                })
            } else {
                console.error(res)
                this.setState({profileStatus:res.error.type})
            }
        })
    }

    componentDidMount(){
        this.getDataProfile()
    }

    render(){
        var contend;


        switch(this.state.profileStatus){
            //El perfil no existe Cambiar tipo
            case '':
                document.title = 'Perfil no disponible | Hook'
                contend = (
                    <div>
                        <h1>El perfil no existe</h1>
                    </div>
                );
                break
            case 'ban-profile':
                document.title = 'Esta cuenta a sido suspendida | Hook'
                contend = (
                    <div>
                        <h1>Cuenta suspendida ...</h1>
                    </div>
                );
                break
            default:
                break
        }


        if(this.state.dataProfile.profile){
            document.title = `(@${this.props.match.params.nickName}) ${this.state.dataProfile.profile.name} ${this.state.dataProfile.profile.lastName} | Hook`
            contend = (
                <div>
                    <h1> {this.state.dataProfile.profile.name} </h1>
                    Profile !!
                </div>
            );
        }


        return(
            <div>
                <h1> Profile </h1>
                <h4> {contend} </h4>
            </div>
        );
    }
}


export default Profile;
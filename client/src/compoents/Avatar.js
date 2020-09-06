

import React from 'react'
import { Avatar , Badge } from '@material-ui/core';
import verifictIcon from '../verifict.svg'


class AvaterIcon extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        switch(this.props.rango){
            case 'user':
                return <Avatar style={{width:'40px' , height:'40px'}} src={this.props.src}> </Avatar>

            case 'check':
                return(
                    <Badge
                      overlap="circle"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      //badgeContent='A'
                      badgeContent={
                        <div style={{background:'white' , borderRadius:'100px'}}>
                          <img id='image-avatar' name='Cuenta verificada' style={{borderRadius:'100px'}} width='17px ' height='17px' src={verifictIcon}/>
                        </div>
                      }
                  >
                    <Avatar style={{width:'40px' , height:'40px'}} src={this.props.src}> </Avatar>
                  </Badge>
                )
        }
    }
}


export default AvaterIcon

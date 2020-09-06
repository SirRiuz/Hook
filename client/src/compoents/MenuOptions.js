
import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, List, ListItem, ListItemText , ListItemAvatar , Divider } from '@material-ui/core';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';
import TimelineIcon from '@material-ui/icons/Timeline';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';

class MenuOptions extends React.Component {

    render(){
      return(
        <List style={{paddingTop:'95px'}}>
            <Link to='/explore/'>
                <ListItem button style={{borderRadius:10}}>
                    <ListItemAvatar>
                        <Avatar style={{background:'rgba(0,0,0,0.02)'}}>
                            <ExploreRoundedIcon style={{color:'rgba(66, 66, 66,0.5)'}}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary=<strong>Explora</strong>  />
                </ListItem>
            </Link>

            <Link to='/near/'>
                <ListItem button style={{borderRadius:10}}>
                    <ListItemAvatar>
                        <Avatar style={{background:'rgba(0,0,0,0.02)'}}>
                            <LocationOnRoundedIcon style={{color:'rgba(66, 66, 66,0.5)'}}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary=<strong>Cerca de mi</strong>  />
                </ListItem>
            </Link>

            <Link to='/recients/'>
                <ListItem button style={{borderRadius:10}}>
                    <ListItemAvatar>
                        <Avatar style={{background:'rgba(0,0,0,0.02)'}}>
                            <TimelineIcon style={{color:'rgba(66, 66, 66,0.5)'}}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary=<strong>Recientes</strong>  />
                </ListItem>
            </Link>

            <Link to='/trends/'>
                <ListItem button style={{borderRadius:10}}>
                    <ListItemAvatar>
                        <Avatar style={{background:'rgba(0,0,0,0.02)'}}>
                            <WhatshotRoundedIcon style={{color:'rgba(66, 66, 66,0.5)'}}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary=<strong>Tendencias</strong>  />
                </ListItem>
            </Link>

            <br/>
            <Divider/>
            <br/>

            <Link to='/save/'>
                <ListItem button style={{borderRadius:10}}>
                    <ListItemAvatar>
                        <Avatar style={{background:'rgba(0,0,0,0.02)'}}>
                            <BookmarkRoundedIcon style={{color:'rgba(66, 66, 66,0.5)'}}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary=<strong>Guardado</strong>  />
                </ListItem>
            </Link>

            <Link to='/com/'>
                <ListItem button style={{borderRadius:10}}>
                    <ListItemAvatar>
                        <Avatar style={{background:'rgba(0,0,0,0.02)'}}>
                            <PeopleAltRoundedIcon style={{color:'rgba(66, 66, 66,0.5)'}}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary=<strong>Comunidades</strong>  />
                </ListItem>
            </Link>

            <br/>


            <ListItem style={{borderRadius:10}}>
               <ListItemText primary={<strong style={{color:'rgba(150, 150, 150 , 0.7)' , fontSize:'14px' , fontWeight:'normal'}}> <a>Términos</a> <a>Política de privacidad</a> <a>Cookies</a> <a>Información de anuncios</a> · Hook © 2020</strong>} />
            </ListItem>

        </List>
      );
    }

}


export default MenuOptions

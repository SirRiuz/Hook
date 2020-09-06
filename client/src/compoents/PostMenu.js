

import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { List, ListItemAvatar , ListItem, ListItemText, Avatar} from '@material-ui/core';



class PostMenu extends React.Component {

    constructor(props){
        super(props);
        this.options = ['Guardar publicacion' , 'Copiar enlace' , 'Ir a la publicacion' , 'Informacion de la publicacion' , 'Reportar']
    }


    render(){
        return(
            <div>
                <Dialog  aria-labelledby="simple-dialog-title" open={this.props.open}>
                    <DialogTitle id="simple-dialog-title"> <strong>Opciones</strong> </DialogTitle>
                    <List>
                        {this.options.map((item) => (
                            <ListItem button key={item}>
                                <ListItemAvatar>
                                    <Avatar>h</Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item}/>
                            </ListItem>
                        ))}
                    </List>
                </Dialog>
            </div>
        );
    }

}


export default PostMenu;
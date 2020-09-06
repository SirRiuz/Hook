
import React from 'react';
import Video from '../compoents/video/Video'
import { Link } from 'react-router-dom'
import AvaterIcon from '../compoents/Avatar'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import { Button,CardContent,CardHeader,Card } from '@material-ui/core/'


class CardPost extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            openMenuPost:false,
            playVideo:false
        }
    }

    render(){
        return(
            <div>
                <Card style={{borderRadius:'7px' , marginBottom:'25px' , boxShadow:'2px 2px 10px rgba(0,0,0,0.02)'}}>
                    <CardHeader title={<Link to={this.props.data.post.posteador.nickName}><strong style={{fontSize:15 , fontWeight:'bold'}}>Darty Jazmin</strong></Link>}
                        subheader={<strong style={{color:'rgba(101, 103, 107,0.6)' , fontSize:'13px'}}>2 dias</strong>}
                        //<img style={{width:'43px' , height:'43px', borderRadius:'100px'}} src={this.props.data.post.posteador.profileIcon}/>
                        avatar={<Link to={this.props.data.post.posteador.nickName}> <AvaterIcon rango={this.props.data.post.posteador.rank} src={this.props.data.post.posteador.profileIcon} /> </Link>}
                        action={
                            <div>
                                <MoreHoriz aria-controls="fade-menu" style={{ fontSize: 25 , color:'rgba(66, 66, 66,0.7)'}} onClick={() => {
                                    this.setState({openMenuPost:!this.state.openMenuPost})
                                }}/>
                            </div>
                        }
                    />
                    {/*             <Video views={0} url={this.props.data.post.videoUrl} />     */}
                    <Video views={0} url={this.props.data.post.videoUrl} playing={this.state.playVideo}/>

                    <CardContent>
                        <strong style={{fontWeight:'normal' , color:'#424242'}} >{this.props.data.post.messege}</strong>
                        <br/>
                        <strong>#HolaMundo #Master #Mateo123 #Developers #Mail</strong>
                    </CardContent>
                    <CardContent>
                        <div className='row' style={{textAlign:'center'}}>
                            <div className='col-xs-4'> <Button><FavoriteBorderOutlinedIcon style={{color:'red'}}/><strong style={{paddingLeft:'8px'}}>1k</strong></Button> </div>
                            <div className='col-xs-4'> <Button><ChatBubbleOutlineOutlinedIcon style={{color:'red'}}/><strong style={{paddingLeft:'8px'}}>534</strong></Button> </div>
                            <div className='col-xs-4'> <Button><ShareOutlinedIcon style={{color:'red'}} /><strong style={{paddingLeft:'8px'}}>152</strong></Button> </div>
                        </div>
                    </CardContent>
                </Card>
                <hr/>
            </div>
        );
    }
}

export default CardPost;

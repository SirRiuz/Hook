
import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'



//Temp
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import Button from '@material-ui/core/Button'


class Esqueleto extends React.Component {

    render () {
        return(
        <div>
            <Card style={{borderRadius:'7px' , marginBottom:'25px' , boxShadow:'2px 2px 10px rgba(0,0,0,0.02)'}}>
                <CardHeader title={<Skeleton  width={140} variant="text" />} 
                    subheader={<Skeleton  width={80} variant="text" />}
                    avatar={<Skeleton variant="circle" width={45} height={45} />}
                    action={<Skeleton  width={20} variant="text" />}/>
                <Skeleton variant="rect" width={'100%'}  height={'330px'} />
                <CardContent>
                    <Skeleton  width={400} variant="text" />
                    <Skeleton  width={300} variant="text" />
                    <Skeleton  width={200} variant="text" />
                </CardContent>

            </Card>
        </div>
        )
    }
}


export default Esqueleto


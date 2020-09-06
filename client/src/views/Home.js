
import React from 'react';
import './post.css'
import CardPost from '../compoents/CardPost'
import Esqueleto from '../compoents/esqueleto/EsqueletoLoader'
import Skeleton from '@material-ui/lab/Skeleton'
import './Home.css'
import { Card , CardContent } from '@material-ui/core';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.getJson = localStorage.getItem('session')
        this.state={
            id:JSON.parse(this.getJson).id,
            url:'http://localhost:5000/get/post/',
            next:0,
            errorLoader:false,
            status:'loader',
            playVideo:false
        }
    }

    getPost = () => {
        fetch(this.state.url , {
            method:'POST',
            body:new URLSearchParams({
                'id':this.state.id,
                limit:3,
                next:0
            })
        })
        .then(res => res.json())
        .then(res => {
            this.setState({videoListArray:res})
            this.setState({next:this.state.videoListArray.next})
            console.log(this.state.videoListArray.videos)
            //console.log(this.state.next)
        })
        .catch(error => {
            console.log('ERROR')
            console.log(this.state.next)
        })
        .catch(error => {
            console.log('Response')
        })
    }

    getPostOnScroll = () => {
        //console.log('Loader state - >> ' , this.state.status)
        // Esn esta linea cambie un == por ===
        if(this.state.status === 'loader'){
            fetch(this.state.url , {
                method:'POST',
                body:new URLSearchParams({
                    'id':this.state.id,
                    limit:2,
                    next:this.state.next
                })
            })
            .then(res => res.json())
            .then(res => {
                this.setState({status:res.status})
                console.log(res.videos)
                if(res.videos) {
                    //console.log('POST ON SCROLL !!')
                    //console.log('NEXT -> ' , this.state.next)
                    res.videos.map((item) => {
                        this.state.videoListArray.videos.push(item)
                        this.setState({
                         videoListArray:{
                            videos:this.state.videoListArray.videos
                            }
                        })
                    })
                    this.setState({next:res.next})
                    //console.log(this.state.videoListArray.videos)
                } else {
                    this.setState({errorLoader:true})
                }
            })
        }
    }

    scrollLoader = () => {
        var x = 0
        window.addEventListener('scroll' , (e) => {
            //console.log(x)
            if (x >  17){
                this.getPostOnScroll()
                x = 0
            }
            x = x + 1 ;
        })
    }

    componentDidMount() {
        this.getPost()
        this.scrollLoader()
        document.title='Hook'
    }

    render(){
        var listVideos
        if(this.state.videoListArray){
            if(this.state.videoListArray.videos){
                if(this.state.videoListArray.videos.length > 0){
                    listVideos = this.state.videoListArray.videos.map((items , key) => {
                        return (
                            <CardPost key={key} data={items}/>
                        )
                    })
                } else {
                    listVideos = (
                        <div>
                            <h1>Bienvenida :d</h1>
                        </div>
                    );
                }
            } else {
                localStorage.clear()
                window.location = '/'
            }


        } else {

            // Animaciones de carga ...
            // Muestra el esqueleto de carga
            var listEsqueleto = []
            for (var x = 0; x<10; x++){ listEsqueleto.push(<Esqueleto/>) }
            listVideos = listEsqueleto.map((item , key) => {
                return <div key={key}> {item} </div>
            })
        }

        return(
            <div>
                <div className='row center-xs' style={{paddingTop:'100px'}}>
                    <div className="col-xs-3">
                        x
                    </div>
                    <div className="col-xs-12 col-md-4 post-container">
                        <div className="box">
                            {listVideos}
                        </div>
                    </div>
                    <div className="col-xs-3">
                        <div className="box-actions" style={{paddingLeft:20}}>
                            <Card style={{borderRadius:'7px' , marginBottom:'25px' , boxShadow:'2px 2px 10px rgba(0,0,0,0.02)' , textAlign:'start' , }}>
                                <CardContent>
                                    <Skeleton  width={'100%'} variant="text" />
                                    <Skeleton  width={'100%'} variant="text" />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default Home;


import React from 'react';
import ReactPlayer from 'react-player'
import play from '../../play.png'
import './video.css'

class Video extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            playing:false,
            error:false,
            color:''
        }
    }

    onError = () => {
        this.setState({
            error:true
        })
    }

    viewsPanel = () => {
        alert('Views')
    }

    play = () => {
        if(this.state.error){
            alert('El video no esta disponible')
            this.setState({color:'#e8e8e8'})
        } else {
            this.setState({playing:!this.state.playing})
            console.log(this.state.playing)
        }
    }


    pauseVideoOnCroll = () => {
        var paseConter = 0
        window.addEventListener('scroll' , (e) => {

            if(this.state.playing){
                console.log(paseConter)
                if(paseConter >= 5){
                    this.setState({playing:false})
                    paseConter = 0
                }
                paseConter = paseConter + 1 ;
            }
        })
    }

    componentDidMount(){
        this.pauseVideoOnCroll()
    }

    render(){
        var pausemanager
        if (!this.state.playing) {
            pausemanager = (
                <div className='pause'>
                    <img id='img-pause' src={play}/>
                </div>
            );
        }

        return (
            <div className='video-container'>
                <ReactPlayer
                    playing={this.state.playing}
                    onError={this.onError}
                    loop
                    url={this.props.url}
                    width='100%'
                    height='auto'
                    onProgress={(time) => {
                        console.log(time)
                    }}
                />

                <div style={{background:this.state.color , cursor:'pointer'}} onClick={this.play} className='custom-controls'>
                    {pausemanager}
                </div>

                <div title='Visualizaciones' onClick={this.viewsPanel} className='reproductions'>
                    {this.props.views}
                </div>
            </div>
        );
    }
}


export default Video;

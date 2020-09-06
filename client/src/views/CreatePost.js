

import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class CreatePost extends React.Component {

    constructor(props){
        super(props);
        this.getJson = localStorage.getItem('session')
        this.state={
            name:JSON.parse(this.getJson).userName,
            url:'http://127.0.0.1:5000/post/',
            statusLoaded:false,
            messege:'',
            id:JSON.parse(this.getJson).id
        }
    }

    onChangeHandler = (event) => {
        console.log('Cargando ...')
        this.setState({file:event.target.files[0]})
    }

    createPost = (fileBody) => {
        fetch(this.state.url , {
            method:'POST',
            body:fileBody
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            //window.location = '/'
            this.setState({statusLoaded:'sucss'})
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        if(this.state.file) {
            console.log('Publicando ...')
            this.setState({statusLoaded:'load'})
            var file = new FormData()
            file.append('file',this.state.file)
            file.append('messege',this.state.messege)
            file.append('id' , this.state.id)
            file.append('hashtags' , '#NoneUndefineHashtags')

            console.log(this.state.file)

            this.createPost(file)

        } else {
            console.error('Nesecitas un video para hecer un post')
            this.setState({statusLoaded:'not-file'})
        }
    }


    onChange = (event) => {
        this.setState({messege:event.target.value})
        console.log(this.state.messege)
    }


    componentDidMount(){
        document.title = 'Crear nueva publicacion | Hook'
    }

    render(){

        var stateLoadPost 
        switch (this.state.statusLoaded) {
            case 'load':
                stateLoadPost = (
                    <div>
                        <h1>Publicando </h1>
                        <p>Esto puede tardar algunos segundos</p>
                    </div>
                )
                break;

            case 'sucss':
                return(
                    <Redirect to='/' />
                )
                break;

            case 'not-file':
                stateLoadPost = (
                    <p>Es necesario que adjuntes un video a tu publicacion !!</p>
                )
                break;
        }

        return(
            <div>
                <Link to='/create/'> Create </Link>
                <Link to='/'> Home </Link>
                <form onSubmit={this.onSubmit} >
                    <input onChange={this.onChange} title='Este campo es opcional' type='text' placeholder={this.state.name + ', escribe un texto para este video'}/>
                    <br/>
                    <br/>
                    <input type="file" name="file"  accept="video/*" onChange={this.onChangeHandler}/>
                    <br/>
                    <br/>
                    <button type='submit'> Publicar </button>
                </form>
                {stateLoadPost}
            </div>
        );
    }
}


export default CreatePost;
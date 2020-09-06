
import React from 'react';
import './App.css';
import { BrowserRouter , Switch , Route  , Redirect} from 'react-router-dom';
import RequiereAuth from './compoents/RequiereAuth'
import Home from './views/Home'
import Close from './compoents/Close'
import Profile from './views/Profile'
import CreatePost from './views/CreatePost'
import Register from './views/Register'
import BanView from './views/Ban'
import Hashtag from './views/hashtag'
import AppBarL from './compoents/AppBarL'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return(
      <BrowserRouter>
        {/* <AppBarL/> */}
        <AppBarL/>
        <Switch>
          <Route exact path='/' render={() => {
            return <RequiereAuth component={<Home/>} default={<Redirect to='/login/'/>} />
          }} />

          <Route exact path='/create/' render={() => {
            return <RequiereAuth component={<CreatePost/>} />
          }}/>

          <Route exact path='/close/' render={() => {
            return <Close/>
          }} />

          <Route path='/register/' render={() => {
            return <Register/>
          }} />

          <Route path='/support/ban/' render={() => {
            return <BanView/>
          }} />


          <Route path='/explore/' render={() => {
            return <h1>Explora</h1>
          }} />


          <Route path='/trends/' render={() => {
            return <h1>Tendencias</h1>
          }} />


          <Route path='/communitys/' render={() => {
            return <h1>Comunidades</h1>
          }} />


          <Route exact path='/hashtag/:hashtag/' component={Hashtag}/>
          <Route exact path='/:nickName/' component={Profile}/>

          <Route path='' render={() => {
            return <h1>Page not found ..</h1>
          }} />

        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;

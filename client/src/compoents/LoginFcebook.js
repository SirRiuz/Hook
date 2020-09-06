
import React from 'react'
import FacebookAuth from 'react-facebook-auth';


const MyFacebookButton = ({ onClick }) => (
    <button onClick={onClick}>
      Login with facebook
    </button>
  );


   
  const authenticate = (response) => {
    var jsonRequest = {
        facebook:{
            id:response.id,
            name:response.name,
            email:response.email,
            sexo:'',
            imgProfile:response.picture.url
        }
    }
    console.log(jsonRequest)
    fetch('http://127.0.0.1:5000/auth/social/' , {
        method:'POST',
        heder:{
            'Content-Type': 'application/json'
        },body:new URLSearchParams({
          id:response.id,
          userName:response.name,
          lastName:response.name,
          email:response.email,
          nickName:response.email,
        })
    })
    .then(r => r.json())
    .then(r =>{ 
        if(r.session){
          var json  = JSON.stringify(r.session)
          localStorage.setItem('session' , json)
          window.location = '/'
        }
    })

  };
   
  var FacebookLoginButton = () => (
    <div>
      <FacebookAuth
        appId="1653321914848792"
        callback={authenticate}
        component={MyFacebookButton}
      />
    </div>
  );


export default FacebookLoginButton;
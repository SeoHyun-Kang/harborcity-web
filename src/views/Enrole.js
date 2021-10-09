//사이드바(회원가입) : 페이스북 회원가입

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

// core components
import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLoginWithButton from 'react-facebook-login';
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import firebase from 'firebase';
import { StyledFirebaseAuth } from "react-firebaseui/StyledFirebaseAuth";

const componentClicked = () => {
  console.log( "Clicked!" )
}

const LoginButton = ({facebookResponse}) => (
  <FacebookLoginWithButton
    appId="516220549446952"
    //autoLoad={true}
    fields="name,email"
    onClick={componentClicked}
    callback={facebookResponse}
    icon="fa-facebook"
  />
  )

const UserScreen = ({user}) => (
    <>
    <h1>로그인 완료 {user.name}</h1>
    <p>로그인 계정(이메일) : { user.email }</p>
    
    {/* <img src={user.picture.data.url} height={user.picture.height} width={user.picture.width} alt="avatar"/> */}
    </>
)

/*function Enrole() {
  state = {user:false}
  facebookResponse = (response) => { console.log( response ); 
    this.setState( {...this.state, user: response } ) }

  return (
    <>
      <PanelHeader size="sm" />
      <button> {
           
           // Facebook provider object is created here.
            const FacebookAuth = 
                new firebase.auth.FacebookAuthProvider();
                 
           // using the object we will authenticate the user.
             
               firebase.auth().signInWithPopup(FacebookAuth);
                }
            Sign in with Facebook
      </button>
      
    </>
  );
}*/
class App extends React.Component {
  state = {user:false}
  facebookResponse = (response) => { console.log( response ); this.setState( {...this.state, user: response } ) }

  render() {
    return (
      <>
      <PanelHeader size="sm" />
      <div style={{ margin: "auto", textAlign: "center", paddingTop: "2em" }}>
        { this.state.user ? <UserScreen user={this.state.user}/> :
          <LoginButton facebookResponse={this.facebookResponse}/>
        }
      </div>
      </>
    )
  }
}

export default App;

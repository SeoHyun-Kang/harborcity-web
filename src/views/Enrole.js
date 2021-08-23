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
import firebase from 'firebase'
import { StyledFirebaseAuth } from "react-firebaseui/StyledFirebaseAuth";

const componentClicked = () => {
  console.log( "Clicked!" )
}

const LoginButton = ({facebookResponse}) => (
  <FacebookLoginWithButton
    appId="516220549446952"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={facebookResponse}
    icon="fa-facebook"
  />
  )

function Enrole() {
  state = {isSignedIn : false}
  uiConfig = {
    signInFlow = "popup",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks:{
      signInSuccess: () => false
    }
  }
  return (
    <>
      <PanelHeader size="sm" />
      <div className="Enrole">  
        {this.state.isSignedIN ? (
          <div> Signed In</div>
        ) : (
          <div>Not Signed In</div>
        )}
          </div>

      {/*<div className="content">
        <Row>
          <Col md="10">
            <Card>
              <CardHeader>
                <h5 className="title">회원 가입</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>회사</label>
                        <Input
                          defaultValue="OO항만공사"
                          disabled
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-2" md="4">
                      <FormGroup>
                        <label>회원번호</label>
                        <Input
                          defaultValue="12345"
                          placeholder="Usernumber" //Username ->수정
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-3" md="2">
                      <FormGroup>
                        <label>나이</label>
                        <Input
                          defaultValue="40세"
                          placeholder="Usernumber" //Username ->수정
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="5">
                      <FormGroup>
                        <label>성</label>
                        <Input
                          defaultValue="홍"
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-2" md="5">
                      <FormGroup>
                        <label>이름</label>
                        <Input
                          defaultValue="길동"
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="10">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          defaultValue="honggildong@gmail.com"
                          placeholder="Email" //HomeAddress ->수정
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
  </div>*/}
    </>
  );
}

export default Enrole;

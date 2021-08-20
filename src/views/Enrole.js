/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

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
//import PanelHeader from "components/PanelHeader/PanelHeader.js";
import FacebookLogin from '@greatsumini/react-facebook-login';

export default function FacebookLoginButton() {
  return (
    <FacebookLogin
      appId="발급받은 앱 ID"
      onSuccess={(response) => {
        console.log('Login Success!');
        console.log('id: ', response.id);
      }}
      onFail={(error) => {
        console.log('Login Failed!');
        console.log('status: ', error.status);
      }}
      onProfileSuccess={(response) => {
        console.log('Get Profile Success!');
        console.log('name: ', response.name);
      }}
    />
  );
}

function FacebookLoginButton({ requestLogin }: LoginButtonProps) {
  return (
    <FacebookLogin
      appId={process.env.FB_APP_ID}
      onProfileSuccess={(response) => {
        requestLogin({
          Provider: ProviderType.Facebook,
          id: response['id'],
        });
      }}
      onFail={() => {
        alert('비정상적인 결과입니다. 다시 시도해주세요!');
      }}
      render={({ onClick }) => (
        <Wrapper onClick={onClick}>
          {/* render prop을 사용할 땐 반드시 onClick을 사용해주세요! */}
          <FacebookIcon
            style={{
              marginRight: '0.8rem',
            }}
          />
          <P level={2} color={WHITE} fontWeight="medium">
            페이스북으로 시작하기
          </P>
        </Wrapper>
      )}
    />
  );
}
/*function User() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
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
      </div>
    </>
  );
}

export default User;*/

// 사이드바(마이페이지) : 마이페이지

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
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function User() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">회원 정보</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
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
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>회원번호</label>
                        <Input
                          defaultValue="12345"
                          placeholder="Usernumber" //Username ->수정
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>입사 일자</label>
                        <Input
                          defaultValue="2021년 01월 01일"
                          placeholder="Enrolldate"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>성</label>
                        <Input
                          defaultValue="홍"
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
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
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>부서</label>
                        <Input
                          defaultValue="관리 부서"
                          placeholder="Class"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>직위</label>
                        <Input
                          defaultValue="신입사원"
                          placeholder="Role"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
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
          <Col md="3">
            <Card className="card-user">
              <div className="image">
                <img alt="..." src={require("assets/img/bg5.jpg").default} />
              </div>
              <CardBody>
                <div className="author">
                  <img
                    className="avatar border-gray"
                    src={require("assets/img/default-avatar.png").default}
                  />
                  <p className="description">홍 길동</p>
                </div>
                <hr />
                <div className="button-container">
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-facebook-f" />
                  </Button>
                </div>
              </CardBody>                               
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
//다른 버튼들
{/* <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-google-plus-g" />
</Button> */}

export default User;

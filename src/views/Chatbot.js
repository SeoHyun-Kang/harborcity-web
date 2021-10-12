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

function Chatbot() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="chatbot">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                  <a href="./chatbot/index.html">챗봇과 대화하기</a>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
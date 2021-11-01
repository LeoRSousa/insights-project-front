import React from 'react';
import './Login.css'

import logo from "../assets/3.png";
import { Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap'

function Login() {
  return (
    <>
      <Row className="main">
        <Col xs="4" className="side-content">
          <img src={logo} alt="Logo" className="logo" />
        </Col>
        <Col xs="8" className="main-content">
          <h1>LOGIN</h1>
          <Form inline>
            <div className="input-section">
              <FormGroup>
                <Label
                  for="email"
                  hidden
                >
                  Email
                </Label>
                <Col xs={6}>
                  <Input
                    id="email"
                    name="email"
                    placeholder="EMAIL"
                    type="email"
                  />
                </Col>
              </FormGroup>
              {' '}
              <FormGroup>
                <Label
                  for="password"
                  hidden
                >
                  Email
                </Label>
                <Col xs={6}>
                  <Input
                    id="password"
                    name="password"
                    placeholder="SENHA"
                    type="password"
                  />
                </Col>
              </FormGroup>
            </div>
            {' '}
            <Button>
              Entrar
            </Button>
            {' '}
            <Button>
              Cadastrar
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Login;

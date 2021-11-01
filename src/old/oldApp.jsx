import React from 'react';

import './OldApp.css';
import logo from './assets/3.png';
import { Form, ButtonGroup, FormGroup } from 'react-bootstrap';
import { Col, Row, Card, CardBody } from "reactstrap"
import { Button, Input, Label } from "reactstrap"

// console.log(logo);

function OldApp() {
  return (
    <>
      <div className="flex-container">
        <div className="S1">
          <img src={logo} alt="Logo" className="Logo" />
        </div>
        <div className="S2">
          <h1>LOGIN</h1>
          {/* Formulário           */}
          <Form inline>
            <div className="porra">
              <Col md={8}>
                <FormGroup>
                  <Label
                    for="email"
                    hidden
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                </FormGroup>
                {' '}
                <FormGroup>
                  <Label
                    for="password"
                    hidden
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Senha"
                    type="password"
                  />
                </FormGroup>
              </Col>
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


        </div>
      </div>
    </>
  );
}

export default OldApp;

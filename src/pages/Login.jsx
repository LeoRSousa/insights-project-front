//sessionStorage.clear(); para logout
import React from 'react';

import './Login.css'
import logo from "../assets/3.png";

import { Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { render } from '@testing-library/react';
import { useLocation, Link } from "react-router-dom";
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    window.sessionStorage.setItem('adv_id', '');
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  cadastro(event) {
    console.log('./advisor/create');
  }

  handleSubmit(event) {
    var self = this;

    var result = JSON.stringify({
      "email": this.state.email,
      "password": this.state.password
    });

    var config = {
      method: 'post',
      url: 'http://localhost:5002/advisor/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: result
    };

    axios(config)
      .then(function (response) {
        if (response.data == "User not found") {
          alert("Login inválido.\nConfira suas credenciais!");
        } else {
          var id = response.data.id;
          window.sessionStorage.setItem('adv_id', id);
          // console.log(sessionStorage.getItem('adv_id'));
          if(window.sessionStorage.getItem('adv_id') != '') {
            window.location.replace('http://localhost:5500/advisor/home');
          }
        }

      })
      .catch(function (error) {
        console.log(error);
      });

    // alert(`JSON: ${result}`);

    event.preventDefault();
  }

  render() {
    return (
      <>
        <Row className="main">
          <Col xs="4" className="side-content">
            <img src={logo} alt="Logo" className="logo" />
          </Col>
          <Col xs="8" className="main-content">
            <h1>LOGIN</h1>
            <Form inline onSubmit={this.handleSubmit.bind(this)}>
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
                      onChange={this.handleInputChange.bind(this)}
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
                      onChange={this.handleInputChange.bind(this)}
                    />
                  </Col>
                </FormGroup>
              </div>
              {' '}
              <Button>
                Entrar
              </Button>
              {' '}
              <a href="./advisor/create">
                <Button type="button" onClick={this.cadastro()}>
                  Cadastrar
                </Button>
              </a>
            </Form>
          </Col>
        </Row>
      </>
    );
  };
}

export default Login;

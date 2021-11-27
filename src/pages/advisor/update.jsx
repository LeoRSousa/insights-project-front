import React from 'react';

import account_circle from "../../assets/ic_account_circle_white_48dp.png";

import { Form, FormGroup, Label, Col, Input, Button, Row } from 'reactstrap';
import { BsFillHouseFill, BsBoxArrowInLeft } from "react-icons/bs";
import axios from "axios";

class UpdateAdvisor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 12341.42,
            adv: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        var self = this;
        var config = {
            method: 'get',
            url: 'http://localhost:5002/advisor/' + window.sessionStorage.getItem('adv_id'),
            headers: {}
        };
        axios(config)
            .then(function (response) {
                self.setState({ adv: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
        // this.state.name = JSON.stringify(res.name);
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(event) {
        const result = JSON.stringify({
            "name": this.state.name,
            "salary": this.state.salary
        });
        var config = {
            method: 'post',
            url: 'http://localhost:5002/advisor/update/' + window.sessionStorage.getItem('adv_id'),
            headers: {
                'Content-Type': 'application/json'
            },
            data: result
        };
        axios(config)
            .then(function (response) {
                alert('Edição realizada!');
                window.location.replace('http://localhost:5500/advisor/home');
            })
            .catch(function (error) {
                alert(error);
            });
        // alert(`JSON: ${result}`);
        event.preventDefault();
    }

    handleDelete() {
        var opt = window.confirm('Tem certeza que quer deletar este perfil?');
        if (opt) {
            var config = {
                method: 'get',
                url: 'http://localhost:5002/advisor/delete/' + window.sessionStorage.getItem('adv_id'),
                headers: {}
            };
            axios(config)
                .then(function (response) {
                    alert('Advisor deletado!');
                    window.location.replace('http://localhost:5500');
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            // Do nothing!
            console.log('Cancelado.');
        }
    }

    render() {
        // const { advisorName } = this.state.advName;
        console.log(this.state.adv);
        return (
            <>
                {/* Retangle-2 = Sidebar */}
                <div className="Rectangle-2">
                    {/* Retangle-3 = Card do perfil */}
                    <div className="Rectangle-3">
                        <br />
                        <div className="Ellipse-1"><br />
                        </div>
                        <p className="Txt-1">
                            {this.state.adv.name} <br />
                            {this.state.adv.email} <br />
                            {this.state.adv.city} - {this.state.adv.state} <br />
                            {this.state.adv.cvm_code}
                        </p>
                    </div>
                    <hr />
                    <Row>
                        <Col xs="1"></Col>
                        <Col>
                            <a href="../advisor/home">
                                <div className="side-bar"><BsFillHouseFill size={40} />
                                    &nbsp;&nbsp;&nbsp;Página Inicial</div>
                            </a>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs="1"></Col>
                        <Col>
                            <a href="../">
                                <div className="side-bar"><BsBoxArrowInLeft size={40} />
                                    &nbsp;&nbsp;&nbsp;Logout</div>
                            </a>
                        </Col>
                    </Row>
                    <hr />
                </div>

                <div className="Rectangle-1">
                    <div className='title'>
                        <img src={account_circle} alt="Profile Icon" />
                        <h1>Editar perfil do assessor</h1>
                    </div>
                    <div className='main-form'>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormGroup row>
                                <Label
                                    for="name"
                                    sm={2}
                                >
                                    Nome
                                </Label>
                                <Col sm={10}>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Seu nome"
                                        type="text"
                                        onChange={this.handleInputChange.bind(this)}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label
                                    for="salary"
                                    sm={2}
                                >
                                    Salário
                                </Label>
                                <Col sm={10}>
                                    <Input
                                        id="salary"
                                        name="salary"
                                        placeholder="1234.56"
                                        type="text"
                                        onChange={this.handleInputChange.bind(this)}
                                    />
                                </Col>
                            </FormGroup>

                            <div className="cb">
                                <Button secondary>
                                    Enviar
                                </Button>
                            </div>

                        </Form>
                        <div>
                            <Button secondary style={{ backgroundColor: "#212121", borderColor: "#212121", color: "red" }} onClick={this.handleDelete}>
                                Apagar perfil
                            </Button>
                        </div>
                    </div>
                </div>
            </>
        );
    };
}

export default UpdateAdvisor;
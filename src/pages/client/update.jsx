import React, { useState, useEffect } from "react";
import './create.css';

import account_circle from "../../assets/ic_account_circle_white_48dp.png";

import { Form, FormGroup, Label, Col, Input } from 'reactstrap';
import axios from "axios";

class UpdateClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cpf: '',
            username: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // useEffect(() => {
    // }, []);

    // componentDidMount() {
    //     const [res, setRes] = useState([]);

    //     const req = async () => { 
    //         const { data } = await axios.get("http://localhost:5000/clients");
    //         setRes(data);
    //     };
        
    //     req();

            // var config = {
            //     method: 'get',
            //     url: 'http://localhost:5000/clients',
            //     headers: {}
            // };

            // axios(config)
            //     .then(function (response) {
            //         console.log(JSON.stringify(response.data));
            //     })
            //     .catch(function (error) {
            //         console.log(JSON.stringify(error));
            //     });
            // }
    // }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(event) {
        const result = `"name": "${this.state.name}", "cpf": "${this.state.cpf}", "user": "${this.state.username}"`;

        alert(`JSON: ${result}`);
        event.preventDefault();
    }

    render() {
        return (
            <>
                <div className='title'>
                    <img src={account_circle} alt="Profile Icon" />
                    <h1>Criar cliente</h1>
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
                                for="cpf"
                                sm={2}
                            >
                                CPF
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="cpf"
                                    name="cpf"
                                    placeholder="000.000.000-00"
                                    type="text"
                                    onChange={this.handleInputChange.bind(this)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="username"
                                sm={2}
                            >
                                Usuário
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="username"
                                    name="username"
                                    placeholder="Nome de usuário"
                                    type="text"
                                    onChange={this.handleInputChange.bind(this)}
                                />
                            </Col>
                        </FormGroup>
                        <div className="cb">
                            {/* <Button secondary>
                                Enviar
                            </Button> */}

                            <input type="submit" value="Enviar" />
                        </div>

                    </Form>
                </div>
                {/* <p>{res}</p> */}

            </>
        );
    }
}

export default UpdateClient;
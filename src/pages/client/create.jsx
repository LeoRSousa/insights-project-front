import React from 'react';
import './create.css'

import account_circle from "../../assets/ic_account_circle_white_48dp.png"

import { useState } from "react";
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

import TopBar from '../../TopBar';
// ()

function CreateClient() {
    const onSubmit = () => {
        alert({name});
    }

    const [name, setName] = useState("");

    return (
        <>
            <div className='title'>
                {/* <span class="material-icons account">
                    account_circle
                </span> */}
                <img src={account_circle} alt="Profile Icon" />
                <h1>Criar cliente</h1>
            </div>
            <div className='main-form'>
                <Form onSubmit={onSubmit}>
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
                                onChange = {(e) => setName(e.target.value)}
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
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="email"
                            sm={2}
                        >
                            Email
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="email"
                                name="email"
                                placeholder="examplo@email.com"
                                type="email"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="password"
                            sm={2}
                        >
                            Senha
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="suitability"
                            sm={2}
                        >
                            Suitability
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="suitability"
                                name="suitability"
                                placeholder="suitability"
                                type="text"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="tel"
                            sm={2}
                        >
                            Celular
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="tel"
                                name="tel"
                                placeholder="(00) 0000-0000"
                                type="tel"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="address"
                            sm={2}
                        >
                            Endereço
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="address"
                                name="address"
                                placeholder="Rua X, Número X, Bairro X"
                                type="text"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="city"
                            sm={2}
                        >
                            Cidade
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="city"
                                name="city"
                                placeholder="Sua cidade"
                                type="city"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="estate"
                            sm={2}
                        >
                            Estado
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="estate"
                                name="estate"
                                placeholder="Seu estado"
                                type="text"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="status"
                            sm={2}
                        >
                            Status
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="status"
                                name="status"
                                placeholder=""
                                type="text"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="complement"
                            sm={2}
                        >
                            Complemento
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="complement"
                                name="complement"
                                placeholder=""
                                type="text"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="zipcode"
                            sm={2}
                        >
                            CEP
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="zipcode"
                                name="zipcode"
                                placeholder="00000-000"
                                type="text"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="obs"
                            sm={2}
                        >
                            Observação
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="obs"
                                name="obs"
                                placeholder=""
                                type="text"
                            />
                        </Col>
                    </FormGroup>

                    <div className="cb">
                        <Button secondary>
                            Enviar
                        </Button>
                    </div>

                </Form>
            </div>
        </>
    );
}

export default CreateClient;
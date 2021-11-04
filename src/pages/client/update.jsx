import React, { useState } from "react";
import './create.css';
import { useForm } from "react-hook-form";

import account_circle from "../../assets/ic_account_circle_white_48dp.png";

import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

function UpdateClient() {
    const { register, handleSubmit } = useForm();
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));

    return (
        <>
            <div className='title'>
                <img src={account_circle} alt="Profile Icon" />
                <h1>Criar cliente</h1>
            </div>
            <div className='main-form'>
                <Form >
                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
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
                            />
                            {/* <input {...register("name")} placeholder="Seu nome" /> */}
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
                            {/* <Input
                                id="cpf"
                                name="cpf"
                                placeholder="000.000.000-00"
                                type="text"
                            /> */}
                            {/* <input {...register("cpf")} placeholder="Seu CPF" /> */}
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
                            {/* <Input
                                id="username"
                                name="username"
                                placeholder="Nome de usuário"
                                type="text"
                            /> */}
                            {/* <input {...register("username")} placeholder="Nome de usuário" /> */}
                        </Col>
                    </FormGroup>
                    <div className="cb">
                        {/* <Button secondary>
                            Enviar
                        </Button> */}
                        <input type="submit" />
                    </div>

                {/* </form> */}
                </Form>
            </div>
            <p>{result}</p>

        </>
    );
}

export default UpdateClient;
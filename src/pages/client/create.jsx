import React from 'react';
import './create.css'

import { Form, FormGroup, Label, Col, Input, Button, FormText } from 'reactstrap';
// ()

function CreateClient() {
    return (
        <>
            <span class="material-icons">
                account_circle
            </span>
            <div className='title'>
                <h1>Criar cliente</h1>
            </div>
            <div className='main-form'>
                <Form>
                    <FormGroup row>
                        <Label
                            for="exampleEmail"
                            sm={2}
                        >
                            Email
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="examplePassword"
                            sm={2}
                        >
                            Password
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="password placeholder"
                                type="password"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="exampleSelect"
                            sm={2}
                        >
                            Select
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                            >
                                <option>
                                    1
                                </option>
                                <option>
                                    2
                                </option>
                                <option>
                                    3
                                </option>
                                <option>
                                    4
                                </option>
                                <option>
                                    5
                                </option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="exampleSelectMulti"
                            sm={2}
                        >
                            Select Multiple
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleSelectMulti"
                                multiple
                                name="selectMulti"
                                type="select"
                            >
                                <option>
                                    1
                                </option>
                                <option>
                                    2
                                </option>
                                <option>
                                    3
                                </option>
                                <option>
                                    4
                                </option>
                                <option>
                                    5
                                </option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="exampleText"
                            sm={2}
                        >
                            Text Area
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="exampleFile"
                            sm={2}
                        >
                            File
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleFile"
                                name="file"
                                type="file"
                            />
                            <FormText>
                                This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
                            </FormText>
                        </Col>
                    </FormGroup>

                </Form>
            </div>
        </>
    );
}

export default CreateClient;
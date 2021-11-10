import React, { useState, useEffect } from "react";
import axios from "axios";

import { Row, Col, Button } from "reactstrap";
import { BsPersonFill, BsFillTrashFill, BsPencilFill } from "react-icons/bs";


function GetClient() {
    function testeF() {
        console.log('AAAAA');
    };

    const [res, setRes] = useState([]);
    let teste;

    useEffect(() => {
        const req = async () => {

            // let result = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
            let result = await axios.get('http://localhost:5000/clients');

            let data = result.data;
            teste = data;
            setRes(data);
        }


        req();
    }, []);

    res.map((e) => console.log(e.name));

    return (
        <>
            <Row className="card">
                {/* <br /> */}
                {/* <Col>
                            <BsPersonFill size={40} />
                            &nbsp;&nbsp;&nbsp;Infos&nbsp;&nbsp;
                            <BsFillTrashFill size={25} />
                            &nbsp;&nbsp;
                            <BsPencilFill size={25} />
                        </Col> */}
                <a href="">
                    <Col className="space-between">
                        <div> <BsPersonFill size={40} /> &nbsp;&nbsp; <b>NOME DO CLIENTE</b> &nbsp;&nbsp; <br /> info adicional  </div>
                        {/* <div> <b>NOME DO CLIENTE</b> <br /> info adicional  </div> */}
                        <div> <Button><BsFillTrashFill size={25} onClick={testeF} /></Button>  &nbsp;&nbsp;  <Button><BsPencilFill size={25} onClick={testeF} /></Button> </div>
                    </Col>
                </a>
            </Row>
            {/* { res.map( (e) => <li>{ e.name }</li>) } */}
        </>
    );

}

export default GetClient;
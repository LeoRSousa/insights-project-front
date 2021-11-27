import React, { useState, useEffect } from "react";

import "../pages/advisor/home.css";

import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import { Row, Col, Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { BsPersonFill, BsBagPlusFill, BsBarChartFill, BsPatchPlusFill } from "react-icons/bs";


export default function GetPortifolios() {

    const [res, setRes] = useState([]);
    const [vazio, setVazio] = useState(<div></div>);

    useEffect(() => {
        const req = async () => {

            let result = await axios.get('http://localhost:5004/portfolios/advisor/' + window.sessionStorage.getItem('adv_id'),
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                });

            let data = result.data;
            console.log(data);
            console.log(data.portfolios);
            setRes(data.portfolios);
        }

        req();
    }, []);

    // res.map((e) => e.products.length == 0 ? console.log('true') : console.log('false'));
    console.log("Leng.: " + res.length);

    return (
        // if(res.length > 0) {console.log(res.length)}
        <>
            {res.map((e) =>
                <Row className="card">
                    <a href="">
                        <Col className="space-between">
                            <div> <BsPersonFill size={40} />   </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="card-text" style={{ maxWidth: "20vw", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}> <b>{e.name.toUpperCase()} {e.id}</b><br /> <b>Ativos:</b> {e.products.length == 0 ? 'Nenhum ativo' : e.products.map((i) => i.id + " | ")}</div>
                            <div className="card-icons-but">
                                {/* BOTÃO RECOMENDAR */}
                                <Button
                                    className="white"
                                    style={{ backgroundColor: "transparent", margin: "none", borderColor: "transparent" }}
                                    onClick={function vazia() { }}>
                                    <BsPatchPlusFill size={30} color="black" />
                                    <p style={{ color: "black", margin: "0" }}>Recomendar</p>
                                    <div>
                                        {/* <Modal toggle={function vazia() { }}>
                                            <ModalHeader toggle={function vazia() { }}>Título</ModalHeader>
                                            <ModalBody> aaaaaaaaaaaaaaaaaaaaaaaaaa</ModalBody>
                                            <ModalFooter>
                                                {' '}
                                                <Button onClick={function vazia() { }}>
                                                    Cancelar
                                                </Button>
                                            </ModalFooter>
                                        </Modal> */}
                                    </div>
                                </Button>
                                &nbsp;&nbsp;
                                {/* BOTÃO BACKTEST */}
                                <Button className="white" style={{ backgroundColor: "transparent", margin: "none", borderColor: "transparent" }}>
                                    <BsBarChartFill size={30} color="black" />
                                    <p style={{ color: "black", margin: "0" }}>Backtest</p>
                                </Button>
                                {/* BOTÃO ADICIONAR ATIVOS */}
                                &nbsp;&nbsp;
                                <Link to={{
                                    pathname: "../assets/home",
                                    state: { pf_id: parseInt(e.id) }
                                }} >
                                    <Button className="white" style={{ backgroundColor: "transparent", borderColor: "transparent" }}>
                                        <BsBagPlusFill size={30} color="black" />
                                        <p style={{ color: "black", margin: "0", wordBreak: "keep-all", whiteSpace: "nowrap" }}>Adicionar Ativos</p>
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                    </a>
                </Row>
            )
            }
        </>
    );

}
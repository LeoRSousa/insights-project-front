import React, { useState, useEffect } from "react";

import "../pages/advisor/home.css";

import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import { Row, Col, Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { BsPersonFill, BsBagPlusFill, BsBarChartFill, BsPatchPlusFill } from "react-icons/bs";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


export default function GetPortifolios() {

    const [res, setRes] = useState([]);
    const [vazio, setVazio] = useState(<div></div>);
    const [open, setOpen] = useState(false);
    const [clients, setClients] = useState([]);
    const MySwal = withReactContent(Swal);

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

            let response = await axios.get('http://localhost:5001/clients')
            let _clients = [];
            response.data.map((item) => {
                if (item.advisor_id == window.sessionStorage.getItem('adv_id')) {
                    _clients.push(item.id)
                }
            });
            setClients(_clients)
            console.log("Clientes ids: " + clients)
        }

        req();
    }, []);

    // res.map((e) => e.products.length == 0 ? console.log('true') : console.log('false'));
    // console.log("Leng.: " + res.length);

    const _modal = async (e) => {
        //https://sweetalert2.github.io/#input-types
        const options = new Map();

        clients.forEach((elem) => options.set(elem, elem));

        let optString = '';
        clients.forEach((elem) => optString +=
            '<input id="'+ elem +'" type="checkbox" value="' + elem +'" class="swal-input'+ elem +'"> <label for="'+ elem + '">'+ elem +'</label> '
        )
        console.log("OPT" + optString)

        // Funciona para o inputOptions
        // const mapa = new Map();
        // const a = [1, 3, 5]
        // a.forEach((elem) => mapa.set(elem, elem));

        const inputOptions = options;
        // {
        //     1: "1",
        //     3: "3"
        // }; 
        console.log("OPT2: " + typeof (inputOptions))

        //Multiple checkboxes: https://stackoverflow.com/questions/55386918/sweet-alert-2-multiple-checkbox
        /*
            title: 'Multiple checkbox inputs',
            html: `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="checkbox1">
                    <label class="form-check-label" for="checkbox1">
                        checkbox1
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="checkbox2">
                    <label class="form-check-label" for="checkbox2">
                        checkbox2
                    </label>
                </div>
            `,
            focusConfirm: false,
            preConfirm: () => {
                console.log('Is checkbox1 checked:' + document.getElementById('checkbox1').checked);
                console.log('Is checkbox2 checked:' + document.getElementById('checkbox2').checked);
            }
        */
        const { value: opt } = await MySwal.fire({
            // title: 'Selecione os ids',
            // input: 'radio',
            // inputOptions: inputOptions, //Can be a Map or a plain object, with keys that represent option values and values that represent option text.
            // inputValidator: (value) => {
            //     if (!value) {
            //         return 'You need to choose something!'
            //     }
            // }

            title: 'Multiple inputs',
            html: optString,
                // '<input id="swal-input1" type="checkbox" value="1" class="swal2-input"> <label for="swal-input1">Opt 1</label>' +
                // '<input id="swal-input2" type="checkbox" value="2" class="swal2-input"> <label for="swal-input2">Opt 2</label>',
            focusConfirm: false,
            preConfirm: () => {
                let result = []
                //Fazer a verificação pq tá voltando todos
                clients.forEach((elem) =>
                    result.push(document.getElementById(elem).value),
                )
                return result
                // return [
                //     //for each o que?
                //     document.getElementById('swal-input1').value,
                //     document.getElementById('swal-input2').value
                // ]
            }
        })

        if (opt) {
            // MySwal.fire({ html: `You selected: ${opt}` })
            MySwal.fire(JSON.stringify(opt))
        }
    }

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
                                <div>
                                    <Button
                                        className="white"
                                        style={{ backgroundColor: "transparent", margin: "none", borderColor: "transparent" }}
                                        onClick={
                                            (e) => {
                                                _modal(e);
                                                e.preventDefault();
                                            }
                                        }>
                                        <BsPatchPlusFill size={30} color="black" />
                                        <p style={{ color: "black", margin: "0" }}>Recomendar</p>

                                    </Button>
                                </div>
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
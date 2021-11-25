import React, { useState, useEffect } from "react";

import "../pages/advisor/home.css";

import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import { BsPersonFill, BsBagPlus } from "react-icons/bs";


export default function GetPortifolios() {

    const [res, setRes] = useState([]);

    // function deleteItem(elem) {
    //     console.log(elem.id);
    //     var config = {
    //         method: 'get',
    //         url: 'http://localhost:5001/client/delete/' + elem.id,
    //         headers: {}
    //     };

    //     axios(config)
    //         .then(function (response) { setDelRes = JSON.stringify(response); })
    //         .catch(function (error) { setDelRes = error; });

    //     if(delRes == '1') {
    //         window.location.replace('http://localhost:5500/advisor/home');
    //     }
    // }

    useEffect(() => {
        const req = async () => {

            let result = await axios.get('http://localhost:5004/portfolios/advisor/1', //Trocar id do advisor 
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

    res.map((e) => e.products.length == 0 ? console.log('true') : console.log('false'));

    return (
        <>
            {res.map((e) =>
                <Row className="card">
                    <a href="">
                        <Col className="space-between">
                            <div> <BsPersonFill size={40} />   </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="card-text"> <b>{e.name.toUpperCase()}</b><br /> <b>Ativos:</b> { e.products.length == 0 ? 'Nenhum ativo' : e.products.map((i) => i.id + " | ") }</div>
                            <div className="card-icons-but">
                                <Link to={{
                                    pathname: "../assets/home",
                                    state: { id: e.advisor_id }
                                }} >
                                    <Button className="white" style={{padding: "0"}}><BsBagPlus size={30} color="black" /> 
                                    <div className="card-text" style={{color: "black"}}>Adicionar Ativos</div>
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
import React, { useState, useEffect } from "react";

import "../pages/advisor/home.css"

import axios from "axios";
import { Row, Col, Button } from "reactstrap";
import { BsPersonFill, BsFillTrashFill, BsPencilFill } from "react-icons/bs";


function GetClient() {
    function testeF(id) {
        var ans = window.confirm('AAAAA' + toString(id));
        if (ans) {
            alert('AAAAAAA');
        } else {
            alert('BBBBBB');
        }
    };

    const [res2, setRes2] = useState([]);
    const [res, setRes] = useState([]);
    let teste;
    
    function deleteItem(elem) {
        // const _delete = async () => {
        //     let result = await axios.get('localhost:5000/client/delete/' + elem.id);
        // } 
        let del = res.filter(i => i.id !== elem.id);
        alert('localhost:5000/client/delete/' + elem.id);
        setRes(del);
    }

    useEffect(() => {
        const req = async () => {

            let result = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
            axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
            let result2 = await axios.get('http://localhost:5000/clients', {
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                }
            });
            console.log(result2);

            let data = result.data;
            let data2 = result2.data;
            teste = data;
            setRes(data2);
            setRes2(data2);
        }

        req();
    }, []);

    res.map((e) => console.log(e.title));
    res2.map((e2) => console.log(e2.name));

    return (
        <>
            {res.map((e) =>
                <Row className="card">
                    <a href="">
                        <Col className="space-between">
                            <div> <BsPersonFill size={40} />   </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="card-text"> <b>{e.name.toUpperCase()}</b> <br /> {e.email} </div>
                            <div className="card-icons-but">
                                <Button className="white" onClick={deleteItem.bind(this, e)}><BsFillTrashFill size={30} color="black"/></Button>  &nbsp;&nbsp;  <Button className="white" href="../../client/update"><BsPencilFill size={30} /></Button>
                            </div>
                        </Col>
                    </a>
                </Row>
            )}
        </>
    );

}

export default GetClient;
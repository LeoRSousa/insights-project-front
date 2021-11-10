import React from "react";
import "./home.css";
import { Row, Col, Button } from "reactstrap";
import { BsFillPersonPlusFill, BsPersonFill, BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import ClientCard from "../client/getClients";

export default class AdvisorHome extends React.Component {
    constructor(props) {
        super(props);

        this.editClient = this.editClient.bind(this);
        this.deleteClient = this.deleteClient.bind(this);
    }

    editClient(event) {
        alert('Edit');
    }

    deleteClient(event) {
        alert('Delete');
    }

    render() {
        return (
            <>
                {/* Retangle-2 = Sidebar */}
                <div className="Rectangle-2">
                    {/* Retangle-3 = Card do perfil */}
                    <div className="Rectangle-3">
                        <br />
                        <div className="Ellipse-1">
                        </div>
                        <p className="Txt-1">
                            Nome <br />
                            Email <br />
                            Cidade - Es <br />
                            CVN
                        </p>
                    </div>
                    <hr />
                    <Row>
                        <Col xs="1"></Col>
                        <Col>
                            <a href="">
                                <div className="side-bar"><BsFillPersonPlusFill size={40} />
                                    &nbsp;&nbsp;&nbsp;Adicionar cliente</div>
                            </a>
                        </Col>
                    </Row>
                    <hr />
                </div>
                <div className="Rectangle-1">
                    <br />
                    <br />
                    <h1>CLIENTES</h1>
                    <br />
                    <ClientCard />
                    
                    {/* <Row className="card">
                        {/* <br /> */}
                        {/* <Col>
                            <BsPersonFill size={40} />
                            &nbsp;&nbsp;&nbsp;Infos&nbsp;&nbsp;
                            <BsFillTrashFill size={25} />
                            &nbsp;&nbsp;
                            <BsPencilFill size={25} />
                        </Col> 
                        <a href="">
                            <div className="space-between">
                                <div> <BsPersonFill size={40} /> </div>
                                <div> <b>NOME DO CLIENTE</b> <br /> info adicional  </div>
                                <div> <Button><BsFillTrashFill size={25} onClick={this.deleteClient} /></Button>  &nbsp;&nbsp;  <Button><BsPencilFill size={25} onClick={this.editClient} /></Button> </div>
                            </div>
                        </a>
                    </Row> */}
                </div>
            </>
        );
    }
}
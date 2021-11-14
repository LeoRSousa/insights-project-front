import React from "react";
import "./home.css";
import { Row, Col, Button } from "reactstrap";
import { BsFillPersonPlusFill, BsFillPersonFill, BsBoxArrowInLeft, BsPersonLinesFill } from "react-icons/bs";
import ClientCard from "../../components/getClients";

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
                        <div className="Ellipse-1"><br />
                            <BsFillPersonFill size={40} />
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
                            <a href="../client/create">
                                <div className="side-bar"><BsFillPersonPlusFill size={40} />
                                    &nbsp;&nbsp;&nbsp;Adicionar cliente</div>
                            </a>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs="1"></Col>
                        <Col>
                            <a href="./update">
                                <div className="side-bar"><BsPersonLinesFill size={40} />
                                    &nbsp;&nbsp;&nbsp;Editar perfil</div>
                            </a>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs="1"></Col>
                        <Col>
                            <a href="../">
                                <div className="side-bar"><BsBoxArrowInLeft size={40} />
                                    &nbsp;&nbsp;&nbsp;Logout</div>
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
                </div>
            </>
        );
    }
}
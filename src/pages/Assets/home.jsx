import React from "react";

import AssetsInfo from "../../components/assetsInfo";

import { Col, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from "axios";
import { BsFillPersonFill, BsFillHouseFill, BsBoxArrowInLeft } from "react-icons/bs";
import { withRouter } from 'react-router-dom';


class AssetsHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sym: [],
            open: false,
            selected: 'Selecione',
            adv: '',
            advisor_id: this.props.id,
        };
    }

    handleChangeDropdown(value) {
        this.setState({ selected: value });
    }

    componentDidMount() {
        var self = this;

        //Request dos dados do card do advisor
        var config2 = {
            method: 'get',
            url: 'http://localhost:5002/advisor/1',
            headers: {}
        };
        axios(config2)
            .then(function (response) {
                self.setState({ adv: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });

        //Request da lista das siglas das empresas
        var config = {
            method: 'get',
            url: 'http://localhost:5003/assets',
            headers: {}
        };
        axios(config)
            .then(function (response) {
                self.setState({ sym: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        let assets;
        var selectedBuss = this.state.selected;
        if (selectedBuss != 'Selecione') {
            console.log(this.state.selected);
            let res = [this.state.selected];
            assets = <AssetsInfo company={res} adv_id={this.state.advisor_id}/>
        }
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
                            {this.state.adv.name} <br />
                            {this.state.adv.email} <br />
                            {this.state.adv.city} - {this.state.adv.state} <br />
                            {this.state.adv.cvm_code}
                        </p>
                    </div>
                    <hr />
                    <Row>
                        <Col xs="1"></Col>
                        <Col>
                            <a href="../advisor/home">
                                <div className="side-bar"><BsFillHouseFill size={40} />
                                    &nbsp;&nbsp;&nbsp;Página Inicial</div>
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
                    <div className='title'>
                        <h1>Assets</h1>
                    </div>
                    <div>
                        <Row>
                            <h6 className="Txt-1">Empresas:</h6>
                            <Dropdown isOpen={this.state.open} toggle={() => {
                                this.state.open == true
                                    ? this.setState({ open: false })
                                    : this.setState({ open: true })
                            }}>
                                <DropdownToggle caret>
                                    {this.state.selected}
                                </DropdownToggle>
                                <DropdownMenu container="body">
                                    {this.state.sym.map((item) => <DropdownItem onClick={() => this.handleChangeDropdown(item)}>{item}</DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                        </Row>
                    </div>

                    {assets}

                </div>
            </>
        );
    };
}

export default withRouter(AssetsHome);
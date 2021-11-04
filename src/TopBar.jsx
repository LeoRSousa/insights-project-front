import React from 'react';
import './TopBar.css'

import vertical from "./assets/Vertical.png";

import { Row } from 'reactstrap';

function TopBar() {
    return (
        <>
            <div>
                <Row className="main">
                    <img src={ vertical } alt="Logo Vertical" className="logo" />
                </Row>
            </div>
        </>
    );
}

export default TopBar;
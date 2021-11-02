import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
// import Home from "./Home";
import CreateClient from "../pages/client/create";

const Routes = () => {
    return (
        <BrowserRouter >
            < Route component={Login} path="/" exact />
            {/* < Route component={Home} path="/home" /> */}
            < Route component={CreateClient} path="/client/create" exact />
        </BrowserRouter>
    )
}

export default Routes;
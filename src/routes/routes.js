import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import AdvisorHome from "../pages/advisor/home";
import CreateClient from "../pages/client/create";
import UpdateClient from "../pages/client/update";
import CreateAdvisor from "../pages/advisor/create";
import UpdateAdvisor from "../pages/advisor/update";

const Routes = () => {
    return (
        <BrowserRouter >
            < Route component={Login} path="/" exact />
            < Route component={AdvisorHome} path="/advisor/home" />
            < Route component={CreateAdvisor} path="/advisor/create" />
            < Route component={CreateClient} path="/client/create" exact />
            < Route component={UpdateClient} path="/client/update" exact />
            < Route component={UpdateAdvisor} path="/advisor/update" />
        </BrowserRouter>
    )
}

export default Routes;
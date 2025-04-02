import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Estimate from "layouts/Estimate";
import Application from "layouts/Application.js";
import Estimation from "layouts/Estimation.js";


// views without layouts
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Applicant from "layouts/Applicant";
import SessionCheck from "views/CheckSession";

ReactDOM.render(
  <BrowserRouter>
    <>
      <SessionCheck />
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        <Route path="/applicant" component={Applicant} />
        <Route path="/application" component={Application} />
        <Route path="/estimation" component={Estimation} />
        <Route path="/estimate" component={Estimate} />
        {/* add routes without layouts */}
        <Route path="/landing" exact component={Landing} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/index" exact component={Index} />
        <Route path="/auth" exact component={Index} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/auth" />
      </Switch>
    </>
  </BrowserRouter>,
  document.getElementById("root")
);
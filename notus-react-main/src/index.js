import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Estimate from "layouts/Estimate";
import Application from "layouts/Application.js";
import JobContractor from "layouts/JobContractor.js";
import Estimation from "layouts/Estimation.js";


// views without layouts
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Applicant from "layouts/Applicant";
import SessionCheck from "views/CheckSession";
import JobTypeSet from "views/JobTypeSet";
import ModifyProgress from "layouts/ModifyProgress";
import PIV from "layouts/PIV";
import Allocation from "layouts/Allocation";
import ReviceJob from "layouts/ReviseJob";
import ReviseAllocation from "views/ReviseAllocation/ReviseAllocation";

ReactDOM.render(
  <BrowserRouter>
    <>
      <SessionCheck />
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        <Route path="/applicant" component={Applicant} />
        <Route path="/modifyProgress" component={ModifyProgress} />
        <Route path="/application" component={Application} />
        <Route path="/jobcontractor" component={JobContractor} />
        <Route path="/estimation" component={Estimation} />
        <Route path="/estimate" component={Estimate} />
        <Route path="/jobrevision" component={ReviceJob} />
        {/* add routes without layouts */}
        <Route path="/piv" component={PIV} />
        <Route path="/allocation" component={Allocation} />
        <Route path="/landing" exact component={Landing} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/index" exact component={Index} />
        <Route path="/auth" exact component={Index} />
        <Route path="/jobtypeset" exact component={JobTypeSet} />
        <Route path="/reviseallocation" exact component={ReviseAllocation} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/auth" />
      </Switch>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  </BrowserRouter>,
  document.getElementById("root")
);
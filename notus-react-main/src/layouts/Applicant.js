import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

//views
import NewApplicant from "views/applicant/NewApplicant";

export default function Applicant() {
    return (
        <>
          <Sidebar />
          <div className="relative md:ml-64 bg-blueGray-100 min-h-screen flex flex-col">
            {/* Content Wrapper */}
            <div className="flex-grow">
              <div className="bg-lightBlue-600 pt-32"></div>
              <div className="relative px-4 md:px-10 mx-auto w-full -m-24">
                <Switch>
                  <Route path="/applicant/newapplicant" exact component={NewApplicant} />
                  <Redirect from="/applicant" to="/applicant/newapplicant" />
                </Switch>
              </div>
            </div>

            {/* Footer Always at Bottom */}
            <FooterAdmin />
          </div>
        </>
    );
}

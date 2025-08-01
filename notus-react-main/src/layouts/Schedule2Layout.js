import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

//views
import NewApplicant from "views/applicant/NewApplicant";
import ModifyApplicant from "views/applicant/ModifyApplicant";
import AdminNavbar from "components/Navbars/AdminNavbar";
import HeaderStatsWithoutCards from "components/Headers/HeaderStatsWithoutCards";
import Schedule2 from "views/Schedule2/Schedule2"; // Adjust the import path as necessary


export default function Schedule2Layout() {
    return (
        <>
          <Sidebar />
          <div className="relative md:ml-64 bg-blueGray-100 min-h-screen flex flex-col">
            {/* Content Wrapper */}
            <HeaderStatsWithoutCards />
            <div className="flex-grow">
              {/* <div className="bg-lightBlue-600 pt-32"></div> */}
              <div className="relative px-4 md:px-10 mx-auto w-full  -m-24  ">
                <Switch>
                    <Route path="/schedule2" exact component={Schedule2} />
                  {/* <Route path="/applicant/newapplicant" exact component={NewApplicant} /> */}
                  {/* <Route path="/applicant/modifyapplicant" exact component={ModifyApplicant} /> */}
                  <Redirect from="/applicant" to="/applicant/newapplicant" />
                </Switch>
              </div>
            </div>

            {/* Footer Always at Bottom */}
            {/* <FooterAdmin /> */}
          </div>
        </>
    );
}

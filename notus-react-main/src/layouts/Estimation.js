import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Sidebar from "components/Sidebar/Sidebar.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderNoStats from "components/Headers/HeaderNoStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

import CostEstimation from "views/estimate/CostEstimation.js";
import StandardRates from "views/estimate/StandardRates.js";

export default function Estimation() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderNoStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/estimate/estimate" exact component={CostEstimation} />
            <Route path="/estimate/standard-rates" exact component={StandardRates} />

            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
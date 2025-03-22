import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";
import NewEstimateForm from "../views/estimate/NewEstimateForm";
import ModifyEstimateForm from "../views/estimate/ModifyEstimateForm";

export default function Estimate() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mode = searchParams.get("mode") || "new";

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/estimate/estimateform" exact render={() => (mode === "new" ? <NewEstimateForm /> : <ModifyEstimateForm />)} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
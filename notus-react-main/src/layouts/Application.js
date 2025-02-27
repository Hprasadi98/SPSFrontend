import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

//views
import NewApp from "views/application/NewApp";
import Tabs from "views/application/Application";

export default function Application() {
    return (
        <>
          <Sidebar />
          <div className="relative md:ml-64 bg-blueGray-100">
            <div className="bg-lightBlue-600 pt-32">
            </div>
            <div className="relative px-4 md:px-10 mx-auto w-full -m-24">
              <Switch>
                <Route path="/application/newapp" exact component={NewApp} />
                <Route path="/application/tabs" exact component={Tabs} />
                <Redirect from="/application" to="/application/newapp" />
              </Switch>
              <FooterAdmin />
            </div>
          </div>
        </>
      );
  }
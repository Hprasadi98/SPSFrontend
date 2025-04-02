import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";

export default function Auth() {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="relative w-full h-full py-40 min-h-screen" style={{ height: "100vh" }}>
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "linear-gradient(to bottom, #fcf577, #f3ce56, #e7a73c, #d8802a, #ba3e30, #a8253c, #901145, #2f2d4e, #1e293b, #1e293b, #1e293b, #1e293b)",
            }}
          ></div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  );
}

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ceb from "../../assets/img/ceb.png"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    history.push("/admin/dashboardCE");
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8081/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa("user:admin123"),
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      // const data = await response.json();
      const contentType = response.headers.get("content-type");
      let data;
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await response.json();
      } else {
        data = await response.text();
      }
      if (response.ok) {
        // Extract user level from the response
        const userlevel = data.userLevel; // Ensure the backend sends this value

        sessionStorage.setItem("user", JSON.stringify(data));
        sessionStorage.setItem("isAuthenticated", "true");

        if (userlevel === "CE") {
          history.push("/admin/dashboardCE");
        } else if (userlevel === "EE") {
          history.push("/admin/dashboardEE");
        } else {
          history.push("/landing"); // Default page
        }
        alert("Login successful");
        console.log("Login successful", data);
      } else {
        // Handle login error
        alert(
          "If you have not account, register first. If you registered verify your email address. Otherwise check your email address and password"
        );
        console.error("Login failed", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">-
              <div className="flex justify-center items-center">
                <img 
                alt="ceb logo"
                className="w-20 h-20"
                src={ceb}/>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-2">
                <div className="text-blueGray-400 text-center font-bold">
                  <small>Sign in with credentials</small>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link to="/auth/forgot" className="text-blueGray-200">
                  <small>Forgot password?</small>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

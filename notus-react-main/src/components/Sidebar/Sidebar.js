/*eslint-disable*/
import React from "react";
import { Link, useLocation } from "react-router-dom";
import ceb from "../../assets/img/ceb.png";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import AdminNavbar from "components/Navbars/AdminNavbar";
import colors from "tailwindcss/colors";

export default function Sidebar() {
  const location = useLocation();
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            <div className="flex justify-center items-center sticky">
              <img alt="ceb logo" className="w-20 h-20" src={ceb} />
            </div>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    <div className="flex justify-center items-center">
                      <img alt="ceb logo" className="w-20 h-20" src={ceb} />
                    </div>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            <div className="overflow-y-auto h-full">
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-sm py-3 block " +
                    (window.location.href.indexOf("/applicant/newapplicant") !==
                    -1
                      ? ""
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  style={
                    window.location.href.indexOf("/applicant/newapplicant") !==
                    -1
                      ? { color: "#b23200" }
                      : {}
                  }
                  to="/applicant/newapplicant"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/applicant/newapplicant"
                      ) !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Applicant Profile
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-sm py-3 block " +
                    (window.location.href.indexOf("/application/new") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  style={
                    window.location.href.indexOf("/application/new") !== -1
                      ? { color: "#b23200" }
                      : {}
                  }
                  to="/application/new"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/application/new") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Application Submission
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-sm py-3 block " +
                    (window.location.href.indexOf("/piv/newPiv") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  style={
                    window.location.href.indexOf("/piv/newPiv") !== -1
                      ? { color: "#b23200" }
                      : {}
                  }
                  to="/piv/newPiv"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/piv/newPiv") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Generate PIV
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-sm py-3 block " +
                    (window.location.href.indexOf("/estimation/estimate") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  style={
                    window.location.href.indexOf("/estimation/estimate") !== -1
                      ? { color: "#b23200" }
                      : {}
                  }
                  to="/estimation/estimate"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/estimation/estimate") !==
                      -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Standard Cost Estimate
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-sm py-3 block " +
                    (window.location.href.indexOf(
                      "/estimation/standard-rates"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  style={
                    window.location.href.indexOf(
                      "/estimation/standard-rates"
                    ) !== -1
                      ? { color: "#b23200" }
                      : {}
                  }
                  to="/estimation/standard-rates"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/estimation/standard-rates"
                      ) !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Approved Rate Schedule
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-sm py-3 block " +
                    (window.location.href.indexOf("/estimate/estimateform") !==
                    -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  style={
                    window.location.href.indexOf("/estimate/estimateform") !==
                    -1
                      ? { color: "#b23200" }
                      : {}
                  }
                  to="/estimate/estimateform"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/estimate/estimateform"
                      ) !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Detailed Work Estimate
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-sm py-3 block " +
                    (window.location.href.indexOf("/jobrevision/new") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  style={
                    window.location.href.indexOf("/jobrevision/new") !== -1
                      ? { color: "#b23200" }
                      : {}
                  }
                  to="/jobrevision/new"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/jobrevision/new") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Job Revision
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-sm py-3 block " +
                    (window.location.href.indexOf("/jobcontractor/new") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  style={
                    window.location.href.indexOf("/jobcontractor/new") !== -1
                      ? { color: "#b23200" }
                      : {}
                  }
                  to="/jobcontractor/new"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/jobcontractor/new") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Contractor Assignment
                </Link>
              </li>
              <li className="items-center">
                {/* <Link
                  className={
                    "text-sm py-3 block " +
                    (window.location.href.indexOf(
                      "/modifyProgress/addProMile"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  style={
                    window.location.href.indexOf("/modifyProgress/addProMile") !== -1
                      ? { color: "#b23200" }
                      : {  }
                  }
                  to="/modifyProgress/addProMile"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/modifyProgress/addProMile"
                      ) !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Progress Dashboard
                </Link> */}

                <div className="relative">
                  <button
                    className="text-sm py-3 block w-full text-left focus:outline-none"
                    onClick={() =>
                      setCollapseShow(
                        collapseShow === "progress" ? "" : "progress"
                      )
                    }
                    style={
                      window.location.href.indexOf("/modifyProgress/addProMile") !== -1
                        ? { color: "#b23200" }
                        : {}
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (window.location.href.indexOf(
                          "/modifyProgress/addProMile"
                        ) !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Progress Dashboard
                  </button>
                  {collapseShow === "progress" && (
                    <ul className="ml-4 px-4">
                      <li>
                        <Link
                          className="text-sm py-2 block text-blueGray-700 hover:text-blueGray-500"
                          to=""
                        >
                          <i
                            className={
                              "fas fa-envelope mr-2 text-sm " +
                              (window.location.href.indexOf("/letters/") !== -1
                                ? "opacity-75"
                                : "text-blueGray-300")
                            }
                          ></i>{" "}
                          Progress Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm py-2 block text-blueGray-700 hover:text-blueGray-500"
                          to="/modifyProgress/addProMile"
                        >
                          <i
                            className={
                              "fas fa-envelope mr-2 text-sm " +
                              (window.location.href.indexOf("/letters/") !== -1
                                ? "opacity-75"
                                : "text-blueGray-300")
                            }
                          ></i>{" "}
                          Add Progress Milestone
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm py-2 block text-blueGray-700 hover:text-blueGray-500"
                          to="/modifyProgress/progressBar"
                        >
                          <i
                            className={
                              "fas fa-envelope mr-2 text-sm " +
                              (window.location.href.indexOf("/letters/") !== -1
                                ? "opacity-75"
                                : "text-blueGray-300")
                            }
                          ></i>{" "}
                          Progress Bar
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-sm py-3 block " +
                    (window.location.href.indexOf(
                      "/allocation/allocationOCJ1"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  style={
                    window.location.href.indexOf(
                      "/allocation/allocationOCJ1"
                    ) !== -1
                      ? { color: "#b23200" }
                      : {}
                  }
                  to="/allocation/allocationOCJ1"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/allocation/allocationOCJ1"
                      ) !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Official Correspondence
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-sm py-3 block " +
                    (window.location.href.indexOf(
                      "/reviseallocation"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  style={
                    window.location.href.indexOf(
                      "/reviseallocation"
                    ) !== -1
                      ? { color: "#b23200" }
                      : {}
                  }
                  to="/reviseallocation"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/reviseallocation"
                      ) !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Revise Allocation
                </Link>
              </li>
            </ul>
            </div>
            {/* <hr className="my-2 md:min-w-full" /> */}
          </div>
          <div className="mt-64 sticky">
            <AdminNavbar />
          </div>
        </div>
      </nav>
    </>
  );
}

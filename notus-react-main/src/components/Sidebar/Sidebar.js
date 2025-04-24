/*eslint-disable*/
import React from "react";
import { Link, useLocation } from "react-router-dom";
import ceb from "../../assets/img/ceb.png";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

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
            <div className="flex justify-center items-center">
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

            {/* Divider
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6> */}
            {/* Navigation */}
            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none"> */}

            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>
              <li className="items-center">
              </li> */}

            {/* <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/applic") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/applic"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/applic") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Applicant
                </Link>
              </li> */}

            {/* <li>
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/application/applicant"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Applicant
                </Link>
              </li> */}

            {/* <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/settings"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Settings
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/tables") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/tables"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/tables") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Tables
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/maps"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/maps") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Maps
                </Link>
              </li>
            </ul> */}

            <hr className="my-2 md:min-w-full" />
            {/* Heading */}
            <Link
              className={
                "text-s font-bold block " +
                (window.location.href.indexOf("/applicant/newapplicant") !== -1
                  ? "text-lightBlue-500 hover:text-lightBlue-600"
                  : "text-blueGray-700 hover:text-blueGray-500")
              }
              to="/applicant/newapplicant"
            >
              <h6 className="md:min-w-full text-blueGray-500 text-sm font-bold block pt-1 no-underline">
                Customer
              </h6>
            </Link>

            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" /> */}

            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" /> */}
            {/* Heading */}
            {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Customer
            </h6> */}
            {/* Navigation */}

            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none"> */}
            {/* <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/applicant/newapplicant") !==
                    -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
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
                  New Customer
                </Link>
              </li> */}
            {/* <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/applicant/modifyapplicant"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/applicant/modifyapplicant"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/applicant/modifyapplicant"
                      ) !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Modify Customer
                </Link>
              </li> */}
            {/* </ul> */}

            <hr className="my-2 md:min-w-full" />
            {/* Heading */}
            <Link
              className={
                "text-s font-bold block " +
                (window.location.href.indexOf("/modifyProgress/addProMile") !==
                -1
                  ? "text-lightBlue-500 hover:text-lightBlue-600"
                  : "text-blueGray-700 hover:text-blueGray-500")
              }
              to="/modifyProgress/addProMile"
            >
              <h6 className="md:min-w-full text-blueGray-500 text-sm font-bold block pt-1 no-underline">
                Progress Monitering
              </h6>
            </Link>
            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" /> */}
            {/* Heading */}
            {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Progress Monitering
            </h6> */}
            {/* Navigation */}

            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/modifyProgress/addProMile"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
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
                  Add Progress Milestone
                </Link>
              </li> */}
            {/* <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/modifyProgress/modProgress"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/modifyProgress/modProgress"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/modifyProgress/modProgress"
                      ) !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Modify Progress
                </Link>
              </li> */}
            {/* </ul> */}

            {/* PIV */}
            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" /> */}
            {/* Heading */}
            {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              PIV
            </h6> */}
            {/* Navigation */}

            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/piv/newPiv") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
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
                  PIV NEW
                </Link>
              </li>
            </ul> */}
            {/* PIV END */}
            <hr className="my-2 md:min-w-full" />
            {/* Heading */}
            <Link
              className={
                "text-s font-bold block " +
                (window.location.href.indexOf("/piv/newPiv") !== -1
                  ? "text-lightBlue-500 hover:text-lightBlue-600"
                  : "text-blueGray-700 hover:text-blueGray-500")
              }
              to="/piv/newPiv"
            >
              <h6 className="md:min-w-full text-blueGray-500 text-sm font-bold block pt-1 no-underline">
              Generate PIV
              </h6>
            </Link>

            {/* Divider */}
            {/* Navigation */}
            <hr className="my-2 md:min-w-full" />
            {/* Heading */}
            <Link
              className={
                "text-s font-bold block " +
                (window.location.href.indexOf("/application/new") !== -1
                  ? "text-lightBlue-500 hover:text-lightBlue-600"
                  : "text-blueGray-700 hover:text-blueGray-500")
              }
              to="/application/new"
            >
              <h6 className="md:min-w-full text-blueGray-500 text-sm font-bold block pt-1 no-underline">
                Application
              </h6>
            </Link>

            {/* Divider */}
            <hr className="my-2 md:min-w-full" />
            {/* Heading */}
            <Link
              className={
                "text-s font-bold block " +
                (window.location.href.indexOf("/jobcontractor/new") !== -1
                  ? "text-lightBlue-500 hover:text-lightBlue-600"
                  : "text-blueGray-700 hover:text-blueGray-500")
              }
              to="/jobcontractor/new"
            >
              <h6 className="md:min-w-full text-blueGray-500 text-sm font-bold block pt-1 no-underline">
                Job Constructor
              </h6>
            </Link>
            {/* Navigation */}
            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"> */}

            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/jobcontractor/new") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
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
                  New Job Constructor
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/jobcontractor/modify") !==
                    -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/jobcontractor/modify"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/jobcontractor/modify") !==
                      -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Modify Job Constructor
                </Link>
              </li>
            </ul> */}

            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" /> */}
            {/* Heading */}
            {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Auth Layout Pages
            </h6> */}
            {/* Navigation */}

            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/auth/login"
                >
                  <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Login
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/auth/register"
                >
                  <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}
                  Register
                </Link>
              </li>
            </ul> */}

            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Standard Estimate
            </h6>

            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/estimation/estimate") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
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
                  New Estimate
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/estimation/modify-estimate"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/estimation/modify-estimate"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/estimation/modify-estimate"
                      ) !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Modify Estimate
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/estimation/standard-rates"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
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
                  CEB Standard Rates
                </Link>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Work Estimate Pages
            </h6>
            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"> */}
            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" /> */}
            {/* Heading */}
            {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              No Layout Pages
            </h6> */}
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/estimate/estimateform?mode=new"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/estimate/estimateform?mode=new"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/estimate/estimateform?mode=new"
                      ) !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  New Estimate
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/estimate/estimateform?mode=modify"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/estimate/estimateform?mode=modify"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/estimate/estimateform?mode=modify"
                      ) !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Modify Estimate
                </Link>
              </li>
            </ul>

            {/* allocation */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <Link
              className={
                "text-s py-3 font-bold block " +
                (window.location.href.indexOf("/allocation/allocationOCJ1") !== -1
                  ? "text-lightBlue-500 hover:text-lightBlue-600"
                  : "text-blueGray-700 hover:text-blueGray-500")
              }
              to="/allocation/allocationOCJ1"
            >
              <h6 className="md:min-w-full text-blueGray-500 text-s font-bold block pt-1 pb-4 no-underline">
                Letters
              </h6>
            </Link>

            {/* <hr className="my-4 md:min-w-full" /> */}
            {/* Heading */}
            {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Letters
            </h6> */}
            {/* Navigation */}

            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <div className="w-full">
                  <button
                    onClick={() => {
                      const submenu = document.getElementById("letterSubmenu");
                      submenu.classList.toggle("hidden");
                    }}
                    className={
                      "text-xs uppercase py-3 font-bold block w-full text-left outline-none focus:outline-none focus:ring-0 focus:shadow-none border-0" +
                      (window.location.href.indexOf("/letters/") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-envelope mr-2 text-sm " +
                        (window.location.href.indexOf("/letters/") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Con/Mnt/Area/Phm
                    <i className="fas fa-chevron-down ml-2 text-xs"></i>
                  </button>

                  <ul id="letterSubmenu" className="hidden pl-4">
                    <li className="items-center">
                      <Link
                        className={
                          "text-xs uppercase py-2 font-bold block " +
                          (window.location.href.indexOf(
                            "/allocation/allocationOCJ1"
                          ) !== -1
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                        }
                        to="/allocation/allocationOCJ1"
                      >
                        <i
                          className={
                            "fas fa-file-alt mr-2 text-sm " +
                            (window.location.href.indexOf(
                              "/allocation/allocationOCJ1"
                            ) !== -1
                              ? "opacity-75"
                              : "text-blueGray-300")
                          }
                        ></i>{" "}
                        Allocation Job
                      </Link>
                    </li>
                    <li className="items-center">
                      <Link
                        className="text-xs uppercase py-2 font-bold block text-blueGray-700 hover:text-lightBlue-500"
                        to="/letters/estimate-variance"
                      >
                        <i className="fas fa-file-alt mr-2 text-sm text-blueGray-300"></i>{" "}
                        Estimate Variance
                      </Link>
                    </li>
                    <li className="items-center">
                      <Link
                        className="text-xs uppercase py-2 font-bold block text-blueGray-700 hover:text-lightBlue-500"
                        to="/letters/contractor-offer"
                      >
                        <i className="fas fa-file-alt mr-2 text-sm text-blueGray-300"></i>{" "}
                        Contractor Offer
                      </Link>
                    </li>
                  </ul>
                  <button
                    onClick={() => {
                      const submenu = document.getElementById("letterSubmenu");
                      submenu.classList.toggle("hidden");
                    }}
                    className={
                      "text-xs uppercase py-3 font-bold block w-full text-left outline-none focus:outline-none focus:ring-0 focus:shadow-none border-0" +
                      (window.location.href.indexOf("/letters/") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-envelope mr-2 text-sm " +
                        (window.location.href.indexOf("/letters/") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Maintenace
                    <i className="fas fa-chevron-down ml-2 text-xs"></i>
                  </button>
                  <button
                    onClick={() => {
                      const submenu = document.getElementById("letterSubmenu");
                      submenu.classList.toggle("hidden");
                    }}
                    className={
                      "text-xs uppercase py-3 font-bold block w-full text-left outline-none focus:outline-none focus:ring-0 focus:shadow-none border-0" +
                      (window.location.href.indexOf("/letters/") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-envelope mr-2 text-sm " +
                        (window.location.href.indexOf("/letters/") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Area
                    <i className="fas fa-chevron-down ml-2 text-xs"></i>
                  </button>
                </div>
              </li>
            </ul> */}
            {/* allocationend */}

            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" /> */}
            {/* Heading */}
            {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Documentation
            </h6> */}
            {/* Navigation */}
            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/colors/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fas fa-paint-brush mr-2 text-blueGray-300 text-base"></i>
                  Styles
                </a>
              </li>
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-css3-alt mr-2 text-blueGray-300 text-base"></i>
                  CSS Components
                </a>
              </li>
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-angular mr-2 text-blueGray-300 text-base"></i>
                  Angular
                </a>
              </li>
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-js-square mr-2 text-blueGray-300 text-base"></i>
                  Javascript
                </a>
              </li>
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-react mr-2 text-blueGray-300 text-base"></i>
                  NextJS
                </a>
              </li>
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-react mr-2 text-blueGray-300 text-base"></i>
                  React
                </a>
              </li>
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fas fa-link mr-2 text-blueGray-300 text-base"></i>
                  Svelte
                </a>
              </li>
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-vuejs mr-2 text-blueGray-300 text-base"></i>
                  VueJS
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
}

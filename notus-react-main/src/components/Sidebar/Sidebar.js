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
            {/* Divider */}

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
                Applicant
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
                (window.location.href.indexOf("/piv/newPiv") !== -1
                  ? "text-lightBlue-500 hover:text-lightBlue-600"
                  : "text-blueGray-700 hover:text-blueGray-500")
              }
              to="/piv/newPiv"
            >
              <h6 className="md:min-w-full text-blueGray-500 text-sm font-bold block pt-1 no-underline">
                Generate PIV
              </h6>
            </Link>

            {/* Divider */}
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

            {/* Divider */}
            <hr className="my-2 md:min-w-full" />
            {/* Heading */}
            <Link
              className={
                "text-s font-bold block " +
                (window.location.href.indexOf("/estimate/estimateform") !== -1
                  ? "text-lightBlue-500 hover:text-lightBlue-600"
                  : "text-blueGray-700 hover:text-blueGray-500")
              }
              to="/estimate/estimateform"
            >
              <h6 className="md:min-w-full text-blueGray-500 text-sm font-bold block pt-1 no-underline">
                Work Estimate
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
                Revise Job
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

            {/* Divider */}
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
                Progress Monitoring
              </h6>
            </Link>

            {/* allocation */}
            <hr className="my-2 md:min-w-full" />
            {/* Heading */}
            <Link
              className={
                "text-s font-bold block " +
                (window.location.href.indexOf("/allocation/allocationOCJ1") !==
                -1
                  ? "text-lightBlue-500 hover:text-lightBlue-600"
                  : "text-blueGray-700 hover:text-blueGray-500")
              }
              to="/allocation/allocationOCJ1"
            >
              <h6 className="md:min-w-full text-blueGray-500 text-sm font-bold block pt-1 no-underline">
                Letter
              </h6>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

import React from "react";
import Navbar from "./Navbar";

const HeaderNav = () => {
  return (
    <>
      <header className="init">
        {/* subnav */}
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="subnav">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <div className="right">
                  <div className="social-icons-subnav">
                    <a data-toggle="modal" data-target="#fLogin">
                      <span className="ti-lock" /> Login
                    </a>
                  </div>
                  <div className="social-icons-subnav hidden-sm hidden-xs">
                    <a data-toggle="modal" data-target="#fsignUp">
                      <span className="ti-user" /> Sign up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Navbar />
      </header>
    </>
  );
};

export default HeaderNav;

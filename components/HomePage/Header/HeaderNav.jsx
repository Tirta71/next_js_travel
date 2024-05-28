"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import Swal from "sweetalert2";

const HeaderNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserName = localStorage.getItem("username");

    if (token && storedUserName) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);

    Swal.fire({
      title: "Logged out",
      text: "You have been logged out successfully.",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  };

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
                  {isLoggedIn ? (
                    <>
                      <div className="social-icons-subnav hidden-sm hidden-xs">
                        <Link href="">
                          <span className="ti-user" /> {userName}
                        </Link>
                      </div>
                      <div className="social-icons-subnav hidden-sm hidden-xs">
                        <a onClick={handleLogout} style={{ cursor: "pointer" }}>
                          <span className="ti-power-off" /> Sign-out
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
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

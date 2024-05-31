"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

const HeaderBooking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryParams = searchParams.toString();

  const handleBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <section id="tab-commerce" className="no-bottom">
      <div className="container-fluid m-5-hor">
        <div className="row">
          <div className="board">
            <div className="board-inner">
              <ul className="nav nav-tabs">
                <div className="liner" />

                <li className={pathname === "/booking" ? "active" : ""}>
                  <a href="#" onClick={handleBack}>
                    <span className="title">Process</span>
                    <span className="round-tabs step" />
                  </a>
                </li>
                <li className={pathname === "/booking/payment" ? "active" : ""}>
                  <a href="#" onClick={handleBack}>
                    <span className="title">Payment</span>
                    <span className="round-tabs step" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderBooking;

"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

const SubHeaderBooking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryParams = searchParams.toString();

  const handleBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <section id="subheader-commerce">
      <div className="container-fluid m-5-hor">
        <div className="row">
          <div className="col-md-12">
            <h1>CheckOut</h1>
            <div className="commerce-step">
              <a
                className={pathname === "/booking" ? "active" : ""}
                href="#"
                onClick={handleBack}
              >
                Process
              </a>
              <a
                className={pathname === "/booking/payment" ? "active" : ""}
                href="#"
                onClick={handleBack}
              >
                Payment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHeaderBooking;

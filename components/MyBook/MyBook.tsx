import React from "react";
import ContentBooking from "./ContentBooking";

const MyBook = () => {
  return (
    <div className="content-wrapper">
      <section id="subheader">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-heading">My Booking</h1>
            </div>
          </div>
        </div>
      </section>
      <ContentBooking />
    </div>
  );
};

export default MyBook;

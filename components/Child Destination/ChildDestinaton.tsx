import React from "react";
import DestinationContent from "./Content Destination/DestinationContent";

const ChildDestinaton = () => {
  return (
    <>
      <div className="content-wrapper">
        {/* subheader */}
        <section id="subheader">
          <div className="container-fluid m-5-hor">
            <div className="row">
              <div className="col-md-12">
                <h1 className="big-heading">Our Destination</h1>
                <p>Varius blandit sit amet</p>
              </div>
            </div>
          </div>
        </section>

        <DestinationContent />
      </div>
    </>
  );
};

export default ChildDestinaton;

import React from "react";
import ChildDetailOrder from "./ChildDetailOrder";

interface DetailOrderProps {
  id: string;
}
const DetailOrder: React.FC<DetailOrderProps> = ({ id }) => {
  return (
    <div className="content-wrapper">
      <section id="subheader-commerce">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h1>Detail Booking</h1>
            </div>
          </div>
        </div>
      </section>

      <ChildDetailOrder id={id} />
    </div>
  );
};

export default DetailOrder;

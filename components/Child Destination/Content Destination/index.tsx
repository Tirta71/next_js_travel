import React from "react";
import DestinationContent from "./DestinationContent";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Tour {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  about: string;
  location: string;
  price: number;
  days: number;
  category: Category;
}

interface ChildDestinationProps {
  tours: Tour[];
  categories: Category[];
}

const Destination: React.FC<ChildDestinationProps> = ({
  tours,
  categories,
}) => {
  return (
    <>
      <div className="content-wrapper">
        {/* subheader */}
        <section id="subheader">
          <div className="container-fluid m-5-hor">
            <div className="row">
              <div className="col-md-12">
                <h1 className="big-heading">All Destination</h1>
                <p>This All Destinations for you</p>
              </div>
            </div>
          </div>
        </section>

        <DestinationContent tours={tours} categories={categories} />
      </div>
    </>
  );
};

export default Destination;

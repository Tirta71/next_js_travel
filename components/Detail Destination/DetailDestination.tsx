/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import formatRupiah from "@/utils/formatRupiah";
import ChildDestination from "./ChildDestination";

interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
}

interface PackagePhoto {
  id: number;
  photo: string;
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
  package_photos: PackagePhoto[];
}

interface DetailDestinationProps {
  tour: Tour;
}

const DetailDestination: React.FC<DetailDestinationProps> = ({ tour }) => {
  return (
    <div className="content-wrapper">
      <section id="subheader">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-heading">Destination {tour.name}</h1>
              <p>{tour.name}</p>
            </div>
          </div>
        </div>
      </section>

      <ChildDestination tour={tour} />
    </div>
  );
};

export default DetailDestination;

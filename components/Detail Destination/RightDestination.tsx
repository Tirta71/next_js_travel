import React from "react";
import formatRupiah from "@/utils/formatRupiah";
import Link from "next/link";

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

interface RightDestinationProps {
  tour: Tour;
}

const RightDestination: React.FC<RightDestinationProps> = ({ tour }) => {
  return (
    <>
      <div className="col-md-4">
        <aside>
          <div className="widget">
            <div
              className="service-hotel onStep animated fadeInUp"
              data-animation="fadeInUp"
              data-time={1200}
            >
              <div className="price">
                {formatRupiah(tour.price)}
                <sub>/ Per Person</sub>
              </div>

              {/* spacer */}
              <div className="space-half" />
              <h3 className="big-heading">Tours Details</h3>
              <div className="devider-rooms-detail" />
              <span>
                <i className="ti-check-box" /> {tour.slug}
              </span>
              <span>
                <i className="ti-check-box" /> Location {tour.location}
              </span>

              <span>
                <i className="ti-check-box" /> {tour.days} Days
              </span>
            </div>
            <a className="btn-book" href="ecommerce-form.html">
              BOOK NOW
            </a>
          </div>

          <div className="widget">
            <h4 className="big-heading">Tags</h4>
            <div className="devider-widget"></div>
            <div className="tags">
              <div>
                <Link href={`/categories/${tour.category.slug}`}>
                  <span>{tour.category.name}</span>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default RightDestination;

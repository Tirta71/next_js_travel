import React from "react";
import LeftDestination from "./LeftDestination";
import RightDestination from "./RightDestination";

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

interface ChildDestinationProps {
  tour: Tour;
}

const ChildDestination: React.FC<ChildDestinationProps> = ({ tour }) => {
  return (
    <>
      <section aria-label="section-blog" id="content">
        <div className="container-fluid">
          <div className="row">
            <div className="v-align">
              <div className="col-md-11 col-xs-12">
                <div className="row">
                  <LeftDestination
                    name={tour.name}
                    about={tour.about}
                    package_photos={tour.package_photos}
                  />
                  <RightDestination tour={tour} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChildDestination;

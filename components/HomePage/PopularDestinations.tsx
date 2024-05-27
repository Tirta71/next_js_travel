/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  icon: string;
  slug: string;
  tour_count: number;
}

interface PopularDestinationsProps {
  categories: Category[];
}

const PopularDestinations: React.FC<PopularDestinationsProps> = ({
  categories,
}) => {
  const [thumbnails, setThumbnails] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchImages = () => {
      const thumbnailsMap: { [key: number]: string } = {};
      categories.forEach((category) => {
        thumbnailsMap[
          category.id
        ] = `https://source.unsplash.com/1600x900/?${category.name}`;
      });
      setThumbnails(thumbnailsMap);
    };

    fetchImages();
  }, [categories]);

  return (
    <>
      <section className="whitepage">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="big-heading">Popular destinations</h3>
              <span className="sub-heading-content">An optional subtitle</span>
              <span className="devider-left" />
            </div>

            {categories.slice(0, 4).map((category) => (
              <div
                className="col-lg-3 col-md-3 col-sm-6 col-xs-12"
                key={category.id}
              >
                <div className="feature-1">
                  <div className="cont-img">
                    <img
                      alt={category.name}
                      className="img-responsive"
                      src={thumbnails[category.id]}
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="cont-detail">
                    <h3 className="big-heading pb-5">
                      <span className="color">{category.name}</span>{" "}
                      <sup className="subtour">{category.tour_count} Tours</sup>
                    </h3>
                    <Link href={`/categories/${category.slug}`}>
                      <span className="btn-content">View More</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularDestinations;

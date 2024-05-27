/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";

interface Category {
  id: number;
  name: string;
  icon: string;
  slug: string;
  tour_count: number;
}

interface TopRatedProps {
  categories: Category[];
}

const TopRated: React.FC<TopRatedProps> = ({ categories }) => {
  return (
    <>
      <section aria-label="top-rated">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-6 sp-padding">
              <img
                alt="top-rated"
                className="img-responsive"
                src="img/img-top-rated.jpg"
              />
            </div>
            <div className="col-md-6 p-30">
              <h3 className="big-heading">Top Rated Our Tours</h3>
              <span className="sub-heading-content">
                Discover the best tours
              </span>
              <span className="devider-left" />
              <p>
                Discover a wide variety of travel destinations. Whether you seek
                adventure, relaxation, or cultural immersion, we have the
                perfect tour for you.
              </p>
              <div id="tag-country">
                {categories.map((category) => (
                  <a
                    key={category.id}
                    href={`/categories/${category.slug}`}
                    className="list-country"
                  >
                    {category.name} <sup>({category.tour_count}) tours</sup>
                  </a>
                ))}
              </div>
              <Link href={"/destination"}>
                <span className="btn-content">ALL DESTINATION</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopRated;

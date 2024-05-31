import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Category {
  id: number;
  name: string;
  icon: string;
  slug: string;
  tour_count: number;
}

interface FeatureProps {
  categories: Category[];
}

const Feature: React.FC<FeatureProps> = ({ categories }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="whitepage no-bottom no-top no-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="no-gutter">
              {categories.slice(0, 3).map((category, index) => (
                <div
                  className="col-md-4"
                  key={category.id}
                  data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                >
                  <div className="features no-margin">
                    <div className="bg-img">
                      <h3 className="big-heading">
                        {category.name}{" "}
                        <sup className="subtour">
                          {category.tour_count} Tours
                        </sup>
                      </h3>

                      <Link href={`/categories/${category.slug}`}>
                        <span className="shine" />
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;

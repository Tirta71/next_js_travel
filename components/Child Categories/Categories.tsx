import React from "react";
import ContentCategories from "./ContentCategories";

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

interface CategoriesProps {
  slug: string;
  tours: Tour[];
}

const Categories: React.FC<CategoriesProps> = ({ slug, tours }) => {
  return (
    <div className="content-wrapper">
      <section id="subheader">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-heading">Our Tour for {slug} </h1>
              <p>This is our tour for {slug}</p>
            </div>
          </div>
        </div>
      </section>

      <ContentCategories tours={tours} />
    </div>
  );
};

export default Categories;

// components/Child Categories/Categories.tsx
import Link from "next/link";
import React from "react";
import ContentCategories from "./ContentCategories";

interface CategoriesProps {
  slug: string;
}

const Categories: React.FC<CategoriesProps> = ({ slug }) => {
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

      <ContentCategories slug={slug} />
    </div>
  );
};

export default Categories;

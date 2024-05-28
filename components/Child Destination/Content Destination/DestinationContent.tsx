/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import DestinationSearch from "./DestinationSearch";
import DestinationCard from "./DestinationCard";

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

interface DestinationContentProps {
  tours: Tour[];
  categories: Category[];
}

const DestinationContent: React.FC<DestinationContentProps> = ({
  tours,
  categories,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTours, setFilteredTours] = useState<Tour[]>(tours);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (keyword: string, category: string) => {
    const filtered = tours.filter((tour) => {
      const matchesKeyword = tour.name
        .toLowerCase()
        .includes(keyword.toLowerCase());
      const matchesCategory =
        category === "" || tour.category.slug === category;
      return matchesKeyword && matchesCategory;
    });
    setFilteredTours(filtered);
    setCurrentPage(1); // Reset to the first page
  };

  const currentTours = filteredTours.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section aria-label="section-blog" id="content">
      <div className="container-fluid m-5-hor">
        <div className="row">
          <DestinationSearch
            categories={categories}
            onSearch={handleSearch}
            totalResults={filteredTours.length}
          />
          {currentTours.length > 0 ? (
            currentTours.map((tour) => (
              <DestinationCard key={tour.id} tour={tour} />
            ))
          ) : (
            <div
              className="col-md-9 flex justify-center items-center"
              style={{ minHeight: "300px" }}
            >
              <p className="text-center text-lg">Not Found</p>
            </div>
          )}
        </div>
        {currentTours.length > 0 && (
          <div className="flex justify-center mt-6">
            <nav className="flex">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 mx-1 rounded bg-gray-200 text-gray-600 hover:bg-gray-300"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-1 mx-1 rounded ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 mx-1 rounded bg-gray-200 text-gray-600 hover:bg-gray-300"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationContent;

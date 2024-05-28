import React, { useState } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface DestinationSearchProps {
  categories: Category[];
  onSearch: (keyword: string, category: string) => void;
  totalResults: number;
}

const DestinationSearch: React.FC<DestinationSearchProps> = ({
  categories,
  onSearch,
  totalResults,
}) => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword, category);
  };

  return (
    <>
      <div className="col-md-3">
        <div
          className="frm-search"
          style={{ background: "url(img/bg-search-ver.jpg)" }}
        >
          <div className="container-fluid m-5-hor m-5-hor-dev">
            <div className="row">
              <form className="form-inline" id="sform" onSubmit={handleSearch}>
                <div className="form-group">
                  <h3 className="big-heading">Search Results</h3>
                  <span className="result">{totalResults} Results Found</span>
                </div>
                <div className="form-group search-icn">
                  <label htmlFor="key">Keyword</label>
                  <input
                    type="text"
                    className="form-control w-full px-4 py-2 rounded-md text-black"
                    id="key"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="select-trip">Select your trip</label>
                  <select
                    id="select-trip"
                    name="select-trip"
                    className="form-control w-full px-4 py-2 rounded-md text-black"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Any</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.slug}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  className="btn-frm-search"
                  value="FIND NOW"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationSearch;

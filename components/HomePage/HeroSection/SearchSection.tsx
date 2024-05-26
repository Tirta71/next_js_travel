import React from "react";

const SearchSection: React.FC = () => {
  return (
    <section className="frm-clean">
      <div className="container-fluid">
        <div className="row">
          <form id="sform" className="form-inline clean">
            <div className="col-md-2 search-icn">
              <label htmlFor="key">
                <span className="ti-world color" /> Keyword
              </label>
              <input type="text" className="form-control" required id="key" />
            </div>
            <div className="col-md-2">
              <label>
                <span className="ti-menu-alt color" /> Select your trip
              </label>
              <select className="cust-select" name="select-trip" required>
                <option value="Any">Any</option>
                <option value="City Travel">City Travel</option>
                <option value="Cultural Travel">Cultural Travel</option>
                <option value="Family Travel">Family Travel</option>
                <option value="Holiday Travel">Holiday Travel</option>
                <option value="Luxury Travel">Luxury Travel</option>
                <option value="Wild & Adventure Travel">
                  Wild & Adventure Travel
                </option>
              </select>
            </div>
            <div className="col-md-2">
              <label>
                <span className="ti-map-alt color" /> Destination
              </label>
              <select className="cust-select" name="destination" required>
                <option value="Any">Any</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Australia">Australia</option>
                <option value="Europe">Europe</option>
                <option value="Russia">Russia</option>
              </select>
            </div>
            <div className="col-md-2">
              <label>
                <span className="ti-time color" /> Duration
              </label>
              <select className="cust-select" name="duration" required>
                <option value="Any">Any</option>
                <option value="1 Day Travel">1 Day Travel</option>
                <option value="2 Days Travel">2 Days Travel</option>
                <option value="3 Days Travel">3 Days Travel</option>
                <option value="4 Days Travel">4 Days Travel</option>
                <option value="5 Days Travel">5 Days Travel</option>
                <option value="1 Week Travel">1 Week Travel</option>
              </select>
            </div>
            <div className="col-md-2">
              <label>
                <span className="ti-calendar color" /> Date
              </label>
              <div id="filterDate2">
                <div className="input-group date" data-date-format="dd/mm/yyyy">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                    required
                  />
                  <div className="input-group-addon">
                    <span className="fa fa-calendar" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <input
                className="btn-frm-search"
                value="FIND NOW"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;

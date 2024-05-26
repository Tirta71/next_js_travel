import React from "react";

const DestinationSearch: React.FC = () => {
  return (
    <>
      {/* left content */}
      <div className="col-md-3">
        <div
          className="frm-search"
          style={{ background: "url(img/bg-search-ver.jpg)" }}
        >
          <div className="container-fluid m-5-hor m-5-hor-dev">
            <div className="row">
              <form className="form-inline" id="sform">
                <div className="form-group">
                  <h3 className="big-heading">Search Results</h3>
                  <span className="result">9 Results Found</span>
                </div>
                <div className="form-group search-icn">
                  <label htmlFor="key">Keyword</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    id="key"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="select-trip">Select your trip</label>
                  <select id="select-trip" name="select-trip" required>
                    <option value="">Any</option>
                    <option value="city">City Travel</option>
                    <option value="cultural">Cultural Travel</option>
                    <option value="family">Family Travel</option>
                    <option value="holiday">Holiday Travel</option>
                    <option value="luxury">Luxury Travel</option>
                    <option value="adventure">Wild & Adventure Travel</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="destination">Destination</label>
                  <select id="destination" name="destination" required>
                    <option value="">Any</option>
                    <option value="asia">Asia</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="australia">Australia</option>
                    <option value="europe">Europe</option>
                    <option value="rusia">Rusia</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="duration">Duration</label>
                  <select id="duration" name="duration" required>
                    <option value="">Any</option>
                    <option value="1day">1 Day Travel</option>
                    <option value="2days">2 Days Travel</option>
                    <option value="3days">3 Days Travel</option>
                    <option value="4days">4 Days Travel</option>
                    <option value="5days">5 Days Travel</option>
                    <option value="1week">1 week Travel</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <div id="filterDate2">
                    {/* Datepicker as text field */}
                    <div
                      className="input-group date"
                      data-date-format="dd/mm/yyyy"
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                        required
                        id="date"
                      />
                      <div className="input-group-addon">
                        <span className="fa fa-calendar" />
                      </div>
                    </div>
                  </div>
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
        {/* section search end */}
      </div>
      {/* left content end */}
    </>
  );
};

export default DestinationSearch;

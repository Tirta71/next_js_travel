/* eslint-disable @next/next/no-img-element */
import React from "react";
import DestinationSearch from "./DestinationSearch";

const DestinationContent = () => {
  return (
    <>
      <section aria-label="section-blog" id="content">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <DestinationSearch />

            <div className="col-md-9">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="gal-home">
                    <a href="projects-detail.html">
                      <div className="hovereffect">
                        <img
                          alt="imageportofolio"
                          className="img-responsive"
                          src="img/gallery-home/img1.jpg"
                        />
                      </div>
                      <div className="gal-home-content">
                        <div className="row">
                          <div className="col-md-8">
                            <h4 className="autoheight">Blue Ocean Island</h4>
                            <p>Duration 5 days</p>
                            <div className="star-content">
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star-o" aria-hidden="true" />
                            </div>
                            <div className="review-cont big-heading">
                              1 Reviews
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="heading-price">From</div>
                            <div className="price big-heading">$ 1200</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="gal-home">
                    <a href="projects-detail.html">
                      <div className="hovereffect">
                        <img
                          alt="imageportofolio"
                          className="img-responsive"
                          src="img/gallery-home/img2.jpg"
                        />
                      </div>
                      <div className="gal-home-content">
                        <div className="row">
                          <div className="col-md-8">
                            <h4 className="autoheight">Luxury Asia Travel</h4>
                            <p>Duration 5 days</p>
                            <div className="star-content">
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star-o" aria-hidden="true" />
                            </div>
                            <div className="review-cont big-heading">
                              1 Reviews
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="heading-price">From</div>
                            <div className="price big-heading">$ 1200</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationContent;

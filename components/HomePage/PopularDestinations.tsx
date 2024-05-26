/* eslint-disable @next/next/no-img-element */
import React from "react";

const PopularDestinations = () => {
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
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="feature-1">
                <div className="cont-img">
                  <img
                    alt="img-cont"
                    className="img-responsive"
                    src="img/img-fea-1.jpg"
                  />
                </div>
                <div className="cont-detail">
                  <h3 className="big-heading">
                    <span className="color">ASIA</span>{" "}
                    <sup className="subtour">7 Tours</sup>
                  </h3>
                  <p className="max-char">
                    Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi,
                    id ius elitr saperet,ocurreret pertinacia pri an. No mei
                    nibh consectetuer
                  </p>
                  <div className="star-content color">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                  </div>
                  <a href="#" className="btn-content">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="feature-1">
                <div className="cont-img">
                  <img
                    alt="img-cont"
                    className="img-responsive"
                    src="img/img-fea-2.jpg"
                  />
                </div>
                <div className="cont-detail">
                  <h3 className="big-heading">
                    <span className="color">AFRICA</span>{" "}
                    <sup className="subtour">22 Tours</sup>
                  </h3>
                  <p className="max-char">
                    Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi,
                    id ius elitr saperet,ocurreret pertinacia pri an. No mei
                    nibh consectetuer
                  </p>
                  <div className="star-content color">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                  </div>
                  <a href="#" className="btn-content">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="feature-1">
                <div className="cont-img">
                  <img
                    alt="img-cont"
                    className="img-responsive"
                    src="img/img-fea-3.jpg"
                  />
                </div>
                <div className="cont-detail">
                  <h3 className="big-heading">
                    <span className="color">AUSTRALIA</span>{" "}
                    <sup className="subtour">20 Tours</sup>
                  </h3>
                  <p className="max-char">
                    Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi,
                    id ius elitr saperet,ocurreret pertinacia pri an. No mei
                    nibh consectetuer
                  </p>
                  <div className="star-content color">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                  </div>
                  <a href="#" className="btn-content">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="feature-1">
                <div className="cont-img">
                  <img
                    alt="img-cont"
                    className="img-responsive"
                    src="img/img-fea-4.jpg"
                  />
                </div>
                <div className="cont-detail">
                  <h3 className="big-heading">
                    <span className="color">EROUPE</span>{" "}
                    <sup className="subtour">12 Tours</sup>
                  </h3>
                  <p className="max-char">
                    Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi,
                    id ius elitr saperet,ocurreret pertinacia pri an. No mei
                    nibh consectetuer
                  </p>
                  <div className="star-content color">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                  </div>
                  <a href="#" className="btn-content">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularDestinations;

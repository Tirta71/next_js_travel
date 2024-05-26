/* eslint-disable @next/next/no-img-element */
const TopRated = () => {
  return (
    <>
      <section aria-label="top-rated">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-6 sp-padding ">
              <img
                alt="top-rated"
                className="img-responsive"
                src="img/img-top-rated.jpg"
              />
            </div>
            <div className="col-md-6 p-30">
              <h3 className="big-heading">Top Rated Our Tours</h3>
              <span className="sub-heading-content">No mei consectetuer</span>
              <span className="devider-left" />
              <p>
                Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi, id
                ius elitr saperet,ocurreret pertinacia pri an. No mei nibh
                consectetuer
              </p>
              <div id="tag-country">
                <a href="#" className="list-country">
                  Europe <sup>(40)tours</sup>
                </a>
                <a href="#" className="list-country">
                  Australia <sup>(40)tours</sup>
                </a>
                <a href="#" className="list-country">
                  America <sup>(40)tours</sup>
                </a>
                <a href="#" className="list-country">
                  Asia <sup>(40)tours</sup>
                </a>
                <a href="#" className="list-country">
                  Africa <sup>(40)tours</sup>
                </a>
                <a href="#" className="list-country">
                  Japan <sup>(40)tours</sup>
                </a>
                <a href="#" className="list-country">
                  Rusian <sup>(40)tours</sup>
                </a>
              </div>
              <a href="#" className="btn-content">
                ALL DESTINATION
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopRated;

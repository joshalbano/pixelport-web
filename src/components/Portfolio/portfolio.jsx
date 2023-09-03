/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const Portfolio = ({ grid, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Portfolio
              </h6>
              <h3 className="wow color-font">
                Our Recent Web Design &amp; <br /> Some Past Projects.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={`${grid === 3 ? "container-fluid" : "container"}`}>
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              {/* <span data-filter=".brand">Branding</span>
              <span data-filter=".web">Mobile App</span>
              <span data-filter=".graphic">Creative</span> */}
            </div>
          </div>

          <div className="gallery full-width">
          <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a  rel="noreferrer" href='https://lagueslo.com' target="_blank" className="imago wow">
                    <img src="/img/lagueslooo.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
              <div className="cont">
                <h6>Lagueslo</h6>
                <span>
                  Digital Solutions
                </span>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6 lg-mr"
                  : "col-12"
              } items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                {/* <Link href={`https://vegasgt.com`}> */}
                  <a  rel="noreferrer" href='https://vegasgt.com' target="_blank" className="imago wow">
                    <img  src="/img/VegasGT_LOGO.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                {/* </Link> */}
                <br></br>
                <br></br>
              </div>
              <div className="cont">
                <h6>Vegas GT</h6>
                <span>
                 Online Gaming/Casino
                </span>
              </div>
            </div>







          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

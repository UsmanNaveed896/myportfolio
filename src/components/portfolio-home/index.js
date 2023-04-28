import React from "react";
import Img from  '../../Assets/images/home-bg.jpg'
// import "./style.scss";
// import '../portfolio-home/responsive-home.scss'
export default () => {
  return (
    <>
      <div className="col-md-3"></div>
      <div className="usman relative">
        <div className="col-md-10 home-main h-[100vh] bg-no-repeat bg-cover" style={{backgroundImage : `url(${Img})`}}>
          <div className="banner  top-[30%] left-[20%] md:top-[40%] md:left-[40%] absolute text-4xl md:text-6xl">
            <div className="main-heading">
              <h1>
                usman{" "}
                <span
                  className="yy"
                  style={{ color: "#00A3E1", fontWeight: 900 }}
                >
                  naveed
                </span>{" "}
              </h1>
            </div>
          </div>
          {/* #usman naveed */}
          <div className="animation top-[40%] left-[20%] md:top-[50%] md:left-[40%] absolute text-4xl md:text-6xl text-white">
            <div class="header-caption" id="page-top">
              {/* <!-- type headline start--> */}
              <h3 class="cd-headline clip is-full-width">
                <span>I'm &nbsp;</span>
                <span class="cd-words-wrapper">
                  <b class="is-visible"> Frontend Developer.</b>
                  <b class="is-hidden">React JS Developer.</b>
                </span>
              </h3>
              {/* <!-- type headline end --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

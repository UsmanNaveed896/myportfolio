import React from "react";
import Img from '../../Assets/images/home-bg.jpg'
import "./style.scss";
// import '../portfolio-home/responsive-home.scss'
export default () => {
  return (
    <>
      <div className="col-md-3"></div>
      <div className="usman relative">
        <div className="col-md-10 home-main h-[100vh] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Img})` }}>
          <div className="banner  top-[40%] left-[20%] md:top-[40%] md:left-[40%] absolute text-4xl md:text-6xl">
            <div className="main-heading">
              <h1 className="text-4xl md:text-6xl uppercase">
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
          <main class="container">
            <p  class="animation top-[50%] left-[22%] md:top-[50%] md:left-[44%] absolute text-white text-4xl font-semibold"> I'm</p>
            <section class="animation top-[50%] left-[34%] md:top-[51%] md:left-[48%] absolute">
              <div class="first text-white text-3xl "><div  class="first text-white text-3xl rounded-full">Frontend Developer</div></div>
              <div class="second text-white  text-3xl"><div  class="first text-white text-3xl rounded-full">React JS Developer</div></div>
              <div class="third text-white  text-3xl"><div  class="first text-white text-3xl rounded-full">Web Developer</div></div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

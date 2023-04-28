import React from "react";
import "./style.scss";
import "../../Assets/style/mainstyle.scss";
import '../Aboutme/responsive-about.scss'
import Img1 from '../../Assets/images/react.png'
import Img2 from '../../Assets/images/next.png'
import Img3 from '../../Assets/images/html.png'
import Img4 from '../../Assets/images/nodejs.png'
export default () => {
 
  return (
    <>
    <div className="grid grid-cols-12">
    <div class="col-span-3  bg-[#2c2d2f] md:grid hidden">
    </div>
  <div class="md:col-span-9 col-span-12  bg-[#2c2d2f]">
  <div className="about-me ">
        <div className="container information d-flex justify-cont-bet ">
          <div className="about-heading clr-blue font-bold text-6xl mt-24 md:mt-4  pb-6">
            About Me
          </div>
        </div>
        <div className="personal-info flex justify-evenly  mt-5">
          <div className="col-md-5 dev-objective">
            <h3 className="text-4xl font-bold">Frontend Web Developer</h3>
            <p className=" w-100% md:w-[800px] mt-6">
              I am Frontend Developer interested in working for a stable company
              that will encourage my growth and development to be the most
              efficient and effective employee I can possibly be.
            </p>
          </div>
          <div className="col-md-5 my-info">
            <h3 className="text-4xl font-bold mt-6 md:mt-0">Personal Information</h3>
            <p className="mt-6">
              <span>Name</span> : Usman Naveed
            </p>
            <p>
              <span>Date of Birth</span> : 11-06-1995
            </p>
            <p>
              <span>Residence</span> : Abbottabad,Pakistan
            </p>
            <p>
              <span>Address</span> : Muhallah Musazai Nawanshehr,Abbottabad
            </p>
            <p>
              <span>Email</span> : Usmann207@gmail.com
            </p>
            <p>
              <span>Phone</span> : 0315-5270527
            </p>
            <p>
              <span>Freelance</span> : Available
            </p>
          </div>
        </div>
        <div className="my-services mt-16">
          <div className="main-head flex clr-white">
            <div>
              <h2 className="text-4xl font-bold mt-16">SERVICES</h2>
            </div>
          </div>
          <div className="container my-offerings flex justify-evenly mt-5">
            <div className="web-development text-center">
              <i className="lnr lnr-laptop font-40 clr-blue"></i>
              <h4 className="clr-white text-normal md:text-2xl font-bold">Web Development</h4>
              <p className="clr-white mt-4  text-xs md:text-lg w-[130px] md:w-[310px]">
              IT involves creating visually appealing and  user-friendly websites that are tailored to meet the specific needs of clients.
              </p>
            </div>

            <div className="web-development text-align">
              <i className="lnr lnr-eye font-40 clr-blue"></i>
              <h4 className="clr-white mt-2 text-normal md:text-2xl font-bold">Web Design</h4>
              <p className="clr-white mt-4 text-xs md:text-lg w-[130px] md:w-[310px]">
              Changing any FIGMA or PSD to HTML and CSS through professional techniques. 
              </p>
            </div>

            <div className="web-development text-align">
              <i className="lnr lnr-laptop-phone font-40 clr-blue"></i>
              <h4 className="clr-white mt-2 text-normal md:text-2xl font-bold">Responsive Design</h4>
              <p className="clr-white mt-4 text-xs md:text-lg w-[130px] md:w-[310px]">
                Pixel Perfect Responsive Designs
              </p>
            </div>

            
          </div>
          <div className="my-skills mt-16">
            <div className="myskill-heading flex justify-center clr-white mt-5">
              <div>
                <h2 className="border-bottom mt-16 text-4xl font-bold mt-16">MY SKILLS</h2>
              </div>
            </div>
 
<div class="bg-cover items-center mt-16">
  <div className=" px-2 md:px-16 py-8 bg-gray-700 bg-opacity-60 rounded-3xl">
  <div class="w-[100%]">
    <ul class="flex justify-between ">
      <li class="e">
        <div class="relative flex flex-col text-center bg-gray-800 items-center justify-center rounded-3xl duration-300 ease-in-out">
          <span class="text-5xl font-semibold px-6 py-4 bg-[#00A3E1] text-gray-800 rounded-full mb-4">
            <img className="h-full md:h-[100px] rounded-full" src={Img1} />
          </span>
          <span class="text-red-200 font-bold">
            React JS
          </span>
        </div>
      </li>
      <li class="glide__slide">     
        <div class="relative flex flex-col text-center bg-gray-800  items-center justify-center rounded-3xl">
          <span class="text-5xl font-semibold px-6 py-4 bg-[#00A3E1]  text-gray-800 rounded-full mb-4">
          <img className="h-full md:h-[100px] rounded-full" src={Img2} />
          </span>
          <span class="text-red-200 font-bold">
           Next JS
          </span>
        </div>
      </li>
      <li class="glide__slide">
        <div class="relative flex flex-col text-center bg-gray-800  items-center justify-center rounded-3xl">
          <span class="text-5xl font-semibold px-6 py-4 bg-[#00A3E1]  text-gray-800 rounded-full mb-4">
          <img className="h-full md:h-[100px] rounded-full" src={Img3} />
          </span>
          <span class="text-red-200 font-bold">
            HTML,CSS Javascript
          </span>
        </div>
      </li>
      <li class="glide__slide">
        <div class="relative flex flex-col text-center bg-gray-800  items-center justify-center rounded-3xl">
          <span class="text-5xl font-semibold px-6 py-4 bg-[#00A3E1]  text-gray-800 rounded-full mb-4">
          <img className="h-full md:h-[100px] rounded-full" src={Img4} />
          </span>
          <span class="text-red-200 font-bold">
           Node js
          </span>
        </div>
      </li>  
    </ul>
  </div>
  
</div>
</div>


          </div>
        </div>
      </div>

  </div>

      </div>
    </>
  );
};

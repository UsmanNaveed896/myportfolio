import React from "react";
import "./style.scss";
import "../../Assets/style/mainstyle.scss";
import '../Resume/responsiveresume.scss'
export default () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div class="col-span-3  bg-[#2c2d2f] md:grid hidden">
        </div>
        <div class="md:col-span-9 col-span-12  bg-[#2c2d2f]">
          <div className="Resume container  max-w-[1600px] ">
            <div className="container ">
              <div className="starting-content flex justify-cont-bet">
                <div className="headingdasdas clr-blue f-w-700 font-40 mt-5">
                  <h3 className="text-2xl md:text-4xl mt-4 md:mt-0">My Resume</h3>
                </div>
                <div className="resume-icon clr-blue mt-5">
                  <i className="lnr lnr-license font-40"></i>
                </div>
              </div>
              <div className="front-side flex justify-center md:flex-row flex-col mt-16">
                <div className="col-md-6 experience-col">
                  <div className="heading-experience flex justify-center mt-5 clr-white">
                    <div>
                      <h3 className="text-3xl font-bold">EXPERIENCE</h3>
                    </div>
                  </div>

                  <div className="line-experience">

                    <div className="first-experience clr-white ml-6 ">
                      <h4 className="text-xl font-bold">Frontend Developer (React JS)</h4>
                      <h5 className="clr-blue text-lg font-semibold ">
                        Technolean
                      </h5>
                      <h5 className="clr-blue"><i>06-2022 to Present</i></h5>
                      <h4>Achievements/Tasks</h4>
                      <p>1. Command over HTML,CSS and JavaScript (ES6) language</p>
                      <p>2. Deployment and testing of APIs</p>
                      <p>3. Over 1 year experience in debugging and performance in React JS developing environment.</p>
                      <p>4. Development of UIs and apps in React JS developing environment</p>
                      <p>5. Responsive design with Bootstrap and Tailwind.</p>
                    </div>
                  </div>
                  {/* second expereince */}
                  <div className="line-experience col-md-12 mt-5 ">

                    <div className="first-experience clr-white ml-6">
                      <h4 className="text-xl font-bold">Frontend Web Developer</h4>
                      <h5 className="clr-blue text-lg font-semibold">The Designers</h5>
                      <h5 className="clr-blue"><i>09-2019 to 04-2020</i></h5>
                      <h4>Achievements/Tasks</h4>
                      <p>1. Java Script/ES6/TypeScript</p>
                      <p>2. Npm And Webpack</p>
                      <p>3. React js</p>
                      <p>4. Next js</p>
                      <p>5. Bootstrap</p>
                    </div>
                  </div>
                  {/* Third expereince */}
                  <div className="line-experience col-md-12 mt-5 ">

                    <div className="first-experience clr-white">
                      <h4 className="text-xl font-bold">Internee</h4>
                      <h5 className="clr-blue text-lg font-semibold">National Radio and Telecommunication Corporation</h5>
                      <h5 className="clr-blue"><i>08-2018 to 12-2018</i></h5>
                      <h4>Achievements/Tasks</h4>
                      <p>1. Auto Positioning System</p>
                      <p>2. Raspberry pi and Stepper Motor</p>
                      <p>3. Arduino and Amplifiers</p>
                      <p>4. Python and c++</p>
                    </div>
                  </div>
                </div>
                {/* Education */}
                <div
                  className="col-md-6 experience-col "
                  style={{ marginLeft: "9rem" }}
                >
                  <div className="heading-experience flex justify-center mt-5 clr-white">
                    <div>
                      <h3 className="text-3xl font-bold">EDUCATION</h3>
                    </div>
                  </div>
                  <div className="line-experience">
                    <div className="first-experience clr-white ">
                      <h4 className="text-xl font-bold" >Matric</h4>
                      <h5 className="clr-blue"><i>2012</i></h5>
                      <h5 className="clr-blue text-lg font-semibold">The FF (Frontier Force) School</h5>
                      <h4>Major Subjects</h4>
                      <p>Science</p>
                    </div>
                  </div>
                  {/* second expereince */}
                  <div
                    className="line-experience col-md-12  md:mt-[12rem] mt-[5rem]"

                  >

                    <div className="first-experience clr-white">
                      <h4 className="text-xl font-bold">Intermediate</h4>
                      <h5 className="clr-blue"><i>2014</i></h5>
                      <h5 className="clr-blue text-lg font-semibold">
                        Modernage Public School & College
                      </h5>
                      <h4>Major Subjects</h4>
                      <p>Pre-Engineering</p>
                    </div>
                  </div>
                  {/* Third expereince */}
                  <div
                    className="line-experience col-md-12 md:mt-[12rem] mt-[5rem]"

                  >
                    <div className="first-experience clr-white">
                      <h4 className="text-xl font-bold">Bachelors</h4>
                      <h5 className="clr-blue"><i>2018</i></h5>
                      <h5 className="clr-blue text-lg font-semibold">
                        Comsats University Islamabad, Abbottabad Campus
                      </h5>
                      <h4>Major Subjects</h4>
                      <p>Electrical Electronics Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-skills">
              <div className="container">
                <div className="coding-skills flex justify-center">
                  <div className="coding-skill-start basis-[40%]">
                    <div className="heading-code flex justify-center ">
                      <div><h3 className="f-fm border-bottom clr-white text-3xl font-bold">CODING SKILLS</h3></div>
                    </div>
                    {/* Progress Bars */}
                    <div class="bars">
                      <h3 className="clr-white mt-5">HTML5</h3>
                      <div class="progress-outer">
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar-success progress-bar-striped active"
                            style={{
                              boxshadow: "-1px 10px 10px rgba(116, 195, 116,0.7)",
                            }}
                          >
                            <div class=" bg-neutral-200 dark:bg-neutral-600 rounded-full">
                              <div
                                class="bg-[#00A3E1] p-2 text-center text-xs font-medium leading-none text-primary-100"
                                style={{ "width": "90%" }}>
                                90%
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <h3 className="clr-white mt-4">CSS3</h3>
                      <div class="progress-outer">
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar-success progress-bar-striped active"
                            style={{
                              boxshadow: "-1px 10px 10px rgba(116, 195, 116,0.7)",
                            }}
                          >
                            <div class=" bg-neutral-200 dark:bg-neutral-600 rounded-full">
                              <div
                                class="bg-[#00A3E1] p-2 text-center text-xs font-medium leading-none text-primary-100"
                                style={{ "width": "90%" }}>
                                90%
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <h3 className="clr-white mt-4">JavaScript</h3>
                      <div class="progress-outer">
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar-success progress-bar-striped active"
                            style={{
                              boxshadow: "-1px 10px 10px rgba(116, 195, 116,0.7)",
                            }}
                          >
                            <div class=" bg-neutral-200 dark:bg-neutral-600 rounded-full">
                              <div
                                class="bg-[#00A3E1] p-2 text-center text-xs font-medium leading-none text-primary-100"
                                style={{ "width": "80%" }}>
                                80%
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="engineering-skills basis-[40%]">
                    <div className="eng-head flex justify-center">
                      <div><h3 className="clr-white text-align f-fm border-bottom text-3xl font-bold">CODING SKILLS</h3></div>
                    </div>
                    <div class="bars">
                      <h3 className="clr-white mt-5">Tailwind</h3>
                      <div class="progress-outer">
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar-success progress-bar-striped active"
                            style={{
                              boxshadow: "-1px 10px 10px rgba(116, 195, 116,0.7)",
                            }}
                          >
                            <div class=" bg-neutral-200 dark:bg-neutral-600 rounded-full">
                              <div
                                class="bg-[#00A3E1] p-2 text-center text-xs font-medium leading-none text-primary-100"
                                style={{ "width": "90%" }}>
                                90%
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <h3 className="clr-white mt-4">APIs Integration</h3>
                      <div class="progress-outer">
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar-success progress-bar-striped active"
                            style={{
                              boxshadow: "-1px 10px 10px rgba(116, 195, 116,0.7)",
                            }}
                          >
                            <div class=" bg-neutral-200 dark:bg-neutral-600 rounded-full">
                              <div
                                class="bg-[#00A3E1] p-2 text-center text-xs font-medium leading-none text-primary-100"
                                style={{ "width": "90%" }}>
                                90%
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <h3 className="clr-white mt-4">React JS</h3>
                      <div class="progress-outer">
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar-success progress-bar-striped active"
                            style={{
                              boxshadow: "-1px 10px 10px rgba(116, 195, 116,0.7)",
                            }}
                          >
                            <div class=" bg-neutral-200 dark:bg-neutral-600 rounded-full">
                              <div
                                class="bg-[#00A3E1] p-2 text-center text-xs font-medium leading-none text-primary-100"
                                style={{ "width": "90%" }}>
                                80%
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
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

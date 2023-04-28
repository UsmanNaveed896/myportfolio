import React from 'react'
import Tilt from 'react-parallax-tilt';
import Img1 from '../../Assets/images/easemover-logo.png'
import Img2 from '../../Assets/images/icon.png'
import Img3 from '../../Assets/images/stem.png'
import './Style.scss'
import '../../Assets/style/mainstyle.scss'
import '../Portfolio/portfoliores.scss'

export default () => {
    return (
        <>
            <div className="portfolio container max-w-[1600px]">
                <div className="container">
                    <div className="portfolio-head d-flex justify-cont-bet">
                        <div className=" clr-blue f-w-700 font-40 mt-5 md:ml-16 ml-0"><h1>Portfolio</h1></div>
                    </div>
                    <div className="navbar flex justify-center">
                        <div className="nav-content  clr-blue mt-5">
                            <h3 className='text-2xl md:text-4xl'>My Projects</h3>
                        </div>
                    </div>
                    <div className="my-projects flex justify-center flex-col md:flex-row gap-16 mt-5">
                        <div className="first-project">
                            <Tilt>
                                <a href="https://easemover.com/">
                                    <div className="image-one flex justify-center">
                                        <img className="project-image w-[60%] h-[60%] md:w-[300px] md:h-[300px]" src={Img1}  alt="as" />
                                    </div>
                                    <h3 className=" clr-blue text-center">Ease Mover</h3>
                                </a>
                            </Tilt>
                        </div>
                        <div className="second-project">
                            <Tilt>
                                <a href="https://qlab-site.vercel.app/">
                                    <div className="image-two flex justify-center">
                                        <img className="project-image w-[60%] h-[60%] md:w-[300px] md:h-[300px]" src={Img2}  alt="as" />
                                    </div>
                                    <h3 className=" clr-blue text-center">Q Lab (Company Website)</h3>
                                </a>
                            </Tilt>
                        </div>
                        <div className="Third-project">
                            <Tilt>
                                <a href="https://www.stemwizardsacademia.com/">
                                    <div className="image-three flex justify-center">
                                        <img className="project-image w-[60%] h-[60%] md:w-[300px] md:h-[300px]" src={Img3}  alt="as" />
                                    </div>
                                    <h3 className=" clr-blue text-center">Stem Wizards Academia</h3>
                                </a>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import React from 'react'
import Img1 from '../../Assets/images/profilepic.jpg'
import Img2 from '../../Assets/images/linkedin.png'
import Img3 from '../../Assets/images/github.png'
import './style.scss'
import '../../Assets/style/mainstyle.scss'
import '../Portfolio-sidnav/responsive.scss'
import { useNavigate } from "react-router-dom";
export default()=>{
    const navigate= useNavigate();
    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }
    return(
        <>
        <div className="col-md-2 side-nav-main absolute z-10 none md:block">
            <div className="profile-pic">
                <img className="pic h-[400px]" src={Img1} alt="profile"/>
              <div className="heading text-2xl mt-8"><h1>Usman Naveed</h1></div>  
            </div>
            <div className="contents ">
                <ul className="font-18 ">
                    <li ><i className="lnr lnr-home"></i><a href="/">HOME</a></li>
                    <li onClick={()=>navigate('/aboutme')}><i className="lnr lnr-user"></i>ABOUT ME</li>
                    <li onClick={()=>navigate('/resume')}><i className="lnr lnr-license"></i>RESUME</li>
                    <li onClick={()=>navigate('/projects')}><i className="lnr lnr-briefcase"></i>My Projects</li>
                    <li><i className="lnr lnr-envelope"></i>CONTACT
                    <div className='flex justify-center gap-4 mt-6'> 
                    <a href='https://www.linkedin.com/in/usman-naveed-a288911ab/'><img className="h-[20px]" src={Img2} alt="sd" /></a>
                   <a href='https://github.com/UsmanNaveed896'> <img  className="h-[20px]" src={Img3} alt="sd"  /></a> 
                    </div>
                    </li>
                </ul>
            </div>
            <div className="social-icons mt-5 row">
    
          
            </div>
            <div className="para">
           
            </div>
        </div>


                                        {/* Mobile view Side nav */}
                 <div className="conatiner-fluid header-mobile-view block md:none">
                <div className="header-content">
               <div className="heading  clr-white"><h3 className='text-2xl'>USMAN NAVEED</h3></div> 
                    <div className="brand ">
                       <button className="brand-button" onClick={openMenu}>&#9776;</button>
                    </div>
                </div>
            </div>
            <div className="sidebar">
               <div className="my-img"><img className="mob-img" src={Img1} alt="ssd"/></div> 
                <div className="close-button">
                    <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                </div>
                <div className="contents ">
                <ul className="font-12 ">
                    <li ><i className="lnr lnr-home"></i><a href="/">HOME</a></li>
                    <li><i className="lnr lnr-user"></i><a href="/aboutme">ABOUT ME</a></li>
                    <li><i className="lnr lnr-license"></i><a href="/resume">RESUME</a></li>
                    <li><i className="lnr lnr-briefcase"></i><a href="/portfolio">PORTFOLIO</a></li>
                    <li><i className="lnr lnr-envelope"></i>CONTACT
                    <div className='flex justify-center gap-4 mt-6'> 
                    <a href='https://www.linkedin.com/in/usman-naveed-a288911ab/'><img className="h-[20px]" src={Img2} alt="sd" /></a>
                   <a href='https://github.com/UsmanNaveed896'> <img  className="h-[20px]" src={Img3} alt="sd"  /></a> 
                    </div>
                    </li>
                </ul>
            </div>

            </div>
        </>
    )
}
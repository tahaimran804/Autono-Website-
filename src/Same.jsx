import React, { useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom'


const Same = (props) => {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <div className="Feature_Of_Bus">
        <div className="Left_side_text">
          <h3>{props.hedding}</h3>
          <p>{props.titel}</p>
          <div className="Read_more_bnt">
            <NavLink to='/Technology'><button className='bnt-1'>Read More</button></NavLink>
            <span><FaArrowRight /></span>
          </div>
        </div>
        <div className="right_side_Image">
          <img data-aos='fade-up' src={props.image} alt="" />
        </div>
      </div>
    </>
  )
}

export default Same;
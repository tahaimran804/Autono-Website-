import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Subscribe from './Subscribe';

const Navbar = () => {
  const [modal, setmodal] = useState(false)
  const [Open, setOpen] = useState(false)
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };



  return (
    <>
      <nav data-aos='fade-down' className='Nav_Item'>
        <div className="logo"><h1><NavLink className='Main_List_item' to='/'>AUTONO</NavLink></h1></div>
        <div className="Nav_list">
          <ul className={Open ? 'active' : 'Nav_Item ul'}>
            <li><NavLink onClick={() => setOpen(false)} className='List_item' to='/Technology'>Technology</NavLink></li>
            <li><NavLink onClick={() => setOpen(false)} className='List_item' to='/About'>About</NavLink></li>
            <li><NavLink onClick={() => setOpen(false)} className='List_item' to='/Careers'>Careers</NavLink></li>
          </ul>
          <button onClick={openModal} className='bnt'>Subscribe</button>
          <div onClick={() => setOpen(!Open)} className="Menu_icon">
            {Open ? <div onClick={() => setOpen(false)} className="cloose"><IoMdClose /></div> : <HiMenuAlt4 />}
          </div>
        </div>
      </nav>

      <div className="App">
        <div className="Overlay"></div>
        <Subscribe show={showModal} onClose={closeModal}>
          <div className="Email_Box">
            <h2 >Subscribe</h2>
            <p>Sign up to receive Autono news and updates.</p>
            <strong>Email</strong>
            <div className='text-box'>
              <input type="email" />
              <button>Submit</button>
            </div>
          </div>
        </Subscribe>
      </div>

    </>
  )
}

export default Navbar

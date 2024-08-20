
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Same3 = (props) => {
  const themeClass = props.theme === 'light' ? 'light-theme' : 'dark-theme';
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom',
    });
  }, []);
  return (
    <>

      <div className={`liftSide-5 ${themeClass}`}>
        <div className="mainLine">
          <pre className='line-3'></pre>
          <pre data-aos='fade-down' className='line-4'></pre>
        </div>
        <div className="Textss-4">
          <strong>{props.hedding}</strong>
          <h1>{props.titel}</h1>
          <p>{props.paragraph}</p>
        </div>

      </div>

      <div className='rightSide-5'>
        <img data-aos='fade-up' src={props.image} alt="" />
      </div>
    </>
  )
}

export default Same3

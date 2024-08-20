import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SameComponents = (props) => {
  const themeClass = props.theme === 'dark' ? 'dark-theme' : 'light-theme';
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
  }, [])
  return (
    <>
      <section className={`Tech_sec_2 ${themeClass}`}>
        <div className='lift_side_2'>
          <div className="Text-4">
            <div className='lines_4'>
              <pre className='sm-line-2' style={{ backgroundColor: 'black', color: 'white' }}></pre>
              <pre data-aos='fade-up' className='dm-line-2' style={{ backgroundColor: 'white', color: 'black' }}></pre>

            </div>
            <div className='About_MY_Car'>
              <strong>{props.Titel}</strong>
              <p>{props.Para}</p>
            </div>
          </div>
        </div>

        <div className='right_side_2'>
          <img data-aos='fade-up' src={props.image} alt="" />
        </div>
      </section>

      <section className={`Tech_sec_3 ${themeClass}`}>
        <div className='Degsint'>
          <h1>{props.Degsin}</h1>
          <p>{props.DegsinPra}</p>
        </div>

        <div className='EFFICIENCY'>
          <h1>{props.efe}</h1>
          <p>{props.efePara}</p>
        </div>
      </section>
    </>
  )
}

export default SameComponents;

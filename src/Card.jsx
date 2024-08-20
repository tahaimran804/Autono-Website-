import { FaArrowRight } from "react-icons/fa6";

const Card = () => {
  return (
    <>
      <div className='cards'>
        <div className='slicder'>
          <div className='People_About'>
            <h1>ARTIFICIAL INTELLIGENCE RESEARCHER</h1>
            <strong>San Francisco, CA</strong>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>

          <div className="Apply_Now">
            <button>Apply Now</button>
            <span><FaArrowRight /></span>
          </div>
        </div>
      </div>
    </>
  )


}

export default Card

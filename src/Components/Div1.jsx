import { useState } from 'react'
import '../Css/Div1.css'
const Div1 = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
<div className="design">
  <div className="image">
    <img className="shape" src="images/shape_28.png" alt="" />
  </div>
  <img className="shape-2" src="images/shape_29.png" alt="" />
  <img className="shape-3" src="images/shape_30.png" alt="" />
  <div className="shape-holder">
    <div className="shape-holder-2">
      <div className="col-3">
      <div className="toolbar group">
      <img
        className="place-your-logo-here-double-click-to-edit"
        src="images/place_your_logo_here_doub.png"
        alt=""
      />
      <p className="home" onClick={() => scrollToSection("home")}>Home</p>
      <p className="class" onClick={() => scrollToSection("class")}>Class</p>
      <p className="promo" onClick={() => scrollToSection("promo")}>Promo</p>
      <p className="text" onClick={() => scrollToSection("online-class")}>Online Class</p>
      <p className="contact" onClick={() => scrollToSection("contact")}>Contact</p>
    </div>
        <div className="row-4 group">
          <img className="shape-4" src="images/shape_34.png" alt="" />
          <div className="text-2">
            <p className="title">
              <span className="text-style">Discover your next Hike</span>
              <br />
              <span className="text-style-2">Discover your</span>
              <br />
              <span className="text-style-3">next hike</span>
            </p>
            <p className="body-text">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur
              <br />
              adipiscing elit, sed do.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Div1

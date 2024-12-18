import React from 'react'
import { useState } from 'react'
import '../Css/Div2.css'
const Div2 = ({ images, subtitles, bodyTexts }) => {
  return (
    <>
<>
  <div id='class' className="row-5 group">
    <img className="shape-5" src="images/shape_25.png" alt="" />
    <div className="col-23">
      <p className="title-2">
        Hiking And Camping <strong className="fw700"><br /><br />Classes</strong>
      </p>
      <div className="shape-6" />
      <div>
      <div className="row-9 match-height group">
        {images.map((imageSrc, index) => (
          <div key={index} className={`col-${16 + index}`}>
            <img
              className={`place-your-design-here-double-click-to-edit-${index + 1}`}
              src={imageSrc}
              alt=""
            />
            <p className={`subtitle-${index + 1}`}>{subtitles[index]}</p>
          </div>
        ))}
      </div>
      <div className="row-6 group">
        {bodyTexts.map((bodyText, index) => (
          <p key={index} className={`body-text-${index + 2}`}>
            {bodyText}
          </p>
        ))}
      </div>
    </div>
    </div>
  </div>
  <img className="shape-7" src="images/shape_25.png" alt="" />
</>



    </>
  )
}

export default Div2

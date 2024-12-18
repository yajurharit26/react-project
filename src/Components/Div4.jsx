import React from 'react'
import { useState } from 'react'
import '../Css/Div4.css'
const Div4 = ({ imageUrl, title, description }) => {
  return (

<>
<>
  <div id='online-class' className="group-6">
    <div className="shape-holder-5">
      <img className="shape-13" src="images/shape_13.png" alt="" />
    </div>
    <div className="shape-holder-6">
      <div className="shape-holder-7">
        <div className="text-8">
          <p className="title-8">
            &nbsp;walking in nature
            <br />
            as a recreational
            <br />
            activity
          </p>
          <p className="subtitle-6">.activities</p>
          <p className="body-text-9">
            Lorem ipsum dolor sit amet
            <br />
            consectetur adip.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="group-7">
    <div className="text-10">
      <p className="title-9">
        places to visit
        <br />
        in autumn
      </p>
      <div className="image-3 group">
        <img
          className="place-your-image-here-double-click-to-edit-3"
          src="images/place_your_image_here_dou_5.jpg"
          alt=""
        />
        <img
          className="place-your-image-here-double-click-to-edit-4"
          src="images/place_your_image_here_dou_4.jpg"
          alt=""
        />
        <img
          className="place-your-image-here-double-click-to-edit-5"
          src="images/place_your_image_here_dou_3.jpg"
          alt=""
        />
      </div>
      <div className="row-3 group">
        <div className="mountain">
          <p className="title-10">Mountain Loop</p>
          <p className="body-text-10">
            Lorem ipsum sit amet,
            <br />
            consectetur &nbsp;adipisicing...
          </p>
          <div className="line-2" />
          <p className="location">
            <strong className="fw700">Location </strong>0.3 miles.
          </p>
        </div>
        <div className="national-park">
          <p className="title-11">National Park</p>
          <p className="body-text-11">
            Lorem ipsum dolor amet,
            <br />
            consectetur &nbsp;adipisicing...
          </p>
          <div className="line-3" />
          <p className="location-2">
            <strong className="fw700">Location</strong> 0.2 miles.
          </p>
        </div>
        <div className="canyon">
          <p className="title-12">Canyon Trail</p>
          <p className="body-text-12">
            Lorem ipsum dolor sit
            <br />
            consectetur &nbsp;adipisicing...
          </p>
          <div className="line-4" />
          <p className="location-3">
            <strong className="fw700">Location </strong>0.6 miles.
          </p>
        </div>
      </div>
      <div className="button-2">see more</div>
    </div>
  </div>
</>
</>
  );
};

export default Div4;

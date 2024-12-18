import { useState } from 'react'
import './App.css';
import './Css/responsive.css'
import Div1 from './Components/Div1';
import Div2 from './Components/Div2';
import Div3 from './Components/Div3';
import Div4 from './Components/Div4';
import Div5 from './Components/Div5';
import Footer from './Components/Footer';
function App() {
  const images = [
    "images/place_your_design_here_do_3.png",
    "images/place_your_design_here_do.png",
    "images/place_your_design_here_do_2.png"
  ];

  const subtitles = ["activities", "hiking", "mountains"];

  const bodyTexts = [
    "Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie posuere",
    "Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie posuere",
    "Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie posuere"
  ];
  

  
  return (
   <>
   <Div1/>
   <Div2
   images={images}
   subtitles={subtitles}
   bodyTexts={bodyTexts}/>
   <Div3/>
   <Div4/>
   <Div5/>
   <Footer/>
   </>
  );
}

export default App;


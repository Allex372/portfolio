import React from "react";
import './portfolio.css';

import pr1 from '../../img/portfolio/Слой 8.png';
import pr2 from '../../img/portfolio/reebok_web.png';
import pr3 from '../../img/portfolio/reebok_web1.png';


export default function Portfolio () {
  return(
      <div className='portfolio-main'>
          <div className='portfolio-wrapper'>
              <p className='title-style about-title' style={{marginTop:'50px'}}>Portfolio</p>
              <img id='img1' src={pr1} alt='project1'/>
              <a className='a1 title-style' href='#'>Online fashion store - Homepage</a>
              <img className='img2' src={pr2} alt='project1'/>
              <a className='a1 title-style' href='#'>Reebok Store - Concept</a>
              <img className='img2' src={pr3} alt='project1'/>
              <a id='a3' className='a1 title-style' href='#'>Braun Landing Page - Concept</a>
          </div>
      </div>
  )
}

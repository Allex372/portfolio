import React from "react";
import './skills.css';

import pr1 from '../../img/programs/Group1.png';
import pr2 from '../../img/programs/Group 2.png';
import pr3 from '../../img/programs/Group3.png';
import pr4 from '../../img/programs/Group4.png';
import starts from '../../img/programs/Group1S.png';


export default function Skills () {
  return(
      <div className='skills-main'>
          <div className='skills-wrapper'>
              <p className='title-style about-title' style={{marginTop:'50px'}}>Skills</p>
              <p className='title-style bold skills-margin'>I work in such programs as</p>
              <div className='skills-program'>
                  <div className='program'>
                      <img src={pr1} alt='Adobe Photoshop'/>
                      <p className='program-text'>Adobe<br/>Photoshop</p>
                      <img src={starts} alt='stars'/>
                  </div>
                  <div className='program'>
                      <img src={pr2} alt='Adobe Illustrator'/>
                      <p className='program-text'>Adobe<br/>Illustrator</p>
                      <img src={starts} alt='stars'/>
                  </div>
                  <div className='program'>
                      <img src={pr3} alt='Adobe Photoshop'/>
                      <p className='program-text'>Adobe<br/>After Effects</p>
                      <img src={starts} alt='stars'/>
                  </div>
                  <div className='program'>
                      <img src={pr4} alt='Adobe Photoshop'/>
                      <p className='program-text'>Figma</p>
                      <img src={starts} alt='stars'/>
                  </div>
              </div>
          </div>
      </div>
  )
}

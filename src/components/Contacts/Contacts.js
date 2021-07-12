import React from "react";
import './contacts.css';

import sn1 from '../../img/contacts/Group 2.png';
import sn2 from '../../img/contacts/Group 8.png';
import sn3 from '../../img/contacts/Group 9.png';
import sn4 from '../../img/contacts/Group 10.png';


export default function Contacts () {
  return(
      <div className='contacts-main'>
          <div className='contacts-wrapper'>
              <p className='title-style about-title'>Contacts</p>
              <p className='title-style'>Want to know more or just chat?<br/>You are welcome!</p>
              <button className='contacts-btn'>Send message</button>
              <div className='social-networks'>
                  <img src={sn1} alt='social-network'/>
                  <img src={sn2} alt='social-network'/>
                  <img src={sn3} alt='social-network'/>
                  <img src={sn4} alt='social-network'/>
              </div>
              <p className='title-style color' style={{marginTop:'46px'}}>Like me on<br/> LinkedIn, Instagram, Behance, Dribble</p>
          </div>
      </div>
  )
}

import React from "react";
import './header.css';
import {header} from "../../constants/header_enums/header";
import {Link} from "react-router-dom";

export default function Header () {
  return(
      <div className='home-main'>
          <div className='header'>
              {
                  header.map((el) =>
                      <Link to={`${el.route}`}>
                          <p className='title-style bold' key={el.id}>{el.title}</p>
                      </Link>
                  )
              }
          </div>
          <div className='line'/>

      </div>
  )
}

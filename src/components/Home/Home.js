import React from "react";
import './home.css';
import img from '../../img/myPhoto.jpg';

export default function Home() {

    return (
        <div className='home-main'>
            <div className='home-center'>

                <div className='home-div'>
                    <p className='title-style-bold'>Oleksandr<br/> Baran</p>
                </div>

                <div className='home-div'>
                    <p className='title-style margin-top'>Front-end Developer<br/>21 years old, Lviv</p>
                </div>

                <div className='home-div margin-top'>
                    <p className='title-style small'>UA|ENG</p>
                </div>
            </div>
            <img src={img}/>
        </div>
    )
}

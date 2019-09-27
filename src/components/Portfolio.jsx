import React, { Component } from 'react'

import one from '../assets/img/portfolio/1.jpg'
import two from '../assets/img/portfolio/2.jpg'
import three from '../assets/img/portfolio/3.jpg'
import four from '../assets/img/portfolio/4.jpg'
import five from '../assets/img/portfolio/5.jpg'
import six from '../assets/img/portfolio/6.jpg'
import seven from '../assets/img/portfolio/7.jpg'
import eight from '../assets/img/portfolio/8.jpg'
import nine from '../assets/img/portfolio/9.jpg'
import ten from '../assets/img/portfolio/10.jpg'

export default class Portfolio extends Component {

     render() {
          return (
               <div className="covers mycolor pt-24" id="gallery">
                    <div className="w-full">
                         <div className="flex ornot">
                              <img src={one} alt="" className="portfolio" />
                              <img src={two} alt="" className="portfolio" />
                              <img src={three} alt=""  className="portfolio" />
                              <img src={four} alt=""  className="portfolio" />
                              <img src={five} alt=""  className="portfolio" />
                         </div>

                         <div className="flex ornot">
                              <img src={six} alt="" className="portfolio" />
                              <img src={seven} alt="" className="portfolio" />
                              <img src={eight} alt=""  className="portfolio" />
                              <img src={nine} alt=""  className="portfolio" />
                              <img src={ten} alt=""  className="portfolio" />
                         </div>
                    </div>
               </div>
          )
     }
}

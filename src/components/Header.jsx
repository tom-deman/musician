import React, { Component } from 'react'

import Navbar from './Navbar'

export default class Header extends Component {

     constructor(props) {
          super(props)
          this.state = {

          }
     }


     render() {
          return (
               <div className="header h-screen">

                    <Navbar />

                    <h1 className="title text-white text-center pt-32">New album
                         <br />
                         is out !
                    </h1>
                    <div className="m-auto w-perso flex justify-between mt-16 icons">
                         <div className="text-center">
                              <a href="https://www.apple.com/befr/apple-music/" target="_blank">
                                   <i className="fab fa-apple text-white text-5xl hover:text-red-500"></i>
                              </a>
                              <p className="icon-text text-white text-sm mt-6 text-xs tracking-widest font-light hover:text-gray-500">
                                   <a href="https://www.apple.com/befr/apple-music/" target="_blank">
                                        Apple Music
                                   </a>
                              </p>
                         </div>
                         <div className="text-center">
                              <a href="https://www.spotify.com/fr/" target="_blank">
                                   <i className="fab fa-spotify text-white text-5xl hover:text-red-500"></i>
                              </a>
                              <p className="icon-text text-white text-sm mt-6 text-xs tracking-widest font-light hover:text-gray-500">
                                   <a href="https://www.spotify.com/fr/" target="_blank">
                                        Spotify
                                   </a>
                              </p>
                         </div>
                         <div className="text-center">
                              <a href="https://soundcloud.com/discover" target="_blank">
                                   <i className="fab fa-soundcloud text-white text-5xl hover:text-red-500"></i>
                              </a>
                              <p className="icon-text text-white text-sm mt-6 text-xs tracking-widest font-light hover:text-gray-500">
                                   <a href="https://soundcloud.com/discover" target="_blank">
                                        Soundcloud
                                   </a>
                              </p>
                         </div>
                    </div>

                    <div className="text-center w-full chevron">
                         <a href="#album">
                              <i className="fas fa-chevron-down text-white mt-10 hover:text-gray-500"></i>
                         </a>
                    </div>

                    
               </div>
          )
     }
}

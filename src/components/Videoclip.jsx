import React, { Component } from 'react'

export default class Videoclip extends Component {
     render() {
          return (
               <div className="videoclip w-full background-img bg-fixed" id="videoclip">
                    <p className="video-title text-white text-center text-5xl pt-32 mb-12">Last Videoclip</p>
                    <a href="javascript:void(0)">
                         <div className="h-24 w-24 rounded-full bg-gray-200 m-auto text-center hover:bg-gray-400">
                              <i className="fas fa-play mt-10 text-xl ml-1"></i>
                         </div>
                    </a>
               </div>
          )
     }
}

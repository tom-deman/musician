import React, { Component } from 'react'


import Dates from './Dates'

export default class Events extends Component {

     render() {
          return (
               <div className="covers mycolor" id="events">
                    <p className="video-title text-white text-center text-5xl pt-32 mb-12">Next Events</p>

                    <Dates />
               </div>
          )
     }
}

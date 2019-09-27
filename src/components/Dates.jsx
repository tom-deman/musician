import React, { Component } from 'react'

export default class Dates extends Component {
     render() {
          return (
               <div>
                    <div className="h-32 bg-transparent border-t border-color border-b my-container m-auto flex justify-around items-center">
                         <p className="text-white mobile">Barlok</p>
                         <p className="text-white">Brussels</p>
                         <p className="text-white mobile">March 13</p>
                         <a href="javascript:void(0)">
                              <button className="text-white pt-3 pb-3 pl-8 pr-8 border border-teal-600 hover:bg-teal-600">Tickets</button>
                         </a>
                    </div>

                    <div className="h-32 bg-transparent border-color border-b my-container m-auto flex justify-around items-center">
                         <p className="text-white mobile">Hankun</p>
                         <p className="text-white">London</p>
                         <p className="text-white mobile">April 12</p>
                         <a href="javascript:void(0)">
                              <button className="text-white pt-3 pb-3 pl-8 pr-8 border border-teal-600 hover:bg-teal-600">Tickets</button>
                         </a>
                    </div>

                    <div className="h-32 bg-transparent border-color border-b my-container m-auto flex justify-around items-center">
                         <p className="text-white mobile">Sultan</p>
                         <p className="text-white">Paris</p>
                         <p className="text-white mobile">April 18</p>
                         <a href="javascript:void(0)">
                              <button className="text-white pt-3 pb-3 pl-8 pr-8 border border-teal-600 hover:bg-teal-600">Tickets</button>
                         </a>
                    </div>
                    
               </div>
               
          )
     }
}

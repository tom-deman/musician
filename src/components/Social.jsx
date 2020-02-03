import React, { Component } from 'react'

export default class Social extends Component {
     render() {
          return (
               <div className='w-full videoclip social'>
                    <div className='my-container videoclip flex justify-around items-center m-auto'>

                         <a href='javascript:void(0)'>
                              <i class='fab fa-facebook-f text-white text-5xl hover:text-red-500'></i>
                         </a>
                         <a href='javascript:void(0)' className='mobile'>
                              <i class='fab fa-twitter text-white text-5xl hover:text-red-500'></i>
                         </a>
                         <a href='javascript:void(0)' className='mobile'>
                              <i class='fab fa-youtube text-white text-5xl hover:text-red-500'></i>
                         </a>
                         <a href='javascript:void(0)'>
                              <i class='fab fa-soundcloud text-white text-5xl hover:text-red-500'></i>
                         </a>
                         <a href='javascript:void(0)'>
                              <i class='fab fa-spotify text-white text-5xl hover:text-red-500'></i>
                         </a>
                         <a href='javascript:void(0)' className='mobile'>
                              <i class='fab fa-instagram text-white text-5xl hover:text-red-500'></i>
                         </a>

                    </div>
               </div>
          )
     }
}

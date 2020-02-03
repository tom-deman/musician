import React, { Component } from 'react'

export default class News extends Component {
     render() {
          return (
               <div className='hauteur mycolor' id='news'>
                    <hr className='border-color my-container m-auto' />
                    <p className='video-title text-white text-center text-5xl pt-32 mb-24'>News</p>

                    <div className='text-white my-width m-auto text-center mb-16'>
                         <p className='text-xs font-thin mb-3'>September 20, 2019</p>
                         <p className='mb-2 hover:text-red-500 text-bold text-xl'>
                              <a href='javascript:void(0)'>
                                   Apply These 5 Secret Techniques To Improve music
                              </a>
                         </p>
                         <div className='flex justify-center'>
                              <i className='fas fa-comment text-white mr-2'></i>
                              <p className='text-xs font-thin mr-4 hover:text-gray-400'>
                                   <a href='javascript:void(0)'>
                                        6 Comments
                                   </a>
                              </p>
                              <i className='fas fa-clock text-white mr-2'></i>
                              <p className='text-xs font-thin'>2 Hours</p>
                         </div>
                    </div>

                    <div className='text-white my-width m-auto text-center mb-16'>
                         <p className='text-xs font-thin mb-3'>September 20, 2019</p>
                         <p className='mb-2 hover:text-red-500 text-bold text-xl'>
                              <a href='javascript:void(0)'>
                                   Rules Not To Follow About music
                              </a>
                         </p>
                         <div className='flex justify-center'>
                              <i className='fas fa-comment text-white mr-2'></i>
                              <p className='text-xs font-thin mr-4 hover:text-gray-400'>
                                   <a href='javascript:void(0)'>
                                        4 Comments  
                                   </a>
                              </p>
                              <i className='fas fa-clock text-white mr-2'></i>
                              <p className='text-xs font-thin'>1 Hours</p>
                         </div>
                    </div>

                    <div className='text-white my-width m-auto text-center mobile-padding'>
                         <p className='text-xs font-thin mb-3'>September 20, 2019</p>
                         <p className='mb-2 hover:text-red-500 text-bold text-xl'>
                              <a href='javascript:void(0)'>
                                   How I Improved My music In One Easy Lesson
                              </a>
                         </p>
                         <div className='flex justify-center'>
                              <i className='fas fa-comment text-white mr-2'></i>
                              <p className='text-xs font-thin mr-4 hover:text-gray-400'>
                                   <a href='javascript:void(0)'>
                                        6 Comments
                                   </a>
                              </p>
                              <i className='fas fa-clock text-white mr-2'></i>
                              <p className='text-xs font-thin'>20 Minutes</p>
                         </div>
                    </div>
               </div>
          )
     }
}

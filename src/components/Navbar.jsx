import React, { Component } from 'react'

export default class Navbar extends Component {

     constructor(props) {
          super(props)
          this.state = {
               count: 1
          }
          
     }


     componentDidMount() {
          window.addEventListener('scroll', () => {
               const isTop = window.scrollY > 75
               const myNav = document.getElementById('myNav')

               if (isTop) {
                    myNav.classList.add('mycolor')
               }

               else {
                    myNav.classList.remove('mycolor')
               }
          })

          window.addEventListener('scroll', () => {

               const linkOne = window.scrollY < 720;
               const linkTwo = window.scrollY > 720;
               const linkThree = window.scrollY > 1880;
               const linkFour = window.scrollY > 2390;
               const linkFive = window.scrollY > 3220;
               const linkSix = window.scrollY > 3950;


               if (linkOne) {
                    this.setState({
                         count: 1
                    })
               }

               else if (linkTwo) {
                    this.setState({
                         count: 2
                    })
               }

               if (linkThree) {
                    this.setState({
                         count: 3
                    })
               }

               if (linkFour) {
                    this.setState({
                         count: 4
                    })
               }

               if (linkFive) {
                    this.setState({
                         count: 5
                    })
               }

               if (linkSix) {
                    this.setState({
                         count: 6
                    })
               }
          })
     }


     render() {
          return (
               <div className="bg-transparent fixed w-full" id="myNav">
                    <div className="flex justify-between h-16 border-b border-color">

                         <div>
                              <p className="text-white mt-5 ml-8 select-none font-semibold text-lg">TD</p>
                         </div>

                         <div>
                              <ul className="flex ml-24 text-white">

                                   <li className="m-5">
                                        <a href="#" className={this.state.count === 1 ? "text-gray-500 uppercase text-xs font-medium" : "hover:text-gray-500 uppercase text-xs font-medium"}>
                                             Intro
                                        </a>
                                   </li>

                                   <li className="m-5">
                                        <a href="#album" className={this.state.count === 2 ? "text-gray-500 uppercase text-xs font-medium" : "hover:text-gray-500 uppercase text-xs font-medium"}>
                                             New Album
                                        </a>
                                   </li>

                                   <li className="m-5">
                                        <a href="#videoclip" className={this.state.count === 3 ? "text-gray-500 uppercase text-xs font-medium" : "hover:text-gray-500 uppercase text-xs font-medium"}>
                                             Videoclip
                                        </a>
                                   </li>

                                   <li className="m-5">
                                        <a href="#events" className={this.state.count === 4 ? "text-gray-500 uppercase text-xs font-medium" : "hover:text-gray-500 uppercase text-xs font-medium"}>
                                             Events
                                        </a>
                                   </li>

                                   <li className="m-5">
                                        <a href="#gallery" className={this.state.count === 5 ? "text-gray-500 uppercase text-xs font-medium" : "hover:text-gray-500 uppercase text-xs font-medium"}>
                                             Gallery
                                        </a>
                                   </li>

                                   <li className="m-5">
                                        <a href="#news" className={this.state.count === 6 ? "text-gray-500 uppercase text-xs font-medium" : "hover:text-gray-500 uppercase text-xs font-medium"}>
                                             News
                                        </a>
                                   </li>

                              </ul>
                         </div>

                         <div className="border-l border-color">
                              <a href="https://www.facebook.com" target="_blank">
                                   <i className="fab fa-facebook-f text-white mt-6 hover:text-gray-500 ml-10"></i>
                              </a>
                              <a href="https://www.instagram.com" target="_blank">
                                   <i class="fab fa-instagram text-white mt-6 hover:text-gray-500 ml-6"></i>
                              </a>
                              <a href="https://twitter.com" target="_blank">
                                   <i class="fab fa-twitter text-white mt-6 hover:text-gray-500 ml-5 mr-10"></i>
                              </a>
                         </div>

                    </div>

                    <div className={this.state.count > 1 ? "h-4 w-4 bottom-0 mb-10 right-0 mr-10 fixed z-50" : "hidden"}>
                         <a href="#" className="z-50">
                              <i class="fas fa-chevron-up text-white absolute hover:text-gray-500 z-50"></i>
                         </a>
                    </div>

                    <div className="rightdots fixed right-0 mr-8 m-64 z-50">
                         <a href="#">
                              <div className={this.state.count === 1 ? "bg-white h-2 w-2 rounded-full mt-5 z-50" : "bg-gray-500 h-2 w-2 rounded-full hover:bg-gray-500 mt-5 z-50"}></div>
                         </a>
                         <a href="#album">
                              <div className={this.state.count === 2 ? "bg-white h-2 w-2 rounded-full mt-5 z-50" : "bg-gray-500 h-2 w-2 rounded-full hover:bg-gray-500 mt-5 z-50"}></div>
                         </a>
                         <a href="#videoclip">
                              <div className={this.state.count === 3 ? "bg-white h-2 w-2 rounded-full mt-5 z-50" : "bg-gray-500 h-2 w-2 rounded-full hover:bg-gray-500 mt-5 z-50"}></div>
                         </a>
                         <a href="#events">
                              <div className={this.state.count === 4 ? "bg-white h-2 w-2 rounded-full mt-5 z-50" : "bg-gray-500 h-2 w-2 rounded-full hover:bg-gray-500 mt-5 z-50"}></div>
                         </a>
                         <a href="#gallery">
                              <div className={this.state.count === 5 ? "bg-white h-2 w-2 rounded-full mt-5 z-50" : "bg-gray-500 h-2 w-2 rounded-full hover:bg-gray-500 mt-5 z-50"}></div>
                         </a>
                         <a href="#news">
                              <div className={this.state.count === 6 ? "bg-white h-2 w-2 rounded-full mt-5 z-50" : "bg-gray-500 h-2 w-2 rounded-full hover:bg-gray-500 mt-5 z-50"}></div>
                         </a>
                    </div>
               </div>
          )
     }
}

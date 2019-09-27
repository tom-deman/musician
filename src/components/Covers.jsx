import React, { Component } from 'react'

import coverOne from '../assets/img/covers/one.jpg'
import coverTwo from '../assets/img/covers/two.jpg'



export default class Covers extends Component {

     constructor(props) {
          super(props)
          this.state = {
               count: 1
          }
          this.handleClickOne = this.handleClickOne.bind(this)
          this.handleClickTwo = this.handleClickTwo.bind(this)
          
     }


     handleClickOne() {
          this.setState({
               count: 1
          })
     }


     handleClickTwo() {
          this.setState({
               count: 2
          })
     }

     render() {
          return (
               <div className="covers mycolor">
                    <div className="pictures m-auto">
                         <img src={this.state.count === 1 ? coverOne : coverTwo} alt="" />
                    </div>

                    <div className="w-24 flex justify-around m-auto mt-20">
                         <a href="javascript:void(0)">
                              <div className={this.state.count === 1 ? "bg-gray-400 rounded-full h-2 w-2 dots-active" : "bg-gray-400 rounded-full h-2 w-2 dots"} onClick={this.handleClickOne}></div>
                         </a>
                         <a href="javascript:void(0)">
                              <div className={this.state.count === 2 ? "bg-gray-400 rounded-full h-2 w-2 dots-active" : "bg-gray-400 rounded-full h-2 w-2 dots"} onClick={this.handleClickTwo}></div>
                         </a>
                    </div>
               </div>
          )
     }
}

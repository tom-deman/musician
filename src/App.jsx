import React, { Component } from 'react'

import Header from './components/Header'
import Listen from './components/Listen'
import Videoclip from './components/Videoclip'
import Events from './components/Events'
import Portfolio from './components/Portfolio'
import News from './components/News'
import Social from './components/Social'
import Footer from './components/Footer'

import './assets/css/tailwind.css'
import './assets/css/main.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'


export default class App extends Component {

     render() {
          return (
               <div>
                    <Header />

                    <Listen />

                    <Videoclip />

                    <Events />

                    <Portfolio />

                    <News />

                    <Social />

                    <Footer />
               </div>
          )
     }
}
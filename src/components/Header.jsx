import React, {
     StrictMode
} from 'react'

import Navbar from './Navbar'

const Header = () => {
     const linksTabs = [
          {
               href: 'https://www.apple.com/befr/apple-music',
               icon: 'fab fa-apple',
               text: 'Apple Music'
          },
          {
               href: 'https://www.spotify.com/fr/',
               icon: 'fab fa-spotify',
               text: 'Spotify'
          },
          {
               href: 'https://soundcloud.com/discover',
               icon: 'fab fa-soundcloud',
               text: 'Soundcloud'
          }
     ]

     return (
          <StrictMode>
               <div
                    className='header h-screen'
                    id='intro'
               >
                    <Navbar />
                    <h1 className='title text-white text-center pt-32 animated fadeInLeft delay-1s'>
                         New album
                         <br />
                         is out !
                    </h1>
                    <div className='m-auto w-perso flex justify-between mt-16 icons'>
                         { linksTabs.map(
                              ( element, index ) => {
                                   return(
                                        <div
                                             className='text-center'
                                             key={ index }
                                        >
                                             <a
                                                  href={ element.href }
                                                  target='_blank'
                                                  rel="noopener noreferrer"
                                             >
                                                  <i className={ `${ element.icon } text-white text-5xl hover:text-red-500` } />
                                             </a>
                                             <p className='icon-text text-white text-sm mt-6 text-xs tracking-widest font-light hover:text-red-500'>
                                                  <a
                                                       href='https://www.apple.com/befr/apple-music/'
                                                       target='_blank'
                                                       rel="noopener noreferrer"
                                                  >
                                                       { element.text }
                                                  </a>
                                             </p>
                                        </div>
                                   )
                              }
                         )}
                    </div>

                    <div className='text-center w-full chevron'>
                         <a href='#album'>
                              <i className='fas fa-chevron-down text-white mt-10 hover:text-gray-500' />
                         </a>
                    </div>
               </div>
          </StrictMode>
     )
}


export default Header

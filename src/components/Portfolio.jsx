import React, {
     StrictMode
} from 'react'

import one   from '../assets/img/portfolio/1.jpg'
import two   from '../assets/img/portfolio/2.jpg'
import three from '../assets/img/portfolio/3.jpg'
import four  from '../assets/img/portfolio/4.jpg'
import five  from '../assets/img/portfolio/5.jpg'
import six   from '../assets/img/portfolio/6.jpg'
import seven from '../assets/img/portfolio/7.jpg'
import eight from '../assets/img/portfolio/8.jpg'
import nine  from '../assets/img/portfolio/9.jpg'
import ten   from '../assets/img/portfolio/10.jpg'

const Portfolio = () => {
     const portfolioTabsOne = [
          one,
          two,
          three,
          four,
          five
     ]

     const portfolioTabsTwo = [
          six,
          seven,
          eight,
          nine,
          ten
     ]

     return (
          <StrictMode>
               <div
                    className='covers mycolor pt-24'
                    id='gallery'
               >
                    <div className='w-full'>
                         <div className='flex ornot'>
                              { portfolioTabsOne.map(
                                   ( element, index ) => {
                                        return (
                                             <img
                                                  src={ element }
                                                  alt='portfolio'
                                                  className='portfolio'
                                                  key={ index }
                                             />
                                        )
                                   }
                              )}
                         </div>

                         <div className='flex ornot'>
                              { portfolioTabsTwo.map(
                                   ( element, index ) => {
                                        return (
                                             <img
                                                  src={ element }
                                                  alt='portfolio'
                                                  className='portfolio'
                                                  key={ index }
                                             />
                                        )
                                   }
                              )}
                         </div>
                    </div>
               </div>
          </StrictMode>
     )
}


export default Portfolio

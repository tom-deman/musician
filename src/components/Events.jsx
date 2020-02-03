import React, {
     StrictMode
} from 'react'

import Dates from './Dates'

const Events = () => {
     return (
          <StrictMode>
               <div
                    className='covers mycolor'
                    id='events'
               >
                    <p className='video-title text-white text-center text-5xl pt-32 mb-12'>
                         Next Events
                    </p>
                    <Dates />
               </div>
          </StrictMode>
     )
}


export default Events

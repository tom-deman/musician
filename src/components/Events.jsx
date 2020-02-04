import React, {
     StrictMode,
     useState,
     useEffect
} from 'react'

import Dates from './Dates'

const Events = () => {
     const [ count, setCount ] = useState( 0 )

     useEffect(() => {
          document.addEventListener( 'scroll', () => {
               if(window.scrollY > 2390)
                    setCount( 1 )
          })
     }, [])

     return (
          <StrictMode>
               <div
                    className='covers mycolor'
                    id='events'
               >
                    { count === 1
                         ?
                              <p className='video-title text-white text-center text-5xl pt-32 mb-12 animated fadeIn slow'>
                                   Next Events
                              </p>
                         :
                              <div className='h-64'></div>
                    }
                    <Dates />
               </div>
          </StrictMode>
     )
}


export default Events

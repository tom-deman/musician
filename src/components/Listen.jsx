import React, {
     StrictMode,
     useState,
     useEffect
} from 'react'

import Covers from './Covers'

const Listen = () => {
     const [ count, setCount ] = useState( 0 )

     useEffect(() => {
          document.addEventListener( 'scroll', () => {
               if(window.scrollY > 720 )
                    setCount( 1 )
          })
     }, [])

     return (
          <StrictMode>
               <div
                    className='listen mycolor'
                    id='album'
               >
                    <div className='my-w text-center ml-auto mr-auto pt-32'>
                         { count === 1
                              ?
                                   <p className='text-white text-5xl titleListen mb-6 animated fadeIn slow'>
                                        Listen on Spotify
                                   </p>
                              :
                                   <div className='h-24'></div>
                         }
                         <p className='text-gray-300 font-thin tracking-wide leading-relaxed text-center mb-32'>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae deleniti quam voluptas molestiae fugit reiciendis nesciunt ipsum atque quis, laborum aspernatur animi consequatur consequuntur exercitationem debitis itaque.
                         </p>
                    </div>
                    <Covers />
               </div>
          </StrictMode>
     )
}


export default Listen

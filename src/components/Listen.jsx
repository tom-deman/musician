import React, {
     StrictMode
} from 'react'

import Covers from './Covers'

const Listen = () => {
     return (
          <StrictMode>
               <div
                    className='listen mycolor'
                    id='album'
               >
                    <div className='my-w text-center ml-auto mr-auto pt-32'>
                         <h2 className='text-white text-5xl titleListen mb-6'>
                              Listen on Spotify
                         </h2>
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

import React, {
     StrictMode
} from 'react'

const Videoclip = () => {
     return (
          <StrictMode>
               <div
                    className='videoclip w-full background-img bg-fixed text-center'
                    id='videoclip'
               >
                    <p className='video-title text-white text-5xl pt-32 mb-12'>
                         Last Videoclip
                    </p>
                    <button>
                         <div className='h-24 w-24 rounded-full bg-gray-200 m-auto text-center hover:bg-gray-400'>
                              <i className='fas fa-play mt-10 text-xl ml-1' />
                         </div>
                    </button>
               </div>
          </StrictMode>
     )
}

export default Videoclip

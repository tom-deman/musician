import React, {
     StrictMode
} from 'react'

const Social = () => {
     const socialTabs = [
          {
               href: 'https://www.facebook.com',
               icon: 'fab fa-facebook-f'
          },
          {
               href: 'https://twitter.com',
               icon: 'fab fa-twitter'
          },
          {
               href: 'https://www.youtube.com',
               icon: 'fab fa-youtube'
          },
          {
               href: 'https://soundcloud.com/',
               icon: 'fab fa-soundcloud'
          },
          {
               href: 'https://spotify.com/',
               icon: 'fab fa-spotify'
          },
          {
               href: 'https://instagram.com',
               icon: 'fab fa-instagram'
          },
     ]

     return (
          <StrictMode>
               <div className='w-full videoclip social'>
                    <div className='my-container videoclip flex justify-around items-center m-auto'>
                         { socialTabs.map(
                              ( element, index ) => {
                                   return(
                                        <a
                                             target='_blank'
                                             className='mobile'
                                             href={ element.href }
                                             key={ index }
                                        >
                                             <i class={ `${ element.icon } text-white text-5xl hover:text-red-500` } />
                                        </a>
                                   )
                              }
                         )}
                    </div>
               </div>
          </StrictMode>
     )
}


export default Social

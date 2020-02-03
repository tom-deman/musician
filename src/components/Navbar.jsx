import React, {
     StrictMode,
     useState,
     useEffect
} from 'react'

const Navbar = () => {
     const [ count, setCount ] = useState( 0 )

     const navLinks = [
          {
               href: '#intro',
               text: 'Intro'
          },
          {
               href: '#album',
               text: 'New album'
          },
          {
               href: '#videoclip',
               text: 'Videoclip'
          },
          {
               href: '#events',
               text: 'Events'
          },
          {
               href: '#gallery',
               text: 'gallery'
          },
          {
               href: '#news',
               text: 'news'
          }
     ]

     const socialTabs = [
          {
               href: 'https://www.facebook.com',
               icon: 'fab fa-facebook-f'
          },
          {
               href: 'https://www.instagram.com',
               icon: 'fab fa-instagram'
          },
          {
               href: 'https://twitter.com',
               icon: 'fab fa-twitter'
          }
     ]


     useEffect(() => {
          window.addEventListener( 'scroll', () => {
               const isTop = window.scrollY > 75
               const myNav = document.getElementById( 'myNav' )

               isTop
                    ? myNav.classList.add('mycolor')
                    : myNav.classList.remove('mycolor')

               switch( true ) {
                    case ( window.scrollY < 720 ):
                         setCount( 0 )
                         break
                    case ( window.scrollY > 720 && window.scrollY < 1880 ):
                         setCount( 1 )
                         break
                    case ( window.scrollY > 1880 && window.scrollY < 2390 ):
                         setCount( 2 )
                         break
                    case ( window.scrollY > 2390 && window.scrollY < 3220 ):
                         setCount( 3 )
                         break
                    case ( window.scrollY > 3220 && window.scrollY < 3950 ):
                         setCount( 4 )
                         break
                    case ( window.scrollY > 3950 ):
                         setCount( 5 )
                         break
                    default:
                         // DO nothing
               }
          })
     }, [])

     return (
          <StrictMode>
               <div
                    className='bg-transparent fixed w-full'
                    id='myNav'
               >
                    <div className='flex justify-between h-16 border-b border-color'>
                         <div>
                              <p className='text-white mt-5 ml-8 select-none font-semibold text-lg'>
                                   <a href="https://tom-deman.github.io/portfolio-final/">
                                        TD
                                   </a>
                              </p>
                         </div>

                         <div>
                              <ul className='flex ml-24 text-white'>
                                   { navLinks.map(
                                        ( element, index ) => {
                                             return(
                                                  <li
                                                       className='m-5'
                                                       key={ index }
                                                  >
                                                       <a
                                                            href={ element.href }
                                                            className={
                                                                 count === index
                                                                      ? 'text-gray-500 uppercase text-xs font-medium'
                                                                      : 'hover:text-gray-500 uppercase text-xs font-medium'
                                                                 }
                                                       >
                                                            { element.text }
                                                       </a>
                                                  </li>
                                             )
                                        }
                                   )}
                              </ul>
                         </div>

                         <div className='border-l border-color'>
                              { socialTabs.map(
                                   ( element, index ) => {
                                        return(
                                             <a
                                                  href={ element.href }
                                                  target='_blank'
                                                  key={ index }
                                             >
                                                  <i className={ `${ element.icon } text-white mt-6 hover:text-gray-500 mx-5` } />
                                             </a>
                                        )
                                   }
                              )}
                         </div>
                    </div>

                    <div className={count > 0 ? 'h-4 w-4 bottom-0 mb-10 right-0 mr-10 fixed z-50' : 'hidden'}>
                         <a
                              href='#intro'
                              className='z-50'
                         >
                              <i class='fas fa-chevron-up text-white absolute hover:text-gray-500 z-50' />
                         </a>
                    </div>

                    <div className='rightdots fixed right-0 mr-8 m-64 z-50'>
                         { navLinks.map(
                              ( element, index ) => {
                                   return(
                                        <a
                                             href={ element.href }
                                             key={ index }
                                        >
                                             <div
                                                  className={
                                                       count === index
                                                            ? 'bg-white h-2 w-4 rounded-full mt-5 z-50'
                                                            : 'bg-gray-500 h-2 w-2 rounded-full hover:bg-gray-500 mt-5 z-50'
                                                  }
                                             />
                                        </a>
                                   )
                              }
                         ) }
                    </div>
               </div>
          </StrictMode>
     )
}


export default Navbar

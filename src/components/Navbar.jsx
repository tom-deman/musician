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
                                   TD
                              </p>
                         </div>

                         <div>
                              <ul className='flex ml-24 text-white'>
                                   { navLinks.map(
                                        ( element, index ) => {
                                             return(
                                                  <li className='m-5'>
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
                              <a
                                   href='https://www.facebook.com'
                                   target='_blank'
                              >
                                   <i className='fab fa-facebook-f text-white mt-6 hover:text-gray-500 ml-10' />
                              </a>
                              <a href='https://www.instagram.com' target='_blank'>
                                   <i class='fab fa-instagram text-white mt-6 hover:text-gray-500 ml-6'></i>
                              </a>
                              <a href='https://twitter.com' target='_blank'>
                                   <i class='fab fa-twitter text-white mt-6 hover:text-gray-500 ml-5 mr-10'></i>
                              </a>
                         </div>
                    </div>

                    <div className={count > 1 ? 'h-4 w-4 bottom-0 mb-10 right-0 mr-10 fixed z-50' : 'hidden'}>
                         <a
                              href='#intro'
                              className='z-50'
                         >
                              <i class='fas fa-chevron-up text-white absolute hover:text-gray-500 z-50' />
                         </a>
                    </div>

                    <div className='rightdots fixed right-0 mr-8 m-64 z-50'>
                         <a href='#intro'>
                              <div className={count === 1 ? 'bg-white h-2 w-2 rounded-full mt-5 z-50' : 'bg-gray-500 h-2 w-2 rounded-full hover:bg-gray-500 mt-5 z-50'} />
                         </a>
                         <a href='#album'>
                              <div className={count === 2 ? 'bg-white h-2 w-2 rounded-full mt-5 z-50' : 'bg-gray-500 h-2 w-2 rounded-full hover:bg-gray-500 mt-5 z-50'}></div>
                         </a>
                         <a href='#videoclip'>
                              <div className={count === 3 ? 'bg-white h-2 w-2 rounded-full mt-5 z-50' : 'bg-gray-500 h-2 w-2 rounded-full hover:bg-gray-500 mt-5 z-50'}></div>
                         </a>
                         <a href='#events'>
                              <div className={count === 4 ? 'bg-white h-2 w-2 rounded-full mt-5 z-50' : 'bg-gray-500 h-2 w-2 rounded-full hover:bg-gray-500 mt-5 z-50'}></div>
                         </a>
                         <a href='#gallery'>
                              <div className={count === 5 ? 'bg-white h-2 w-2 rounded-full mt-5 z-50' : 'bg-gray-500 h-2 w-2 rounded-full hover:bg-gray-500 mt-5 z-50'}></div>
                         </a>
                         <a href='#news'>
                              <div className={count === 6 ? 'bg-white h-2 w-2 rounded-full mt-5 z-50' : 'bg-gray-500 h-2 w-2 rounded-full hover:bg-gray-500 mt-5 z-50'}></div>
                         </a>
                    </div>
               </div>
          </StrictMode>
     )
}


export default Navbar

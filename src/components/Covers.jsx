import React, {
     StrictMode,
     useState
} from 'react'

import coverOne   from '../assets/img/covers/one.jpg'
import coverTwo   from '../assets/img/covers/two.jpg'
import coverThree from '../assets/img/covers/three.jpg'


const Covers = () => {
     const [ count, setCount ]             = useState( 0 )
     const [ actualCover, setActualCover ] = useState( coverOne )

     const buttonTabs = [
          coverOne,
          coverTwo,
          coverThree
     ]

     const changeCover = ( a ) => {
          setActualCover( a )
          switch( a ) {
               case coverOne:
                    setCount( 0 )
                    break
               case coverTwo:
                    setCount( 1 )
                    break
               case coverThree:
                    setCount( 2 )
                    break
               default:
                    break
          }
     }

     const buttonClass = 'bg-gray-400 rounded-full h-2 w-2'

     return (
          <StrictMode>
               <div className='covers mycolor'>
                    <div className='pictures m-auto'>
                         <img
                              src={ actualCover }
                              alt='covers images'
                         />
                    </div>

                    <div className='w-24 flex justify-around m-auto mt-20'>
                         { buttonTabs.map(
                              ( element, index ) => {
                                   return(
                                        <button key={ index }>
                                             <div
                                                  className={
                                                       count === index
                                                            ? `${ buttonClass } dots-active`
                                                            : `${ buttonClass } dots`
                                                  }
                                                  onClick={ () => changeCover( element ) }
                                             >
                                             </div>
                                        </button>
                                   )
                              }
                         )}
                    </div>
               </div>
          </StrictMode>
     )
}


export default Covers

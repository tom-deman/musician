import React, {
     StrictMode
} from 'react'

const Footer = () => {
     return (
          <StrictMode>
               <div className='footer mycolor'>
                    <div className='flex footer justify-center items-center'>
                         <input
                              type='text'
                              placeholder='Your email'
                              className='bg-transparent p-2 text-white text-sm border-b border-red-500 w-64 my-input'
                         />
                         <button className='bg-red-500 pt-3 pb-3 pl-6 pr-6 rounded hover:bg-red-400 text-white text-sm font-thin'>
                              <button>
                                   Send
                              </button>
                         </button>
                    </div>
               </div>
          </StrictMode>
     )
}


export default Footer

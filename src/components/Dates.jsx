import React, {
     StrictMode
} from 'react'


const Dates = () => {
     const datesTabs = [
          {
               where: 'Barlok',
               city: 'Brussels',
               date: 'March 13'
          },
          {
               where: 'Hankun',
               city: 'London',
               date: 'April 12'
          },
          {
               where: 'Sultan',
               city: 'Paris',
               date: 'April 18'
          },
     ]

     return (
          <StrictMode>
               { datesTabs.map(
                    ( element, index ) => {
                         return(
                              <div
                                   className='h-32 bg-transparent border-t border-color border-b my-container m-auto flex justify-around items-center'
                                   key={ index }
                              >
                                   <p className='text-white mobile'>
                                        { element.where }
                                   </p>
                                   <p className='text-white'>
                                        { element.city }
                                   </p>
                                   <p className='text-white mobile'>
                                        { element.date }
                                   </p>
                                   <button className='text-white pt-3 pb-3 pl-8 pr-8 border border-teal-600 hover:bg-teal-600'>
                                        Tickets
                                   </button>
                              </div>
                         )
                    }
               )}
          </StrictMode>
     )
}


export default Dates

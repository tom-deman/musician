import React, {
     StrictMode,
     useState,
     useEffect
} from 'react'


const News = () => {
     const [ count, setCount ] = useState( 0 )

     useEffect(() => {
          window.addEventListener( 'scroll', () => {
               if(window.scrollY > 3950)
                    setCount( 1 )
          })
     })
     const newsTabs = [
          {
               date: 'September 20, 2019',
               subject: 'Apply These 5 Secret Techniques To Improve music',
               comments: '6 Comments',
               post: '2 Hours'
          },
          {
               date: 'September 20, 2019',
               subject: 'Rules Not To Follow About music',
               comments: '4 Comments',
               post: '1 Hours'
          },
          {
               date: 'September 20, 2019',
               subject: 'How I Improved My music In One Easy Lesson',
               comments: '6 comments',
               post: '20 minutes'
          }
     ]

     return (
          <StrictMode>
               <div
                    className='hauteur mycolor'
                    id='news'
               >
                    <hr className='border-color my-container m-auto' />
                    { count === 1
                         ?
                              <p className='video-title text-white text-center text-5xl pt-32 mb-12 animated fadeIn slow'>
                                   News
                              </p>
                         :
                              <div className='h-64'></div>
                    }

                    { newsTabs.map(
                         ( element, index ) => {
                              return(
                                   <div
                                        className='text-white my-width m-auto text-center mb-16'
                                        key={ index }
                                   >
                                        <p className='text-xs font-thin mb-3'>
                                             { element.date }
                                        </p>
                                        <p className='mb-2 hover:text-red-500 text-bold text-xl'>
                                             <button>
                                                  { element.subject }
                                             </button>
                                        </p>
                                        <div className='flex justify-center'>
                                             <i className='fas fa-comment text-white mr-2' />
                                             <p className='text-xs font-thin mr-4 hover:text-gray-400'>
                                                  <button>
                                                       { element.comments }
                                                  </button>
                                             </p>
                                             <i className='fas fa-clock text-white mr-2' />
                                             <p className='text-xs font-thin'>
                                                  { element.post }
                                             </p>
                                        </div>
                                   </div>
                              )
                         }
                    )}
               </div>
          </StrictMode>
     )
}


export default News

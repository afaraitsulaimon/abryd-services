import React from 'react'
import {testimoniesDatas} from '../utils/TestimonyDatas'
import { BsQuote } from 'react-icons/bs'
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Testimony = () => {
  return (
          <Splide options={{
                 perPage:3,
                 arrows:false,
                 pagination:false,
                 drag:"free",
                 gap: "3rem",
                 autoplay:true,
                 breakpoints:{
                    768: {
                        perPage:1,
                      }
                   
                 }
 
            }} className=' w-full h-full flex items-center'>
        {testimoniesDatas.map((testimony) => 
            <SplideSlide key={testimony.id} className=' w-full rounded-md bg-green-500 p-6 '>
                   <div className='bg-[#ffffff] w-full h-full rounded-md relative flex flex-col justify-between p-6 '>
                    <div className='bg-[#1ba12d] w-10 h-10 rounded-full flex justify-center items-center absolute -top-5'><BsQuote className='text-2xl'/></div>
                    <div className='mt-0 mb-0'>
                        <p>{testimony.content}</p>
                    </div>
                    <div className=''>
                        <img src={testimony.userImage} alt="testimony-user" className='w-16 h-16 rounded-full' />
                       <div className='flex pt-2'>
                       <p className='font-bold'>{testimony.post}</p> <span className='pl-3 pr-3'>-</span> <span>{testimony.company}</span>
                       </div>
                    </div>
                    </div>
            </SplideSlide>
        )}
        </Splide>
  )
}

export default Testimony
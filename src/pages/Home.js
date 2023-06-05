import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider1 from '../assets/images/slider-1.jpg'
import Slider2 from '../assets/images/slider-2.jpg'
import Slider3 from '../assets/images/slider-3.jpg'
import BestAcctImage from '../assets/images/best-accounting.jpg'
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import {bestAccountDatas} from '../utils/BestAccountData'
import {serviceOfferDatas} from '../utils/ServicesOfferingData'

import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { BsPlus } from 'react-icons/bs'
import {RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'
import Testimony from '../components/Testimony'
import Faq1 from '../assets/images/faq1.jpg'
import Faq2 from '../assets/images/faq2.jpg'
import {freqAskQuestDatas} from '../utils/FaqDatas'



const Home = () => {

  // state for faq
  const [expandedIndex, setExpandedIndex] = useState(null);

// function for faq
const toggleFAQ = (index) => {
  if (expandedIndex === index) {
    setExpandedIndex(null); // Collapse the FAQ item if it's already expanded
  } else {
    setExpandedIndex(index); // Expand the FAQ item
  }
};

  const count = useMotionValue(0)
  const expYearsCount = useTransform(count, latest => Math.round(latest))

  const count2 = useMotionValue(0)
  const noComConsultingFor = useTransform(count2, latest => Math.round(latest))

  const count3 = useMotionValue(0)
  const noCacRegCompany = useTransform(count3, latest => Math.round(latest))

  
// function that count the years of experience one the page loads
const yearsOfExpCounting = () => {

  const controls = animate(count, 7, {
    type: "spring",
    stiffness: 10,
    onComplete: v => {}
  })

  return controls.stop
}


// function that count the numbers of company Consulting for

const companyConsultingFor = () => {

  const controls = animate(count2, 500, {
    type: "spring",
    stiffness: 10,
    onComplete: v => {}
  })

  return controls.stop
}

// function that count the numbers of company registered company

const cacRegCompany = () => {

  const controls = animate(count3, 1200, {
    type: "spring",
    stiffness: 10,
    onComplete: v => {}
  })

  return controls.stop
}


useEffect(() => {
  yearsOfExpCounting();
  companyConsultingFor();
  cacRegCompany();
}, [])



  return (
    <div className='w-full max-h-full bg-[#f8f9fd]'>
      <div>
      <Header/>

      </div>

<main >
  {/* start of the slider section*/}
  <section className='w-full h-[30em]'>
  <Splide options={{ 
    autoplay:true,
    rewind: true,
    speed:500,
    height:'100%'
   }}>
  <SplideSlide className='relative'>
    <img src={Slider1} alt="Image1" className='h-[30em] w-full object-cover '/>
    <div style={{ color:'rgba(148,147,143,1.5)' }} className='w-full absolute top-36 flex flex-col justify-center items-center'>
      <h1 className='text-5xl md:text-6xl lg:text-8xl text-center font-bold md:font-bold lg:font-normal'>Let's balance your account</h1>
      <p className='text-[1.3em] space-x-48 font-semibold pt-4 text-center'>With us,your account is up to date, no hidden flows. 100% Ledger Balance.</p>

    </div>
  </SplideSlide>

  <SplideSlide className='relative'>
    <img src={Slider2} alt="Image2"  className='h-[30em] w-full object-cover'/>
    <div style={{ color:'#0066c7' }} className='w-full absolute top-36 flex flex-col justify-center items-center'>
    <h1 className='text-5xl md:text-6xl lg:text-8xl text-center font-bold md:font-bold lg:font-normal'>Make it legit Business</h1>
      <p className='text-[1.3em] space-x-48 font-semibold pt-4 text-center'>Your company registration at ease, we can make it happen.</p>
    </div>
  </SplideSlide>

  <SplideSlide className='relative'>
    <img src={Slider3} alt="Image3"  className='h-[30em] w-full object-cover'/>
    <div style={{ color:'#01c3c1' }} className='w-full absolute top-36 flex flex-col justify-center items-center'>
    <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold md:font-bold lg:font-normal pt-8 md:pt-2 lg:pt-0'>Tax made easy</h1>
      <p className='text-[1em] md:text-[0.8em] lg:text-[1.3em] text-center space-x-48 font-semibold pt-4'>Both your Personal and Business tax can be sorted out with ease.</p>
    </div>
  </SplideSlide>
  </Splide>
  </section>
  {/* end of the slider section*/}

  {/* start for the best accounting */}
  <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 min-h-[100vh]">
  <div className='bg-red-500'><img src={BestAcctImage} alt='best accounting firm' className='h-full object-cover'/></div>
 

  <div className='bg-white-600'>
  <p className='pl-0 pt-0 md:pl-0 md:pt-0 lg:pl-10 lg:pt-10 text-1xl text-center md:text-center lg:text-start text-[#1ba12d]'>WELCOME TO ABRYD</p>
  <h1 className='pb-10 pl-0 pt-0 md:pl-0 md:pt-0 lg:pl-10 lg:pt-3 text-center md:text-center lg:text-start text-2xl md:text-2xl lg:text-3xl font-bold w-full md:w-full lg:w-[30rem]'>We Are the Best Accounting Agency</h1>


  {bestAccountDatas.map((data) => 
    <div className='bestAccountingListHolder mb-10' key={data.id}>
    <div className='flex flex-col md:flex-col lg:flex-row items-center text-center md:text-center lg:text-start ml-0 md:ml-0 lg:ml-10 mt-6'>
       <div className='bg-[#1ba12d] w-14 md:w-14 lg:w-18 h-14 md:h-14 lg:h-18 flex justify-center items-center rounded-full'>
       {data.icon}
       </div>

       <div className='w-full md:w-full lg:w-[30rem] pl-0 md:pl-0 lg:pl-4'>
         <h1 className='font-bold  text-[1.2rem]'>{data.header}</h1>
         <p className='pt-1'>{data.content}</p>
       </div>
    </div>
 </div>
  )}
 
  </div>

  </section>
  {/* end for the best accounting*/}


{/* start for the services offering */}
<section className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-0 md:gap-0 lg:gap-6 gap-y-3 md:gap-y-3 lg:gap-y-0 mt-5 md:mt-10 lg:mt-40 mr-0 md:mr-0 lg:mr-4 ml-0 md:ml-0 lg:ml-4 min-h-[100vh] md:min-h-[100vh] lg:min-h-[50vh]'>
  {serviceOfferDatas.map((data)=> 

<div className='relative'>
      <div>
        {data.icon}
      </div>
      <div className='absolute top-1 md:top-1 lg:top-2 left-8 md:left-8 lg:left-16 h-32 md:h-32 lg:h-44'>
            <h1 className='font-bold text-1xl md:text-1xl lg:text-2xl text-black'>{data.header}</h1>
          <p className='text-[#b6b7b9]'>
              {data.content}
              </p>
      </div>
    </div>
    
  )}
    
  
</section>
{/* end for the services offering */}


{/* numbers counting start from here */}

<section className='hidden md:hidden lg:grid grid-cols-3 gap-x-12 ml-8 mr-8 h-52'>

  <div className='flex flex-col justify-center items-center'>
    <motion.div className='text-6xl font-bold text-[#1ba12d]'>
{expYearsCount}
</motion.div>
<BsPlus className='text-4xl font-extrabold absolute top-[49em] left-[14.3rem]'/>
<p className='text-2xl text-[#343435] pt-3'>Years of Experience</p>

  </div>

  <div className='flex flex-col justify-center items-center relative'>
    <motion.div className='text-6xl font-bold text-[#1ba12d]'>
{noComConsultingFor}
</motion.div>
<BsPlus className='text-4xl font-extrabold absolute top-[4.5rem] left-[14.3rem]'/>
<p className='text-2xl text-[#343435] p-3'>Consulting Firms</p>

  </div>

  <div className='flex flex-col justify-center items-center'>
    <motion.div className='text-6xl font-bold text-[#1ba12d]'>
{noCacRegCompany}
</motion.div>
<BsPlus className='text-4xl font-extrabold absolute top-[49em] left-[30.9em]'/>
<p className='text-2xl text-[#343435] pt-3'>Registered Company</p>

  </div>

</section>
{/* numbers counting ends here */}


{/* testimonies start from here */}
<section className='w-100 min-h-100vh bg-red-500 relative mb-52'>
      <div className='bg-[#8fd0d2] w-full h-[70vh] flex flex-col items-center pt-20'>
            <p>TESTIMONIES</p>
            <h1 className='text-[30px] text-center md:text-center lg:text-start font-bold leading-10'>Happy Clients & Feedbacks</h1>
      </div>

      <motion.div
    animate={{ opacity:1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition ={{ duration: 0.5 }}
    className='w-full h-[60vh] absolute top-[15em]  '>
             <Testimony />

    </motion.div>
</section>

{/* testimonies ends here */}


{/* Faq started from here */}
<section className='grid grid-flow-row md:grid-flow-row lg:grid-flow-col grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-100 min-h-[100vh]'>
  <div className='hidden md:hidden lg:flex justify-center items-center'>
    <img src={Faq2} alt='Faq Information'  className='h-[28rem] w-[28rem] object-cover ml-10'/>

  </div>
  <div className='p-4 md:p-4 lg:p-16 '>
    <span className='text-[#28a63a]'>FAQS</span>
    <h1 className='text-4xl font-semibold text-center md:text-center lg:text-start '>Frequently Asks Questions</h1>
   <div className='text-1xl pt-5'>
    {freqAskQuestDatas.map((faq,index) => 
     <div key={faq.id} className='pb-5'>
       <div className= {expandedIndex === index ? 'bg-green-500 p-4 flex justify-between items-center rounded-2xl shadow-xl cursor-pointer' : 'bg-white p-4 flex justify-between items-center rounded-2xl shadow-xl cursor-pointer'} onClick={() => toggleFAQ(index)}><span>{faq.Question}</span> {expandedIndex === index ? <RiArrowUpSLine/> : <RiArrowDownSLine/>} </div>
       {expandedIndex === index && <div className='pt-3 pb-4'><span>{faq.Answer}</span></div>}
     </div>

    )}

   </div>
  </div>
</section>
{/* Faq ends here */}

{/* start of enquiry bar */}
<section className='bg-[#8fd0d2] mt-10 mb-10'>
        <div className='text-center'>
          <p className='text-4xl font-bold font-mono pt-5'>Want to reach out to Us? </p>
          <p className='pt-5 text-2xl font-serif'><span className='font-bold pr-4'>Email:</span>info@abrydservices.com</p>
          <p className='pb-4 text-2xl font-serif'><span className='font-bold pr-4'>Phone:</span>08031771111</p>
        </div>
</section>

{/* start of enquiry bar */}


</main>
        <div>
        <Footer/>

        </div>
    </div>
  )
}

export default Home
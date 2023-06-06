import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BestAcctImage from '../assets/images/best-accounting.jpg'
import { Link } from 'react-router-dom'
import Slider2 from '../assets/images/slider-2.jpg'
import Slider3 from '../assets/images/slider-3.jpg'


const Aboutus = () => {

  const backgroundImage = {
    backgroundImage: `url(${BestAcctImage})`,
    backgroundSize: 'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat'
    /* Additional background properties if needed */
  };

  return (
    <div className='w-full max-h-full bg-[#f8f9fd]'>
    <header>
      <Header/>
    </header>
<main>
  {/* about top head start from here */}
  <section className="w-[100%] h-72 bg-red-500" style={backgroundImage} >
  <div className='w-full h-full bg-[#8fd0d2] opacity-70 pl-28 pt-48 bg-scroll'>
    <Link to='/' className='no-underline text-1xl font-mono'>Home</Link>
      <p className='font-semibold text-4xl'>About Us</p>
  </div>
</section>
  {/* about top head end here */}

  {/* about us content start from here */}
  <section className='w-full min-h-[100vh] flex justify-center'>
     <div className='w-[97%] h-full  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
     <div className=' hidden md:hidden lg:block relative '>
      <img src={Slider2} alt='abtImg1' className='w-[75%] absolute z-10 top-20'  />
      <img src={Slider3} alt='abtImg3' className='w-[75%] absolute top-[19em] left-[9.5em]'  />

</div>
<div className=''>
  <h1 className='text-center text-3xl font-bold pt-4 pb-4'>Our Story</h1>
 <div className='p-10 text-center md:text-center lg:text-start'>
 <p className='pb-4'>
    Abryd services is a professional company which started in the year 2001, 
    it started as a services of supplies to major stores within the states. we started noticing from
    some of our major client are always having issues in managing their account, tax and stocks, due 
    to the absent of some key owners of the business. So, we started helping out in stock keeping, balancing
    of account and helping in sorting tax out, so as not to have a huge debt in their business.
</p>
<p className='pb-4'>
    Abryd services is a professional company which started in the year 2001, 
    it started as a services of supplies to major stores within the states. we started noticing from
    some of our major client are always having issues in managing their account, tax and stocks, due 
    to the absent of some key owners of the business. So, we started helping out in stock keeping, balancing
    of account and helping in sorting tax out, so as not to have a huge debt in their business.
    </p>
<p className='pb-4'>
    Abryd services is a professional company which started in the year 2001, 
    it started as a services of supplies to major stores within the states. we started noticing from
    some of our major client are always having issues in managing their account, tax and stocks, due 
    to the absent of some key owners of the business. So, we started helping out in stock keeping, balancing
    of account and helping in sorting tax out, so as not to have a huge debt in their business.
  </p>
 </div>
</div>
     </div>
  </section>
  {/* about us content ends here */}

</main>
    <footer>
      <Footer/>
    </footer>
    </div>

  )
}

export default Aboutus
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import myTopBgImage from '../assets/images/faq2.jpg'
import { BlogCard } from '../assets/styles/BlogStyle';

const Blog = () => {

  // style for background image
  const backgroundImage = {
    backgroundImage: `url(${myTopBgImage})`,
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
 {/* blog top head start from here */}
 <section className="w-[100%] h-72 bg-red-500" style={backgroundImage} >
  <div className='w-full h-full bg-[#8fd0d2] opacity-70 pl-28 pt-48 bg-scroll'>
    <Link to='/' className='no-underline text-1xl font-mono'>Home</Link>
      <p className='font-semibold text-4xl'>Blog </p>
  </div>
</section>
  {/* blog top head end here */}

{/* blog content start from here */}
<section className='w-[100%] h-[100vh] flex justify-center items-center bg-green-400'>
  <BlogCard className='text-5xl md:text-5xl lg:text-8xl font-mono font-bold ' style={{ }}>Coming Soon</BlogCard>
</section>
{/* blog content ends  here */}

</main>
    <footer>
      <Footer/>
    </footer>
    </div>
  )
}

export default Blog
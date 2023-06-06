import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CustomerServImage from "../assets/images/customerservice.jpg";
import CustomerservImage2 from "../assets/images/customerserv2.jpg";

import { FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import {BiLocationPlus, BiWorld} from 'react-icons/bi'

const Contactus = () => {
  const backgroundImage = {
    backgroundImage: `url(${CustomerServImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    /* Additional background properties if needed */
  };
  return (
    <div className="w-full max-h-full bg-[#f8f9fd]">
      <header>
        <Header />
      </header>
      <main>
        {/* contact us top head start from here */}
         <section className="w-[100%] h-72 bg-red-500" style={backgroundImage}>
          <div className="w-full h-full bg-[#8fd0d2] opacity-70 pl-28 pt-48 ">
            <Link
              to="/"
              className="no-underline text-1xl font-mono hover:text-green-500"
            >
              Home
            </Link>
            <p className="font-semibold text-4xl">Contact Us</p>
          </div>
        </section> 
        {/* contact us top head end here */}

        {/* contact us content start from here */}
     <section className='w-full h-[100vh] flex justify-center items-center'>
          <div className="w-[100%] md:w-[100%] lg:w-[90%] xl:w-[90%] h-[100%] md:h-[100%] lg:h-[30em] bg-red-400 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="hidden md:hidden lg:block xl:block">
                <img src={CustomerservImage2} alt="customer service" className="w-full h-full object-cover" />
            </div>
             
             <div className="w-full bg-[#8fd0d2]">
             <p className="text-3xl font-medium text-center pt-4 text-white">Let's get in touch</p> 
               <p className="font-sans text-center pt-2 pb-3 text-white">We're open for Business or just to have a chat</p> 
             
             <div className="w-full flex flex-col justify-between items-center">
                <div className="w-[95%] md:w-[95%] lg:w-[85%] h-20 bg-[#6d9b9c] drop-shadow flex items-center rounded-md shadow-lg p-5 md:p-5 lg:p-10 m-2">
                    <div className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full">
                        <BiLocationPlus className="text-2xl text-white"/>
                    </div>
                    <div className="text-white ">
                      <span className="pl-3 md:pl-3 lg:pl-6 font-semibold text-[1rem]">Address: </span><span className="">198 Brown Road,Lagos, Nigeria,23401</span>
                    </div>
                </div>
                <div className="w-[95%] md:w-[95%] lg:w-[85%]  h-20 bg-[#6d9b9c] flex items-center p-5 md:p-5 lg:p-10 m-2 rounded-md ">
                    <div className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full">
                        <FaPhoneAlt className="text-2xl text-white"/>
                    </div>
                    <div className="text-white">
                      <span className="pl-3 md:pl-3 lg:pl-6 font-semibold text-[1rem]">Phones: </span><span>+234-08043528292</span>
                    </div>
                </div>

                 <div className="w-[95%] md:w-[95%] lg:w-[85%] h-20 bg-[#6d9b9c] flex items-center  p-5 md:p-5 lg:p-10 m-2 rounded-md ">
                    <div className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full">
                        <HiMail className="text-2xl text-white"/>
                    </div>
                    <div className="text-white">
                      <span className="pl-3 md:pl-3 lg:pl-6 font-semibold text-[1rem]">Email: </span><span>info@abrydservices.com</span>
                    </div>
                </div>
                <div className="w-[95%] md:w-[95%] lg:w-[85%]  h-20 bg-[#6d9b9c] flex items-center  p-5 md:p-5 lg:p-10 m-2 rounded-md ">
                    <div className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full">
                        <BiWorld className="text-2xl text-white"/>
                    </div>
                    <div className="text-white">
                      <span className="pl-3 md:pl-3 lg:pl-6 font-semibold text-[1rem]">Website: </span><span>www.abrydservices.com</span>
                    </div>
                </div>
             </div>
             </div>
          </div>
          
        </section> 
        {/* contact us content end here */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contactus;

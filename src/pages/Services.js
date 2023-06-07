import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { servicesdatas } from '../utils/ServiceDatas'

const Services = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(false);

  const handleModalToggle = (theCardNumber) => {
    setModalOpen(!modalOpen);
    servicesdatas.findIndex((data,index) => 

    index === theCardNumber ? setModalData(data) : null
    )
  };

  const onClose = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="w-full max-h-full bg-[#f8f9fd]">
      <header>
        <Header />
      </header>

<main className='h-full w-[100%]'>
  {/* top content start from here */}
  <section className='w-[100%] h-60 flex flex-col items-center justify-center mb-16 md:mb-10 lg:mb-0'>
<p className='text-2xl md:text-2xl lg:text-5xl text-center font-mono font-bold md:font-bold lg:font-normal'>We love to hear from you</p>
<p className='text-center font-mono pt-4'>Whether you’re curious about features, a trial will convince you. We are always ready to serve you anytime.
</p>
  </section>
    {/* top content stops here */}

<section className='w-[100%] h-[100vh]  flex flex-col md:flex-col lg:flex-row items-center justify-around gap-9'>
  <div className='w-[90%] md:w-[90%] lg:w-[20%] h-[80%] border-2 border-[#22c55e] rounded-md mt-14 md:mt-4 lg:mt-0 flex flex-col justify-around items-center'>
        <h1 className='lg:text-1xl md:lg:text-1xl lg:text-2xl font-semibold'>Tax Consulting</h1>
        <p className='text-center p-2 font-thin'>We help fix the tax issue and also help sort the tax for staffs and company </p>
        <button onClick={() => handleModalToggle(0)}  className=' border-2 border-[#22c55e] px-6 py-2 md:px-6 md:py-1 lg:px-10 lg:py-4 font-mono hover:bg-[#22c55e] text-[#22c55e] hover:text-white'>Read More</button>
  </div>

  <div className='w-[90%] md:w-[90%] lg:w-[20%] h-[80%] border-2 border-[#22c55e] rounded-md flex flex-col justify-around items-center'>
  <h1 className='lg:text-1xl md:lg:text-1xl lg:text-2xl font-semibold'>CAC Registration</h1>
        <p className='text-center p-2 font-thin'>Make your company more legit, let your customers know who you are and get more recognition with company registration</p>
        <button onClick={() => handleModalToggle(1)}  className=' border-2 border-[#22c55e] px-6 py-1 md:px-6 md:py-1  lg:px-10 lg:py-4 font-mono hover:bg-[#22c55e] text-[#22c55e] hover:text-white'>Read More</button>
  </div>

  <div className='w-[90%] md:w-[90%] lg:w-[20%] h-[80%] border-2 border-[#22c55e] rounded-md flex flex-col justify-around items-center'>
  <h1 className='lg:text-1xl md:lg:text-1xl lg:text-2xl font-semibold'>Auditing</h1>
        <p className='text-center p-2 font-thin'>Let's help you dig into the missing part of your account, look for it and make sure your account is intact</p>
        <button onClick={() => handleModalToggle(2)}  className=' border-2 border-[#22c55e]  px-6 py-1 md:px-6 md:py-1  lg:px-10 lg:py-4 font-mono hover:bg-[#22c55e] text-[#22c55e] hover:text-white'>Read More</button>
  </div>

  <div className='w-[90%] md:w-[90%] lg:w-[20%] h-[80%] border-2 border-[#22c55e] rounded-md mb-40 md:mb-40 lg:mb-0 flex flex-col justify-around items-center'>
  <h1 className='lg:text-1xl md:lg:text-1xl lg:text-2xl font-semibold'>Book-keeping</h1>
        <p className='text-center p-2 font-thin'>Help in taking stock, balance the ledger, keep the stock record intact and also balance the account . </p>
        <button onClick={() => handleModalToggle(3)} className=' border-2 border-[#22c55e] px-6 py-1 md:px-6 md:py-1 lg:px-10 lg:py-4 font-mono hover:bg-[#22c55e] text-[#22c55e] hover:text-white'>Read More</button>
  </div>
</section>
     {/* down content start from here */}
  <section>

</section>
  {/* down content stops here */}

<section>
<div className={modalOpen ? "fixed inset-0 flex items-center justify-center z-50" :" hidden"}>
   {modalData && 
    <div className="bg-white rounded-lg p-8" key={modalData.id}>
    <h2 className="text-2xl font-bold mb-4">{modalData.thehead}</h2>
    <p className="mb-4">{modalData.content}</p>
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={onClose}
    >
      Close
    </button>
  </div>
   }
    </div>
</section>

</main>
      <footer className='mt-10 md:mt-10 lg:mt-0'>
        <Footer />
      </footer>
      </div>
  )
}

export default Services
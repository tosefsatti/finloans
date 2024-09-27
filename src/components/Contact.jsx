import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='contact mb-28'>
      <div className='contactpage'>
        <h1 className='text-4xl md:text-6xl mx-4 pt-52 md:ml-32 text-white'>Contact us</h1>

      </div>

      <h1 className='font-bold text-2xl my-6 mx-4 md:mx-10 '>Get in Touch</h1>

      <div className='flex flex-col md:flex-row mx-4 md:mx-10 justify-between'>
        
        <div className='left w-full md:w-[60%] md:text-xl'>
        <div className="w-full border rounded-md px-4 py-4">
        <textarea rows="10" className="w-full outline-none" placeholder='Message'/>
        </div>
        <div className='w-full flex flex-col md:flex-row justify-between my-4'>
          <input type="text" className='w-full md:w-[40%] outline-none px-4 py-4 border rounded-md' placeholder='Enter your name' />
          <input type="text" className='w-full md:w-[40%] outline-none px-4 py-4 border rounded-md' placeholder='Enter email address' />
        </div>
        <div>
        <input type="text" className="w-full outline-none px-4 py-4 border rounded-md" placeholder='Enter subject' />
        </div>
        <button className='btn border-[#33D4D6] my-5 text-[#33D4D6] hover:text-white hover:bg-[#33D4D6]'>SEND MESSAGE</button>
        </div>


        <div className='right w-full md:pr-20 md:w-[30%] space-y-5 mx-4 md:text-2xl'>
          <div className='space-y-1 space-x-3 flex  items-center '>
          <div><i className="fa-solid fa-house"></i></div>
           <div> <p  className='font-bold'>Buttonwood, California.</p>
           <p className='text-[#7A838B]'>Rosemead, CA 91770</p></div>
          </div>
          <div  className='space-y-1  space-x-4 flex  items-center '>
            <div><i className="fa-solid fa-mobile-screen-button"></i></div>
            <div><p  className='font-bold'>00 (440) 9865 562.</p>
            <p className='text-[#7A838B]'>Mon to Fri 9am to 6pm</p></div>
          </div>
          <div  className='space-y-1  space-x-3 flex  items-center '>
            <div><i className="fa-regular fa-envelope"></i></div>
           <div> <p className='font-bold'>support@colorlib.com</p>
           <p className='text-[#7A838B]'>Send us your query anytime!</p></div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Contact

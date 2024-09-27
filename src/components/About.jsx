import React, {useState} from 'react'

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  const dropdowns = [
    {
      title: 'Adieus who direct esteem?',
      content: 'Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.',
    },
    {
      title: 'Who direct esteem it esteem.',
      content: 'Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.',
    },
    {
      title: 'Ddfdw gafteo vhayrj babalo',
      content: 'Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing',
    },
    {
      title: 'Drop down one jaldyu bagty',
      content: 'Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing',
    },
  ];
  const cards = [
    {
      title: "Car Loan",
      imgSrc:
        "https://preview.colorlib.com/theme/finloans/img/svg_icon/service_2.png.webp",
    },
    {
      title: "Home Loan",
      imgSrc:
        "https://preview.colorlib.com/theme/finloans/img/svg_icon/service_1.png.webp",
    },
    {
      title: "Education Loan",
      imgSrc:
        "https://preview.colorlib.com/theme/finloans/img/svg_icon/service_3.png.webp",
    },
  ];
  return (
    <>
    <div className='about'>
      <div className='about-bg'>
        <h1 className='text-4xl md:text-6xl mx-4 pt-52 md:ml-32 text-white'>About us</h1>

      </div>
      <div className="flex flex-col md:flex-row mx-4 md:mx-10 justify-between mt-16">
        <div className="left w-full md:w-[45%] rounded-md mb-10 md:mb-0">
          <img
            className="w-full rounded-md"
            src="https://preview.colorlib.com/theme/finloans/img/about/about.png"
            alt="Why Choose Us"
          />
        </div>
        <div className="right w-full md:w-[45%] pt-10 md:pt-20 mx-4">
          <h1 className="text-3xl font-bold mb-6 md:mb-10">Why Choose us?</h1>
          <p className="text-[#7A838B] text-lg md:text-xl pr-4 mb-8">
          We offer flexible repayment options with some of the lowest interest rates in the market.
          </p>
          <ul className="list-disc space-y-2 text-lg md:text-xl">
            <li>Loans with quick approval.</li>
            <li>Customize a loan based on the amount.</li>
            <li>Good credit profile and you have built your loan.</li>
            <li>We provide online instant cash loans.</li>
          </ul>
          <button className="btn mt-8 bg-[#33D4D6] text-white py-3 px-6 rounded-md hover:bg-white hover:text-[#33D4D6] hover:border hover:border-[#33D4D6]">
            About Us
          </button>
        </div>
      </div>

      <div className="how-it-works mt-16 mb-10">
        <div className="text-center space-y-3 mx-5">
          <h1 className="text-2xl md:text-5xl text-black">How it Works</h1>
          <p className="text-[#7A838B] md:text-xl">
            We provide online instant cash loans with quick approval that suit
            your term
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-32 mx-4 mt-9">
          <div className="space-y-4 ">
            <span className="bg-[#DDF0FF] text-[#0A8CFF] text-center w-[72px] h-[72px] rounded-full inline-flex items-center justify-center">
              01
            </span>
            <h1 className="text-2xl text-black">Apply for loan</h1>
            <p className="text-[#7A838B] md:text-xl">
              We will customize a loan based on the amount of cash your company
              need term
            </p>
          </div>
          <div className="space-y-4 ">
            <span className="bg-[#DDF0FF] text-[#0A8CFF] text-center w-[72px] h-[72px] rounded-full inline-flex items-center justify-center">
              02
            </span>
            <h1 className="text-2xl text-black">Application review</h1>
            <p className="text-[#7A838B] md:text-xl">
              We will customize a loan based on the amount of cash your company
              need term
            </p>
          </div>
          <div className="space-y-4 ">
            <span className="bg-[#DDF0FF] text-[#0A8CFF] text-center w-[72px] h-[72px] rounded-full inline-flex items-center justify-center">
              03
            </span>
            <h1 className="text-2xl text-black">Get funding fast</h1>
            <p className="text-[#7A838B] md:text-xl">
              We will customize a loan based on the amount of cash your company
              need term
            </p>
          </div>
        </div>
      </div>
      <div className="faq flex mb-14">
        <div className="hidden md:block md:w-1/2">
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_WkzKgPvzvQZ34r-06bSE3WwLBJFzWUbuA&s"
            alt="image"
          />
        </div>

        <div className="w-full md:w-1/2 mx-3 md:text-center mt-8">
          <h1 className="text-3xl font-bold ">Frequently Asked</h1>
         <div className="w-full max-w-md mx-auto mt-10">
      {dropdowns.map((dropdown, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer border-b-2 p-4 rounded-md"
            onClick={() => toggleDropdown(index)}
          >
            <span className="text-lg font-medium text-gray-700">{dropdown.title}</span>
            <svg
              className={`w-5 h-5 text-gray-700 transform transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>

          {openIndex === index && (
            <div className="mt-2 bg-gray-100 p-4 rounded-md text-gray-600">
              <p>{dropdown.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
        </div>
      </div>



      <div className="apply-loan flex flex-col md:flex-row justify-around mt-7 mb-20 p-4 md:pt-20 md:pb-20 mx-4">
        <div className="w-full md:w-1/2 text-3xl md:text-5xl text-white">Apply for a Loan for your startup, education or company</div>
        <button className="btn w-[150px] mb-4 mt-8 bg-[#33D4D6] text-white text-xl rounded-md hover:bg-white hover:text-black hover:border hover:border-black px-6 py-3">
              Apply now
            </button>

      </div>
    </div>
    </>
  )
}

export default About

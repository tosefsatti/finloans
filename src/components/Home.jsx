import React, {useState} from "react";
import About from "./About";

const Home = () => {

  
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
      <div className="Home">
        <div className="container pt-20 flex flex-col md:flex-row md:space-x-6 items-center">
          <div className="left w-full  md:ml-4 md:w-1/2 text-white px-4 md:px-0 order-1">
            <p className="text-3xl md:text-5xl lg:text-7xl mt-6 leading-tight md:leading-normal">
              Get Loans for your Business Growth or Startups
            </p>
            <button className="btn mb-4 mt-8 bg-[#33D4D6] text-white text-xl rounded-md hover:bg-white hover:text-black hover:border hover:border-black px-6 py-3">
              How it works
            </button>
          </div>

          <div className="right w-full md:w-1/2 mx-auto text-center rounded-md p-6 order-2 mb-10 md:mb-0">
            <div className="bg-white py-6 px-5 space-y-6 md:space-y-8 rounded-md">
              <h1 className="text-2xl md:text-3xl font-semibold">
                How much do you want?
              </h1>
              <p className="text-lg md:text-xl text-[#7A838B]">
                We provide online instant cash loans with quick approval
              </p>
              <div className="border w-full py-4 md:py-6 rounded-md">
                <select className="w-full px-4 md:px-6 cursor-pointer outline-none text-[#7A838B]">
                  <option value="amount">Amount</option>
                  <option value="10$">$10</option>
                  <option value="40$">$40</option>
                  <option value="50$">$50</option>
                </select>
              </div>
              <div className="border w-full py-4 md:py-6 rounded-md">
                <select className="w-full px-4 md:px-6 cursor-pointer outline-none text-[#7A838B]">
                  <option value="amount">Month</option>
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="9">9 months</option>
                  <option value="12">12 months</option>
                </select>
              </div>
              <p className="text-[#7A838B]">You have to pay: $0</p>
              <button className="w-full border bg-[#33D4D6] text-white py-3 text-xl rounded-md hover:text-[#33D4D6] hover:bg-white hover:border-black">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="offers mt-16 text-center px-4">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">What we offer for you</h1>
          <p className="text-[#7A838B] text-lg md:text-xl">
            We provide online instant cash loans with quick approval that suit
            your terms.
          </p>
        </div>
      </div>

      <div className="loans flex flex-col md:flex-row mx-4 md:mx-12 lg:mx-20 justify-between mt-16 mb-10 space-y-6 md:space-y-0 md:space-x-6">
        {cards.map((loan, idx) => (
          <div
            key={idx}
            className="bg-[#08acff] w-full md:w-[30%] p-8 md:p-10 rounded-md"
          >
            <div className="text-center">
              <img
                className="m-auto"
                src={loan.imgSrc}
                alt={`${loan.title} image`}
              />
              <h2 className="mt-5 text-white text-2xl">{loan.title}</h2>
              <p className="mt-4 mb-3 text-[#33D4D6] font-bold text-2xl">
                $3000-$10000
              </p>
            </div>
            <hr />
            <div className="mt-7">
              <ul className="list-disc space-y-2 text-white text-sm md:text-base">
                <li>Borrow - $350 over 3 months</li>
                <li>Interest rate - 292% pa fixed</li>
                <li>Total amount payable - $525.12</li>
                <li>Representative - 1,286% APR</li>
              </ul>
              <button className="btn w-full mt-6 bg-[#33D4D6] text-white py-3 rounded-md hover:bg-[#08acff] hover:text-[#33D4D6]">
                Apply now
              </button>
            </div>
          </div>
        ))}
      </div>

      <About/>



    
    </>
  );
};

export default Home;

import React from "react";

const Loan = () => {
  return (
    <>
    <div className="applyloan">
      <div className="apply-now">
        <h1 className="text-4xl md:text-6xl mx-4 pt-52 md:ml-32 text-white">
          Apply Now
        </h1>
      </div>

      <div className="w-full md:w-[50%]  mx-auto px-5 py-8 mt-14 border rounded-md">
        <div className="w-full text-center space-y-4 mb-5">
          <h1 className="text-3xl font-bold">How much do you want?</h1>
          <p className="text-[#7A838B]">
            We provide online instant cash loans with quick approval that suit
            your term length
          </p>
        </div>
        <div className="space-y-5 mt-10">
          <div className="w-full border rounded-md">
            <input type="text" className="px-4 py-5  outline-none" placeholder="Your name"/>
          </div>
          <div className="w-full border rounded-md">
            <input type="text" className="px-4 py-5  outline-none" placeholder="Email"/>
          </div>
          <div className="w-full border rounded-md">
            <input type="text" className="px-4 py-5  outline-none" placeholder="Phone no"/>
          </div>
          <div className="w-full border rounded-md">
           <select className="px-4 py-5 w-full outline-none cursor-pointer">
            <option value="purpose">Purpose</option>
            <option value="purpose">Purpose 1</option>
            <option value="purpose">Purpose 2</option>
           </select>
          </div>
          <div className="w-full border rounded-md">
          <select className="px-4 py-5 w-full outline-none cursor-pointer">
            <option value="purpose">Amount</option>
            <option value="purpose">$10</option>
            <option value="purpose">$20</option>
            <option value="purpose">$30</option>
           </select>
          </div>
          <div className="w-full border rounded-md">
          <select className="px-4 py-5 w-full outline-none cursor-pointer">
            <option value="purpose">Month</option>
            <option value="purpose">3 months</option>
            <option value="purpose">6 months</option>
           </select>
          </div>
        </div>
        <p className="text-[#7A838B] my-5">You have to pay: $0</p>
        <div className="w-full border rounded-md">
        <textarea rows="10" className="w-full outline-none px-4 py-4" >Message</textarea>
        </div>
        <button className=" w-full mb-4 mt-8 bg-[#33D4D6] text-white text-xl rounded-md hover:bg-white hover:text-[#33D4D6] hover:border hover:border-[#33D4D6] px-6 py-3">
              Apply now
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
            <p className="text-[#7A838B]">
              We will customize a loan based on the amount of cash your company
              need term
            </p>
          </div>
          <div className="space-y-4 ">
            <span className="bg-[#DDF0FF] text-[#0A8CFF] text-center w-[72px] h-[72px] rounded-full inline-flex items-center justify-center">
              02
            </span>
            <h1 className="text-2xl text-black">Application review</h1>
            <p className="text-[#7A838B]">
              We will customize a loan based on the amount of cash your company
              need term
            </p>
          </div>
          <div className="space-y-4 ">
            <span className="bg-[#DDF0FF] text-[#0A8CFF] text-center w-[72px] h-[72px] rounded-full inline-flex items-center justify-center">
              03
            </span>
            <h1 className="text-2xl text-black">Get funding fast</h1>
            <p className="text-[#7A838B]">
              We will customize a loan based on the amount of cash your company
              need term
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loan;

import React from "react";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="max-w-screen-2xl footer mt-20 mb-8 px-5 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between text-xl">
          <div className="flex flex-col items-start mb-4 md:text-left md:mr-10 space-y-3">
            <img
              src="https://preview.colorlib.com/theme/finloans/img/footer_logo.png"
              className="mb-8  md:mx-0 text-black"
              alt="logo"
            />
            <p className="text-[#7A838B]">finloan@support.com</p>
            <p className="text-[#7A838B]">+10 873 672 6782</p>
            <p className="text-[#7A838B]">600/D, Green road, NewYork</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-32">
            <div className="services flex flex-col space-y-4">
              <h1 className="text-2xl mb-4">Services</h1>
              <a
                href="/"
                className="cursor-pointer text-[#7A838B] hover:text-black"
              >
                SEO/SEM
              </a>
              <a
                href="/"
                className="cursor-pointer text-[#7A838B] hover:text-black"
              >
                Web design
              </a>
              <a
                href="/"
                className="cursor-pointer text-[#7A838B] hover:text-black"
              >
                E-commerce
              </a>
              <a
                href="/"
                className="cursor-pointer text-[#7A838B] hover:text-black"
              >
                Digital marketing
              </a>
            </div>

            <div className="services flex flex-col space-y-4">
              <h1 className="text-2xl mb-4">Useful Links</h1>
              <a
                href="/"
                className="cursor-pointer text-[#7A838B] hover:text-black"
              >
                About
              </a>
              <a
                href="/"
                className="cursor-pointer text-[#7A838B] hover:text-black"
              >
                Blog
              </a>
              <a
                href="/"
                className="cursor-pointer text-[#7A838B] hover:text-black"
              >
                Contact
              </a>
              <a
                href="/"
                className="cursor-pointer text-[#7A838B] hover:text-black"
              >
                Support
              </a>
            </div>

            <div className="services flex flex-col space-y-4">
              <h1 className="text-2xl mb-4">Subscribe</h1>
              <div className="flex justify-between border rounded-md px-3 py-2">
                <input
                  type="email"
                  className="outline-none w-[50%]" 
                  placeholder="Enter your email"
                />
                <button className="bg-blue-500 rounded-md text-white px-4 py-2 ml-2">
                  Subscribe
                </button>
              </div>
              <p className="text-[#7A838B]">
                Esteem spirit temper too say adieus who direct esteem esteems
                luckily.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-[#7A838B] mt-12 font-bold mx-4 py-7">
        <p>
          Copyright ©2024 All rights reserved | This template is made with by
          <span className="text-blue-500"> Colorlib</span>
        </p>
      </div>
    </>
  );
};

export default Footer;

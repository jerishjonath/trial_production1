"use client"
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './underconstruction.json'; // Path to your Lottie animation file
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import "src/components/commingsoon/commingsoon.scss"




const Commingsoon = () => {

  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const [subscribed, setSubscribed] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // For now, just simulate a successful submission
    setSubscribed(true);
  };



  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Lottie 
                options={defaultOptions}
                // height={400}
                // width={400}
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="mb-4 text-4xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl text-center">
                    We are almost there
                  </h3>
                  <p className="mb-4 text-3xl font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-center">
                    Stay tuned for something amazing..
                  </p>
                  <FlipClockCountdown to={new Date().getTime() + 6 * 24 * 3600 * 1000 + 5000} className='flip-clock'/>
                </div>
                <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
                  <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
                    Notifyme
                  </h3>
                  <div>
      {!subscribed ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="Subscribe"
            className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          />
        </form>
      ) : (
        <p>Thank you for subscribing, {formData.name}!</p>
      )}
    </div>
    
                </div>
              {/* <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Next.js
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commingsoon;

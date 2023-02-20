import React, { useState } from "react";
import ImageOne from "../../../images/building.jpg";
import ImageTwo from "../../../images/image1.jpg";
import ImageThree from "../../../images/image2.jpg";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [ImageOne, ImageTwo, ImageThree];

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Replace this console.log statement with your own code to handle the form submission
  };
  return (
    <div className="relative my-6 overflow-hidden">
    <img src={images[currentImage]} alt="Banner" className="w-full" />
    
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex flex-col items-center">
    <button onClick={()=>previousImage()}><span className="fixed text-white top-1/2 right-4">NEXT</span></button>
    <button onClick={()=>nextImage()}><span className="fixed text-white top-1/2 left-4">NEXT</span></button>
      <h2 className="text-white text-3xl mb-4">Find Your Dream Job</h2>
      <p className="text-white text-lg mb-6">
        Search thousands of job opportunities from around the world
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              type="text"
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="jane.doe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray px-4 py-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              type="text"
              placeholder="Enter your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="w-full md:w-auto px-3 flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Contact Us
            </button>
          </div>
        </div>
      </form>
      <div className="w-full max-w-md text-center mt-6">
        <h3 className="text-white text-xl font-bold mb-2">
          Join our team today!
        </h3>
        <p className="text-white text-lg mb-2">
          We are always looking for talented individuals to join our team and
          help us make a difference.
        </p>
        <a
          href=" "
          className="inline-block bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-500 hover:text-white mt-4"
        >
          View Open Positions
        </a>
      </div>
    </div>
  </div>
  );
};

export default Banner;

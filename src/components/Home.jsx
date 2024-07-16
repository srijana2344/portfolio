import React from "react";
import srijanacopyImage from "../assets/srijana copy.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Image Section */}
        <div>
          <img
            // src={srijanaImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>

        {/* Image Section */}
        <div>
          <div>
            <img
              src={srijanacopyImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full ml-4 md:ml-12">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            As a frontend developer, I create responsive, user-friendly websites
            using HTML, CSS, JavaScript, React, and Tailwind CSS.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/sri.jana.12576/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaFacebook size={30} />
            </a>{" "}
            <a
              href="https://github.com/srijana2344/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/srijana-kc-469891304?/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
          {/* Download CV Button */}
          <div>
            <a
              href="/SrijanaKCResume.pdf"
              download
              className="text-white hover:text-gray-300 mt-4 inline-block bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

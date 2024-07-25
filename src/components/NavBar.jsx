import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Events, scroller } from "react-scroll";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const scrollDuration = 500; // Duration for scroll animation

  const links = [
    { id: 1, link: "home" },

    { id: 2, link: "portfolio" },
    { id: 3, link: "experience" },
    { id: 4, link: "contact" },
     
  ];

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {
      console.log("begin scroll");
    });

    Events.scrollEvent.register("end", () => {
      console.log("end scroll");
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollTo = (link) => {
    scroller.scrollTo(link, {
      duration: scrollDuration,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setNavOpen(false); // Close the mobile menu
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed z-50">
      <div>
        <h6 className="text-1xl font-signature ml-2">srijana</h6>
      </div>

      <ul className="hidden md:flex justify-end w-full">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 ${
              activeLink === link ? "text-white" : ""
            }`}
          >
            <Link
              to={link}
              smooth={true}
              duration={scrollDuration}
              spy={true}
              onSetActive={() => setActiveLink(link)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNavOpen(!navOpen)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {navOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {navOpen && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => scrollTo(link)}
                to={link}
                smooth={true}
                duration={scrollDuration}
                spy={true}
                onSetActive={() => setActiveLink(link)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

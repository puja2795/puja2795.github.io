import React, { useState } from "react";
import logo from "../logo-portfolio.png";

export default function Navbar() {
  const navLinks = [
    { name: "Home", class: "nav-link home" },
    { name: "About Me", class: "nav-link about" },
    { name: "Skills", class: "nav-link skills" },
    { name: "Projects", class: "nav-link projects" },
    { name: "Contact", class: "nav-link contact" },
  ];

  const [show, setShow] = useState(false);

  return (
    <>
      <div className="flex bg-cyan-900 py-4 lg:px-[10%] px-[8%] max-w-full text-white ">
        <div className="md:hidden my-auto" onClick={() => setShow(!show)}>
          {!show && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
          {show && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <div className="m-auto md:ml-0">
          <img src={logo} className="h-10" alt="logo" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 my-auto md:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
        <div className="md:flex hidden sm:gap-10 md:gap-10 lg:gap-14 xl:gap-16 ml-auto my-auto">
          {navLinks.map((el, ind) => {
            return (
              <h1
                key={ind}
                className={`font-medium md:text-sm text-lg my-auto ${el.class}`}
              >
                {el.name}
              </h1>
            );
          })}
          <button className="flex gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 md:py-1 px-4 rounded md:text-sm md:h-8 ">
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
        </div>
      </div>
      {show && (
        <div className="md:hidden">
          {navLinks.map((el, ind) => {
            return (
              <h1
                key={ind}
                className="font-medium md:text-sm text-lg bg-cyan-600 text-white border border-slate-200 opacity-50"
              >
                {el.name}
              </h1>
            );
          })}
        </div>
      )}
    </>
  );
}

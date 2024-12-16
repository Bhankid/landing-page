"use client";

import React from "react";
import Link from "next/link";

function NavBar() {
  const [active, setActive] = React.useState("Home");

  const navItems = [
    "Home",
    "Quizzes",
    "Live Quiz",
    "My Quizzes",
    "Virtual Promotion",
    "Games",
    "App",
  ];

  return (
    <>
      {/* Mobile Layout */}
      <div className="w-full flex items-center bg-blue-600 text-white  py-2 justify-between  mb-4 md:hidden">
        <div className="text-lg font-bold pl-2">SmartyBet</div>
        <div className="flex items-center space-x-3 mr-4">
          <div className="flex items-center space-x-1">
            <i className="fas fa-search text-white text-sm mr-1"></i>
            <button className="bg-white text-blue-600 px-1 py-0.5 rounded">
              Join Now
            </button>
          </div>
          <button className="border border-white text-white px-1 py-0.5 rounded mr-4">
            Login
          </button>
        </div>
      </div>

      <div className="hidden md:flex  bg-blue-600 text-white flex-col md:px-16 py-2">
        {/* Logo Section with Input Fields */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold">SmartyBet</div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="+233 | Mobile Phone"
              className="p-1 rounded-md text-black text-sm w-32"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-1 rounded-md text-black text-sm w-32"
            />
            <button className="border border-white text-white bg-transparent px-2 py-1 rounded-md text-sm">
              Login
            </button>
            <button className="bg-white text-black px-2 py-1 rounded-md text-sm">
              Sign Up
            </button>
          </div>
        </div>

        {/* Navigation Links and Search Icon */}
        <div className="flex items-center justify-between mb-4">
          <nav className="flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span
                  onClick={() => setActive(item)}
                  className={`relative mb-1 ${
                    active === item ? "border-b-4 border-white" : ""
                  }`}
                >
                  <em>{item}</em>
                  {item === "App" && (
                    <span
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full"
                      style={{
                        fontSize: "0.48rem",
                        padding: "0.1rem 0.1rem",
                        top: "-0.3rem",
                        right: "0.01rem",
                      }}
                    >
                      Hot
                    </span>
                  )}
                </span>
              </Link>
            ))}
          </nav>

          {/* Search Icon and Text */}
          <div className="flex items-center space-x-2">
            <i className="fas fa-search text-white text-sm"></i>
            <span className="text-white">Search</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

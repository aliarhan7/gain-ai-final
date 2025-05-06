import React from "react";
import Image from "next/image";

type HeaderProps = {
  brand: string;
  navLinks: string[];
  buttonText: string;
};

const Header: React.FC<HeaderProps> = ({
  brand = "BreakFast",
  navLinks = [],
  buttonText = "Sign In",
}) => {
  return (
    <header className="w-full h-16 flex justify-between items-center px-10 bg-white                                shadow ">
      <div className="text-xl font-bold ml-[-20px]"><Image src={"/gain-logo-bg.png"} height={100} width={100} alt="logo" /></div>
      <nav>
        <ul className="flex gap-9">
          {navLinks.map((link, index) => (
            <li key={index} className="text-gray-700 cursor-pointer hover:text-first">
              {link}
            </li>
          ))}
        </ul>
      </nav>
      <div className="bg-grayd button hover:bg-first ml-[20px]">Sign In</div>
    </header>
  );
};

export default Header;
import React from "react";

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
    <header className="w-full h-16 flex justify-between items-center px-4 bg-white shadow">
      <div className="text-xl font-bold">{brand}</div>
      <nav>
        <ul className="flex gap-4">
          {navLinks.map((link, index) => (
            <li key={index} className="text-gray-700 cursor-pointer hover:text-green-500">
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
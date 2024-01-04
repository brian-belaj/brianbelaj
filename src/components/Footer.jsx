import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-around items-start lg:items-center pl-8 lg:pl-0">
        <div className="mb-4 lg:mb-0 col-1">
          <h2 className="text-2xl font-bold">Brian Belaj</h2>
          <p className="font-bold text-white">Follow me:</p>
          <div className="flex space-x-4 lg:space-x-4 mt-2">
            <SocialIcon target="_blank" url="https://www.linkedin.com/in/brian-belaj/" />
            <SocialIcon target="_blank" url="https://github.com/brian-belaj" />
            <SocialIcon target="_blank" url="https://twitter.com/BelajBrian" />
            <SocialIcon target="_blank" url="https://www.instagram.com/brianbelaj/" />
          </div>
        </div>
        <div className="col-2">
          {/* Dati di contatto a destra */}
          <p className="text-gray-300 mb-2 lg:mb-0">Phone: +39 320 663 2575</p>
          <p className="text-gray-300">Email: belaj.br@gmail.com</p>
        </div>
      </div>

      {/* Copyright notice */}
      <div className="text-center text-white mt-8">
        <p>&copy; {new Date().getFullYear()} Brian Belaj. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

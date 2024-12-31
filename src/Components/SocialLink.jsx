import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; 

const SocialLink = () => {
  return (
    <div className="top-1/2 right-4 z-20 fixed flex flex-col items-center gap-4 -translate-y-1/2">
      <a href="www.linkedin.com/in/garima-upadhyay-20j73" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin className="text-3xl text-white hover:text-purple-500 transform transition duration-300 cursor-pointer hover:scale-125" />
      </a> 
      <a href="mailto:garimau315@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
        <FaEnvelope className="text-3xl text-white hover:text-purple-500 transform transition duration-300 cursor-pointer hover:scale-125" />
      </a>
      <a href="https://github.com/garima-203" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub className="text-3xl text-white hover:text-purple-500 transform transition duration-300 cursor-pointer hover:scale-125" />
      </a>
    </div>
  );
};

export default SocialLink;

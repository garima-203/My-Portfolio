import React from "react"; 

const Button = ({ text, link, onClick }) => {
  return (
    <div className="flex flex-col justify-center items-center text-white">
      {/* Buttons */}
      <div className="flex flex-wrap justify-center">
        {link ? (
          <a href={link} className="custom-btn btn-7">
            <span>{text}</span>
          </a>
        ) : (
          <button onClick={onClick} className="custom-btn btn-7">
            <span>{text}</span>
          </button>
        )}
      </div>
    </div>
  );
};

 
export default Button;

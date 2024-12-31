import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Button from "./Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({ success: "", error: "" });
 
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
 
    setFormStatus((prevState) => ({ ...prevState, success: "", error: "" }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     
    if (!formData.name || !formData.email || !formData.message) {
        setFormStatus({ success: "", error: "All fields are required!", sending: false });
        return;
      }
  
      if (!validateEmail(formData.email)) {
        setFormStatus({ success: "", error: "Please enter a valid email address!", sending: false });
        return;
      }
      setFormStatus({ success: "", error: "", sending: true });

 
    emailjs
      .send(
        "service_hd0ixyu",  
        "template_7b90umf",  
        {
          to_name: "Garima Upadhyay",  
          from_name: formData.name, 
          message: formData.message, 
        },
        "XevXxquuK37VOxH-x"  
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response.status, response.text);
          setFormStatus({ success: "Message sent successfully!", error: "", sending: false });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          setFormStatus({
            success: "",
            error: "Failed to send the message. Try again later.",
            sending: false,
          });
        }
      );
  };

  return (
    <div> 
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="relative flex flex-col justify-center items-center px-4 h-full">
        
        <div className="relative flex lg:flex-row flex-col justify-center items-center mt-5 mb-10">
          <h1 className="font-bold font-serif text-4xl text-white md:text-6xl xl:text-7xl">
          Get In Touch
          </h1>
        </div>
  
    
        <div className="relative z-10 flex md:flex-row flex-col justify-center items-center px-6 w-full max-w-7xl">
           
          <div className="mb-5 md:mb-0 w-full md:w-1/2">
            <img
              src="../Contact.gif"
              alt="Contact Illustration"
              className="shadow-lg rounded-lg w-full h-auto object-cover"
            />
          </div>
   
          <div className="relative z-10 bg-black/70 shadow-lg ml-2 p-6 md:p-8 lg:p-12 rounded-lg w-full md:w-1/3">
            <p className="mb-6 text-center text-gray-400 text-sm md:text-base">
              Feel free to reach out by filling in the form below. We’ll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <input
                  type="text"
                  aria-required="true"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="bg-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-teal-500 w-full text-white placeholder-gray-500"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  aria-required="true"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="bg-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-teal-500 w-full text-white placeholder-gray-500"
                />
              </div>
           
              <div>
                <textarea
                  name="message"
                  aria-required="true"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="4"
                  className="bg-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-teal-500 w-full text-white placeholder-gray-500 resize-none"
                ></textarea>
              </div>
            
              <Button text={formStatus.sending ? "Sending..." : "Send"} onClick={handleSubmit} disabled={formStatus.sending} />
              </form>
           
            {formStatus.success && (
              <p className="mt-4 text-center text-teal-500">{formStatus.success}</p>
            )}
            {formStatus.error && (
              <p className="mt-4 text-center text-red-500">{formStatus.error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;


import React, { useEffect } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  useEffect(() => { 
    const isTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };
 
    const isLargeScreen = window.innerWidth > 1024;

    if (isLargeScreen && !isTouchDevice()) {
      const cursor = document.querySelector("#cursor");
      const follower = document.querySelector("#cursor-follower");

    
      const handleMouseMove = (e) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
        });

        gsap.to(follower, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.4,
        });
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <>
    
      <div
        id="cursor"
        className="lg:block top-0 left-0 z-[9999] fixed hidden bg-transparent rounded-full w-4 h-4 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      ></div>
 
      <div
        id="cursor-follower"
        className="lg:block top-0 left-0 z-[9999] fixed hidden bg-gradient-to-r from-pink-500 to-blue-500 opacity-30 rounded-full w-14 h-14 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      ></div>
    </>
  );
};

export default CustomCursor;

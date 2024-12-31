
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiAppwrite  } from "react-icons/si";

const skills = {
  "Frontend Development": [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS/SCSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
  ],
  "UI Frameworks": [
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  ],
  "Backend & Tools": [
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Appwrite", icon: <SiAppwrite className="text-pink-600" /> },
  ],
};

const Skills = () => {
  return (
    <div className="relative z-10 py-12 min-h-screen text-white">
      <div className="mx-auto px-6 max-w-6xl">
      <div className="relative flex lg:flex-row flex-col justify-center items-center mt-5 mb-10">
                <h1 className="font-serif text-4xl xl:text-7xl title-color">Proficiencies</h1>
            </div>


        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, skillsArray], index) => (
            <div
              key={index}
              className="relative flex flex-col items-center bg-gray-800/80 p-6 rounded-lg transition-all duration-300 overflow-hidden group hover:scale-105"
              style={{
                borderRadius: "12px",
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
              }}
            > 

              <div
                className="z-[-1] absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, #e53c91, #708edb)",
                  padding: "4px",
                  borderRadius: "12px",
                  animation: "neon-glow 4s infinite linear",
                }}
              >
                <div
                  className="bg-gray-800 rounded-lg w-full h-full"
                  style={{ borderRadius: "8px" }}
                ></div>
              </div>

              {/* Card Content */}
              <h3 className="mb-4 font-semibold text-2xl text-center subhead-color">{category}</h3>
              <div className="space-y-2">
                {skillsArray.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full transform transition duration-300 hover:scale-110"
                  >
                    <div className="w-6 h-6 text-2xl">{skill.icon}</div>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes neon-glow {
          0% {
            box-shadow: 0 0 10px 3px rgba(234, 76, 137, 0.8), 0 0 10px 3px rgba(80, 80, 255, 0.6);
          }
          50% {
            box-shadow: 0 0 20px 6px rgba(234, 76, 137, 0.8), 0 0 20px 6px rgba(80, 80, 255, 0.6);
          }
          100% {
            box-shadow: 0 0 10px 3px rgba(234, 76, 137, 0.8), 0 0 10px 3px rgba(80, 80, 255, 0.6);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills; 

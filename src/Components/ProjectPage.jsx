import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div id="Experience" className="relative z-10 flex flex-col items-center mt-12">
      <div className="relative flex flex-col justify-between items-center gap-3 w-full max-w-6xl">
        <h1 className="font-serif text-4xl xl:text-7xl title-color">What I've Built</h1>
        <p className="mb-10 font-semibold text-center text-gray-600 text-lg md:text-base dark:text-gray-400"></p>

        <VerticalTimeline >
          <ProjectCard
            title="Doctor's Dashboard" 
            link="https://github.com/garima-203/Doctor-Dashboard"
             icon="https://img.icons8.com/?size=100&id=EtrvEl4qafJw&format=png&color=000000"
            srcImg={'../DASHBOARD-PROJECT.png'}
          />

          <ProjectCard
            title="E-Commerce Template" 
            link="https://github.com/garima-203/Ecommerce-template"
            icon="https://img.icons8.com/?size=100&id=8chNl15hy6jY&format=png&color=000000"
            srcImg={'../ECOM-PROJECT.png'}
          />
          <ProjectCard
            title="Yoga Web Template"
           link="https://github.com/garima-203/YOGA-TEMPLATE"
            icon="https://img.icons8.com/?size=100&id=hYBKkWFjtuCu&format=png&color=000000"
            srcImg={'../YOGA-PROJECT.png'}
          />
          <ProjectCard
            title="Portfolio Web Template"
           link="https://github.com/garima-203/PORTFOLIO-TEMPLATE"
             icon="https://img.icons8.com/?size=100&id=naDnVpQ3BNkR&format=png&color=000000"
            srcImg={'../Portfolio-Project.png'}
          />
        </VerticalTimeline>


      </div>
 
    </div>
  );
};

export default Project;

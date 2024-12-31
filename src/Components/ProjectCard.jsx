import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ProjectCard = ({ title, icon, srcImg,link }) => {
  return (
    <>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'transparent', color: '#000', padding: '20px', boxShadow: 'none', text: 'fff' }}
        contentArrowStyle={{ borderRight: '7px solid #f0f0f0' }} 
        icon={<img src={icon} Icon className="bg-white p-1 rounded-full w-full h-full" />}
        style={{ borderLeft: 'none', borderBottom: 'none' }}
      > 
       <a href={link} >  <img src={srcImg} className="shadow-md rounded-lg w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl h-auto transform transition duration-300 cursor-pointer hover:scale-110"
            alt="" />  </a> 
          <h3 className="mt-3 font-bold text-center text-white text-xl sm:text-2xl">{title}</h3>  
      </VerticalTimelineElement>
    </>
  );
};

export default ProjectCard;

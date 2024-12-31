import React from "react";  

const About = () => { 

    return (
        <div className="mx-auto p-6 rounded-lg max-w-6xl">
            <div className="relative flex lg:flex-row flex-col justify-center items-center mt-5 mb-10">
                <h1 className="font-serif text-4xl xl:text-7xl title-color">Who I Am</h1>
            </div>


            <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mb-12">
                <div className="relative bg-gray-800 p-4 rounded-lg transform transition duration-300 hover:scale-110" >
                    <h3 className="mb-1 font-bold text-xl title-color">Personal Details</h3>
                    <ul className="ml-4">
                        <li className="mb-1">
                            <span className="subhead-color">Name</span>
                            <ul className="ml-4">
                                <li className="title-color">Garima Upadhyay</li>
                            </ul>
                        </li>
                        <li className="mb-1">
                            <span className="subhead-color">Location</span>
                            <ul className="ml-4">
                                <li className="title-color">Uttrakhand,India</li>
                            </ul>
                        </li>
                        <li className="mb-1">
                            <span className="subhead-color">Vision</span>
                            <ul className="ml-4">
                                <li className="title-color">
                                    I aim to build user-centered web applications that solve real-world challenges while continuously enhancing my skills and embracing new technologies.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="subhead-color"> Linguistic Proficiency</span>
                            <ul className="ml-4">
                                <li className="title-color">English, Hindi</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="relative z-10 bg-gray-800 p-4 rounded-lg transform transition duration-30 hover:scale-110" >
                    <h3 className="mb-2 font-bold text-xl title-color">🎓 Education</h3>
                    <pre className="bg-gray-900 p-4 rounded-lg leading-loose whitespace-pre-wrap title-color">
  <p className="text-sm sm:text-lg">
    {`
    {
      `}
    <span className="subhead-color">"degree"</span>
    {`: "Bachelor of Commerce (B.Com)",
      `}
    <span className="subhead-color">"college"</span>
    {`: "KNIPSS",
      `}
    <span className="subhead-color">"yearOfGraduation"</span>
    {`: "2024",
      `}
    <span className="subhead-color">"location"</span>
    {`: "Uttar Pradesh,India"
    }
    `}
  </p>
</pre>

                </div>
            </div>  
           
        </div>
    );
};

export default About;

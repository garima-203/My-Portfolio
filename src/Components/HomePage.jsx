
import React from "react";
import { Tilt } from "react-tilt";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <>
            <div className="relative z-10 flex justify-center items-center px-4 py-14 md:py-28">
                <div className="flex xl:flex-row flex-col justify-center items-center xl:space-x-40 max-w-screen-xl">
                    <Tilt className="z-20">
                        <div className="image-container">
                            <img
                                src="..\Profile-Picture.jpg"
                                alt="Garima Upadhyay"
                                className="rounded-full w-60 sm:w-48 md:w-96 h-60 sm:h-48 md:h-96 object-cover"
                            />
                        </div>
                    </Tilt>

                    <div className="z-10 mt-6 xl:mt-0 xl:ml-8 w-full xl:w-1/2 text-center">
                        <h1 className="mb-2 font-bold font-megrim text-3xl text-gray-300 md:text-5xl xl:text-6xl">Hii! I'm</h1>
                        <div className="flex justify-center items-center mr-11 sm:mr-0 text-center">
                            <img
                                src="..\logo.svg"
                                alt="Logo"
                                className="h-28 sm:h-28 md:h-32 lg:h-40 xl:h-42 transform transition duration-300 hover:scale-105"
                            />
                            <h2 className="z-10 font-bold text-center sm:text-3xl md:text-4xl lg:text-2xl xl:text-5xl subhead-color">
                                ARIMA Upadhyay
                            </h2>
                        </div>
                        <h1 className="font-extrabold font-megrim text-2xl text-purple-700 md:text-3xl">
                            Frontend Developer</h1>
                        <p className="mb-6 text-gray-300">
                        Hailing from Uttarakhand, I am dedicated to developing meaningful web solutions that prioritize user experience while embracing growth and new technologies. </p>

                        {/* Button */}
                        <Button
                            text={
                                <>
                                    <FontAwesomeIcon icon={faCloudArrowDown} className="mr-2"/>
                                    Save It
                                </>
                            }
                            link="https://drive.google.com/file/d/1VYLlreJosX1ol-NKvZ0bmPM3sJl8QwF2/view?usp=drive_link"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

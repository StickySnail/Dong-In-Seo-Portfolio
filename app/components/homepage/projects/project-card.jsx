// @flow strict
"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";

const Alert = ({ message }) => {
    return (
        <div className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-l flex items-center justify-center">
            {message}
        </div>
    );
};

const ProjectCodeSection = ({ project }) => {
    return (
        <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">project</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">duration:</span>
                <span className="text-cyan-400">{" " + project.duration}</span>
                <span className="text-gray-400">,</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">description:</span>
                <span className="text-cyan-400">
                    {" " + project.description}
                </span>
                <span className="text-gray-400">,</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">takeaways:</span>
                <span className="text-gray-400">{` ['`}</span>
                {project.tools.map((tag, i) => (
                    <React.Fragment key={i}>
                        <span className="text-amber-300">{tag}</span>
                        {project.tools.length - 1 !== i && (
                            <span className="text-gray-400">{`', '`}</span>
                        )}
                    </React.Fragment>
                ))}
                <span className="text-gray-400">{"],"}</span>
            </div>
            {/* Deactivated myRole */}
            {/* <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">
            myRole:
        </span>
        <span className="text-orange-400">{project.role}</span>
        <span className="text-gray-400">,</span>
    </div> */}

            <div>
                <span className="text-gray-400">{`};`}</span>
            </div>
        </code>
    );
};

function ProjectCard({ project }) {
    //
    const [showNotification, setShowNotification] = useState(false);

    const handleCardClick = () => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000); // Hide notification after 3 seconds
    };

    return (
        <div
            className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full hover:scale-[0.98] transition-transform duration-300"
            onClick={handleCardClick}
        >
            <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            {/* Project Header */}
            <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
                {/* Delete three dots */}
                {/* <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
                    <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
                    <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
                    <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
                </div> */}
                <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
                    {project.name}
                </p>
            </div>
            {/* Project Body */}
            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                <div className="flex justify-center items-center text-violet-500 transition-all duration-300">
                    <div className="w-full md:w-1/2">
                        <Image
                            src={project.image}
                            alt="Project Image"
                            width={540}
                            height={100}
                            className="rounded-lg w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full h-full md:w-1/2 hidden md:block pl-6">
                        <ProjectCodeSection project={project} />
                    </div>
                </div>
                <div className="md:hidden">
                    <ProjectCodeSection project={project} />
                </div>
            </div>
            {showNotification && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                        <Alert
                            message={
                                "Demo is on its way and will be here before you know it! 🚀 from. Dong-In Seo "
                            }
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectCard;

import React from "react";
import { motion } from "framer-motion";

interface ProjectProps {
    title: string;
    description: string;
    link?: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, link }) => (
    <motion.div
        className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <h3 className="text-xl font-bold mb-2 text-blue-600">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        {link && (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                View link
            </a>
        )}
    </motion.div>
);

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Numerical Design API Development",
            description:
                "Developed RESTful APIs for Numerical Design using Python Flask and PostgreSQL. " +
                "Implemented secure and efficient endpoints to support their platform.",
            link: "https://numdes.com",
        },
        {
            title: "Real Estate Platform Development",
            description:
                "Built a real estate platform for Finstc Software LLC (Boston-based) that provides property listings with 3D Matterport images. " +
                "Stack: Python Flask, PostgreSQL, JavaScript, Vue.js.",
        },
        {
            title: "Mobile App Analytics Platform",
            description:
                "Led frontend development of Checkaso's analytical platform for app promotion on Google Play and App Store, focusing on ASO optimization. " +
                "Stack: JavaScript, Vue.js, Jest.",
        },
        {
            title: "Smart Gardening Web App",
            description:
                "Developed web and mobile applications for Gardena Husqvarna Schweiz, enabling control and monitoring of smart gardening tools such as robotic lawn mowers and watering systems. " +
                "Integrated Alexa and Google Assistant voice control. Gained experience in Amazon Cloud and Azure services. " +
                "Stack: Java, Kotlin, Vert.X, TypeScript, JavaScript, Ember.js.",
            link: "https://smart.gardena.com/#/session/new"
        },
    ];

    return (
        <div className="px-6 py-10 bg-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;

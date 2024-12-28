import React from "react";
import { motion } from "framer-motion";

interface SkillProps {
    name: string;
    icon: string | undefined;
    level: number; // Percentage (e.g., 90 for 90%)
}

const Skill: React.FC<SkillProps> = ({ name, icon = '', level }) => {

    return (
        <motion.div id="skills"
            className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex items-center space-x-4">
                <img src={icon} alt={`${name}-logo`} className="w-10 h-10" />
                <h3 className="text-lg font-semibold text-black">{name}</h3>
            </div>
            <div className="mt-4">
                <div className="relative w-full bg-gray-200 rounded-full h-4">
                    <motion.div
                        className="absolute top-0 left-0 h-4 rounded-full bg-green-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${level}%` }}
                        transition={{ duration: 1 }}
                    />
                </div>
                <p className="text-right text-sm mt-1">{level}%</p>
            </div>
        </motion.div>
    );
};

const Skills: React.FC = () => {
    const skills = [
        { name: "JavaScript", icon: "/js-logo.svg", level: 90 },
        { name: "React", icon: "/react-logo.svg", level: 85 },
        { name: "TypeScript", icon: "/ts-logo.svg", level: 85 },
        { name: "Vue.js", icon: "/vue-logo.svg", level: 80 },
        { name: "Python", icon: "/python-logo.svg", level: 80 },
        { name: "Kotlin", icon: "/kotlin-logo.svg", level: 50 },
        { name: "Java", icon: "/java-logo.svg", level: 50 },
        { name: "Git", icon: "/git-logo.svg", level: 70 },
        { name: "Testing", icon: "/test-logo.png", level: 60 },
    ];

    return (
        <div className="px-4 py-8 bg-gray-900">
            <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <Skill key={index} name={skill.name} icon={skill.icon} level={skill.level} />
                ))}
            </div>
        </div>
    );
};

export default Skills;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ExperienceItem {
    title: string;
    company: string;
    year: string;
    place: string;
}

const Experience: React.FC = () => {
    const experiences: ExperienceItem[] = [
        { title: "Fullstack Developer", company: "Husqvarna Schweiz", year: "2022-2024", place: "Zürich" },
        { title: "Frontend Developer", company: "Checkaso", year: "2021-2021", place: "St. Petersburg" },
        { title: "Fullstack Developer", company: "Finstc software llc", year: "2020-2021", place: "St. Petersburg" },
        { title: "Intern Python Developer", company: "Numerical Design", year: "2019-2019", place: "St. Petersburg" },
    ];

    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const items = gsap.utils.toArray(".timeline-item");
        gsap.fromTo(
            items,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.3,
                duration: 1,
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <div className="timeline px-6 py-8 bg-gray-100" ref={timelineRef}>
            <h2 className="text-2xl font-bold mb-6 text-center text-black">Experience</h2>
            <div className="relative">
                <div className="absolute left-5 top-0 h-full border-l-2 border-gray-300"></div>
                {experiences.map((exp, index) => (
                    <div
                        className="timeline-item flex items-start mb-6 relative pl-12 opacity-0"
                        key={index}
                    >
                        <div className="absolute left-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                            {index + 1}
                        </div>
                        <div className="bg-white p-4 shadow-lg rounded-lg w-full">
                            <h3 className="text-lg font-semibold text-blue-600">{exp.title}</h3>
                            <p className="text-gray-700">
                                {exp.company} <span className="text-gray-500">({exp.year})</span>
                            </p>
                            <p className="text-gray-500">{exp.place}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;

import React, { useState } from "react";

const Header = ({ visibleSection }: { visibleSection: string }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
    };

    return (
        <div
            id="header"
            onMouseMove={handleMouseMove}
            className={`section w-full h-screen flex items-center justify-center transition-all duration-500 relative ${
                visibleSection === "header" ? "opacity-100" : "opacity-50"
            }`}
            style={{
                background: `radial-gradient(
                    circle at ${mousePosition.x}px ${mousePosition.y}px,
                    rgba(255, 255, 255, 0.4),
                    rgba(0, 0, 0, 0.1)
                )`,
            }}
        >
            <div className="text-center">
                <h1 className="text-3xl relative font-mono text-white z-10 overflow-hidden whitespace-nowrap border-r-2 border-white animate-typewriter">
                    Aleksandra Beliaeva</h1>
                <p className="text-lg text-gray-300 mt-4">Full-Stack Developer | Frontend Developer</p>
            </div>
            <div className="absolute bottom-4 w-full flex justify-center" onClick={() => {
                document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});
            }}
            >
                <svg
                    className="w-6 h-6 text-white animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>

        </div>
    );
};

export default Header;

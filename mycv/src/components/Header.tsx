const Header = ( { visibleSection }: { visibleSection: string }) => {
    return (
        <div id="header"
             className={`section bg-gray-900 w-full h-screen flex items-center justify-center transition-all duration-500 ${
                 visibleSection === 'header' ? 'opacity-100' : 'opacity-50'
             }`}>
            <div className="flex justify-center content-center w-full">
                <div className="w-[max-content] flex">
                    <h1 className="text-3xl relative font-mono text-white overflow-hidden whitespace-nowrap
                    border-r-2 border-white animate-typewriter">
                        Aleksandra Beliaeva
                    </h1>
                    <span className="text-white animate-blink ml-1">|</span>
                </div>
            </div>
            <p className="text-xl font-light text-white mt-4">Full-Stack Developer | Frontend Developer</p>
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
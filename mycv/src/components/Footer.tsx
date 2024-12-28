import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Aleksandra Beliaeva Built with ❤️ using React and Tailwind CSS.</p>
                <div className="mt-4 sm:mt-0">
                    <a href="https://github.com/albelyaeva" target="_blank" className="mx-2 hover:text-gray-400">GitHub</a>
                    <a href="https://www.linkedin.com/in/aleksandra-beliaeva-097456176/" target="_blank" className="mx-2 hover:text-gray-400">LinkedIn</a>
                    <a href="#top" className="mx-2 hover:text-gray-400">Back to top</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


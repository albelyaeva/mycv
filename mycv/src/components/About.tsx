import myProfilePicture from "../assets/images/DSC05081.jpg"

const About = ( { visibleSection }: { visibleSection: string } ) => {
    return (
        <div id="about"
             className={`section w-full h-screen bg-gray-100 text-gray-900 flex-col justify-center content-center items-center p-8 transition-all duration-500 ${
                 visibleSection === 'about' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
             }`}>
            <div className="text-2xl font-bold mb-6 text-center text-black">About me</div>
            <div className="flex items-center my-5">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500">⭐</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="w-full flex justify-center">
                <p className="mt-5 w-1/2 text-start">
                    I’m a motivated and skilled software developer with international experience in web application
                    development.
                    Ive worked with different technologies including JavaScript, Java, Kotlin and frameworks like
                    Vue.js, Ember,
                    React. I am able to work both independently and collaboratively, passionate about learning new
                    languages and
                    implementing clean code principles. Besides coding I’m intrested in yoga, hiking, painting and
                    design.

                </p>
            </div>

            <div className="w-full">
                <div className="flex md:flex-row items-center justify-center">
                    <div
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mt-6 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-8 justify-center items-center">
                        <img
                            src={myProfilePicture}
                            alt="Aleksandra Beliaeva"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
};

export default About;
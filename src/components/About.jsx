import React from "react";

function About() {
  return (
    <section id="about">
      {/* <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 to-purple-900"> */}
      {/* <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-300 to-blue-400"> */}
            <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 to-purple-900">

        <h2 className="text-6xl text-center flex flex-col items-center">
          <span className="font-semibold bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse leading-[1.5] text-5xl">
            {/* Frontend Developer */}
            Kotchakorn Tantrakool
          </span>
          <p className="text-2xl mt-4 text-white ">
            A fourth-year undergraduate student majoring in Computer Science
            <br /> 
            Faculty of Science Chiang Mai University.
          </p>
        
          <div>
            <a
            href="https://drive.google.com/file/d/1pHqf37Ow4CMExQlj1-1zhPlildeljvD7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 mt-6 px-5 me-2 mb-2 text-sm font-medium text-black  bg-white rounded-lg transition hover:text-purple-900"
          >
            View Developer Resume
          </a>
          <a
            href="https://drive.google.com/file/d/1lqXmKk7QvZ9IO0JcYGWeTyol527UASWN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 mt-6 px-5 me-2 mb-2 text-sm font-medium text-black  bg-white rounded-lg transition hover:text-purple-900"
          >
            View BA Resume
          </a>
          </div>
          
        </h2>
      </div>
    </section>
  );
}

export default About;

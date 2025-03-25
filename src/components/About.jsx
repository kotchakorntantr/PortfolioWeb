import React from 'react';

function About() {
    return (
      <section id="about"> 
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900">
        <h2 className="text-6xl text-center flex flex-col items-center">
        <span className="font-semibold bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">Demo</span>
          <span className="font-semibold bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse leading-[1.5]">Frontend Developer</span>
          {/* <span className="text-2xl mt-4 text-white">I'm Kotchakorn Tantrakool</span> */}
          <span className="text-2xl mt-4 text-black dark:text-white">A fourth-year undergraduate student majoring in Computer Science, </span>
          <span className="text-2xl mt-4 text-black dark:text-white">Faculty of Science, Chiang Mai University.</span>
          {/* <button type="button" class="py-2.5 mt-6 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">My Resume</button> */}
          <a href="/resume_kotchakorn.pdf" target="_blank" rel="noopener noreferrer" className="py-2.5 mt-6 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition">
          My Resume
          </a>
        </h2>
       
      </div>
      </section>
    );
  }
  
  export default About;
  
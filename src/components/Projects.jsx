import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-16 bg-gradient-to-br from-purple-200 to-blue-300"
    >
      {/* <h2 className="text-3xl sm:text-5xl leading-[1.5] text-center font-semibold bg-gradient-to-br from-blue-300 to-blue-600 bg-clip-text text-transparent animate-pulse"> */}
      <h2 className="text-3xl sm:text-5xl leading-[1.5] text-center font-semibold text-black">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pt-5">
        {/* การ์ด 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col h-full">
          <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            Web Applications
          </h5>
          <p className="mb-3 font-normal text-base text-gray-700 flex-grow">
            Computer Science Internal Reservation Room System
          </p>
          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-white hover:text-black border hover:border-black w-fit">
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </div>

        {/* การ์ด 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col h-full">
          <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 ">
            Web Applications
          </h5>
          <p className="mb-3 font-normal text-base text-gray-700 flex-grow">
            Computer Science Research เว็บไซต์ฐานข้อมูลผลงานนักศึกษา
          </p>
          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-white hover:text-black border hover:border-black w-fit">
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </div>

        {/* การ์ด 3 */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col h-full">
          <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 ">
            Data Analysis
          </h5>
          <p className="mb-3 font-normal text-base text-gray-700 flex-grow">
            World CorrupWon Index Dataset Analysis and Visualization
          </p>
          <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-white hover:text-black border hover:border-black w-fit">
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

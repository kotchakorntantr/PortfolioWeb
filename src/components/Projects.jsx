import React from "react";

function Projects() {
  return (
    <section id="projects" className="min-h-screen px-4 py-16 bg-gradient-to-br from-gray-900 to-purple-900">
      <h2 className="text-5xl leading-[1.5] text-center font-semibold bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pt-5">
        {/* การ์ด 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Web Development
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            Build modern, responsive websites using React, Next.js, and Tailwind
            CSS.
          </p>
          <div
      
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800  "
          >
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
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            UI/UX Design
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            Design clean and user-friendly interfaces for web and mobile
            applications.
          </p>
          <div
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 "
          >
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
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            SEO & Analytics
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            Improve your website visibility with SEO best practices and
            performance tracking.
          </p>
          <div
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 "
          >
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

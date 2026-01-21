import React, { useEffect, useRef, useState } from "react";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Web Applications",
      description: "Computer Science Internal Reservation Room System"
    },
    {
      title: "Web Applications",
      description: "Computer Science Research เว็บไซต์ฐานข้อมูลผลงานนักศึกษา"
    },
    {
      title: "Data Analysis",
      description: "World Corruption Index Dataset Analysis and Visualization"
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen px-4 py-16 bg-gradient-to-br from-purple-200 to-blue-300"
    >
      <h2 
        className={`text-3xl sm:text-5xl leading-[1.5] text-center font-semibold text-black transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pt-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-6 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col h-full
              transition-all duration-700 ease-out hover:shadow-2xl
              ${isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
              }`}
            style={{ 
              transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
            }}
          >
            <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              {project.title}
            </h5>
            <p className="mb-3 font-normal text-base text-gray-700 flex-grow">
              {project.description}
            </p>
            <div className="flex-grow gap-4">
            {project.description === "Computer Science Research เว็บไซต์ฐานข้อมูลผลงานนักศึกษา" && (
              <a
                href="https://research.cs.science.cmu.ac.th"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-white hover:text-black border hover:border-black w-fit transition-all duration-300"
              >
                View Project
              </a>
            )}
            {(project.description === "Computer Science Internal Reservation Room System" || project.description === "World Corruption Index Dataset Analysis and Visualization")&& (
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-white hover:text-black border hover:border-black w-fit transition-all duration-300">
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
            </button>
            )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
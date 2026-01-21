import React, { useEffect, useRef, useState } from "react";

function Technologies() {
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

  const cards = [
    {
      title: "Programming Languages",
      content: "Python, Go, JavaScript, TypeScript, HTML, CSS"
    },
    {
      title: "Framework and Libraries",
      content: "React, Vue.js, Bootstrap, Tailwind CSS."
    },
    {
      title: "Tools and Database",
      content: "Visual Studio Code, GitHub, Gitlab, Figma, PostgreSQL"
    }
  ];

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-purple-200 to-blue-300 px-4 py-16"
    >
      <h2 
        className={`text-3xl sm:text-5xl leading-[1.5] text-center font-semibold text-black transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        Technologies and Tools
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pt-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-6 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col w-full
              transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl
              ${isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
              }`}
            style={{ 
              transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
            }}
          >
            <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              {card.title}
            </h5>
            <p className="mb-3 font-normal text-base text-gray-700 flex-grow">
              {card.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
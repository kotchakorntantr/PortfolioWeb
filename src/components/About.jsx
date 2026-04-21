import React from "react";
function About() {
    const [moreInfo, setMoreInfo] = React.useState(false);

  return (
    <section id="about">
      <div className="bg-gradient-to-br from-purple-200 to-blue-300 px-4 py-16 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl w-full items-center">
          <div className="flex items-center justify-center relative z-10 pt-12 sm:pt-8 order-1 sm:order-2">
            <img
              src="/public/mypic.JPG"
              alt="Profile"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="w-48 h-48 sm:w-84 sm:h-84 object-cover rounded-2xl shadow-lg "
            />
          </div>

          <div data-aos="fade-up" className="flex flex-col gap-4 items-center sm:text-left sm:items-start order-2 sm:order-1">
            <span className="font-semibold text-black text-lg sm:text-2xl sm:pt-8 ">
              About Me
            </span>
            <p className="text-sm sm:text-base text-black text-left max-w-md">
              I am a recent Computer Science graduate with experience in
              gathering requirements and developing full-stack web applications.
              I have a strong passion for learning new technologies and applying
              them to solve real-world problems.
            </p>
            <div className="flex gap-4">
              <a
                href="https://drive.google.com/drive/folders/1VgCtCZ4PELqSe_ZC8BoEIAx6AwqPBAus?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                    className="py-2.5  px-5 inline-block text-sm font-medium text-black bg-white rounded-lg transition hover:text-white hover:bg-black"
              >
                View My Resume
              </a>
              <button
                onClick={() => setMoreInfo(true)} 
                className="py-2.5  px-5 inline-block text-sm font-medium text-black bg-white rounded-lg transition hover:text-white hover:bg-black"
              >
                More about me
              </button>
            </div>
          </div>
        </div>
      </div>
      {moreInfo && (
        <div onClick={() => setMoreInfo(false)}  className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex  items-center justify-between px-6 py-5 border-b border-gray-200">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Kotchakorn Tantrakool
                </h3>
                <div className="border-t border-gray-300 my-4 "></div>
                <p>
                  <span className="font-semibold text-pink-400"> Education:</span> Bachelor of Science in Computer Science, Minor in Business Administration, Chiang Mai University (2022-2026)
                </p>
                <p>
                  <span className="font-semibold text-pink-400"> Work Experience:</span> Frontend Developer Intern (April 2025 - June 2025) - Developed web applications using Vue.js and TailwindCSS
                </p>
                <p>
                  <span className="font-semibold text-pink-400"> Project Experience:</span> Developed frontend, backend, and full-stack web applications, gathered requirements, communicated with clients, and designed user interfaces using Figma.
                </p>
                <div className="border-t border-gray-300 my-4 "></div>
                 <h3 className="text-xl font-semibold text-gray-900">
                  Contacts
                </h3>
                <p>
                  <span className="font-semibold text-pink-400"> Email:</span> kotchakorntantrakool@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-pink-400"> Phone:</span> +66 990 049 499
                </p>
              </div>
              
           
              
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
}
export default About;

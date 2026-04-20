
function Projects() {

  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="px-4 py-16 bg-gradient-to-br from-purple-200 to-blue-300"
    >
      <h2 className="text-2xl sm:text-3xl leading-[1.5] text-center font-semibold text-black transition-all duration-1000">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pt-5">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="p-6 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col h-full 
         transition-all duration-700 ease-out hover:shadow-2xl opacity-100 translate-y-0 "
        >
          <h5 className="mb-2 text-xl  font-semibold tracking-tight text-gray-900">
            Computer Science Internal Reservation Room System
          </h5>
          <p className="mb-3 font-normal text-base text-gray-700 flex-grow">
            ระบบจองเพื่อการใช้งานภายในภาควิชาวิทยาการคอมพิวเตอร์ 
          </p>
          <div className=" gap-4">
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
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="p-6 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col h-full 
         transition-all duration-700 ease-out hover:shadow-2xl opacity-100 translate-y-0 
         "
        >
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Computer Science Research 
          </h5>
          <p className="mb-3 font-normal text-base text-gray-700 flex-grow">
            {/* ระบบอัพโหลดผลงานนักศึกษาเพื่อการเก็บรวบรวมและแสดงผลงานของนักศึกษา */}
            เว็บไซต์ฐานข้อมูลผลงานนักศึกษา
          </p>
          <div className=" gap-4">
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
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="p-6 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col h-full 
         transition-all duration-700 ease-out hover:shadow-2xl opacity-100 translate-y-0 "
        >
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            World Corruption Index Dataset Analysis and Visualization
          </h5>
          <p className="mb-3 font-normal text-base text-gray-700 flex-grow">
            การวิเคราะห์และแสดงผลข้อมูลดัชนีการทุจริตโลกโดย
            {/* ใช้เทคนิคการวิเคราะห์ข้อมูลและการสร้างภาพข้อมูลเพื่อให้เข้าใจแนวโน้มและรูปแบบของการทุจริตในระดับโลก */}
          </p>
          <div className=" gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

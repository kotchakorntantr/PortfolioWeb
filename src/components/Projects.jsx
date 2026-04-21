
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
            ระบบจองห้องภายในภาควิชาวิทยาการคอมพิวเตอร์
          </p>
          <p className="pb-4">
            {" "}
            <span className="font-semibold text-pink-400"> Tools:</span> Golang,
            React, TypeScript, TailwindCSS, PostgreSQL
          </p>

          <a
            href="https://csirrs.onrender.com/"
            target="_blank"
            className="inline-flex ml-auto  px-3 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-white hover:text-black border hover:border-black w-fit transition-all duration-300"
          >
            View Project
          </a>
        </div>
        {/* </div> */}

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="p-6 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col h-full 
         transition-all duration-700 ease-out hover:shadow-2xl opacity-100 translate-y-0 
         "
        >
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Computer Science Student Research
          </h5>
          <p className="mb-3 font-normal text-base text-gray-700">
            {/* ระบบอัพโหลดผลงานนักศึกษาเพื่อการเก็บรวบรวมและแสดงผลงานของนักศึกษา */}
            เว็บไซต์ฐานข้อมูลผลงานนักศึกษา
          </p>
          <p className="pb-4">
            {" "}
            <span className="font-semibold text-pink-400"> Tools:</span> Python,
            Vue.js, JavaScript, TailwindCSS, PostgreSQL
          </p>

          <a
            href="https://research.cs.science.cmu.ac.th/"
            target="_blank"
            className="inline-flex mt-auto ml-auto px-3 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-white hover:text-black border hover:border-black w-fit transition-all duration-300"
          >
            View Project
          </a>
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
          <p className="mb-3 font-normal text-base text-gray-700">
            การวิเคราะห์และแสดงผลข้อมูลดัชนีการทุจริตโลก
            {/* ใช้เทคนิคการวิเคราะห์ข้อมูลและการสร้างภาพข้อมูลเพื่อให้เข้าใจแนวโน้มและรูปแบบของการทุจริตในระดับโลก */}
          </p>
          <p className="pb-4">
            {" "}
            <span className="font-semibold text-pink-400"> Tools:</span> Python, Pandas, NumPy, Matplotlib, Seaborn, Plotly, GeoPandas
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="p-6 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col h-full 
         transition-all duration-700 ease-out hover:shadow-2xl opacity-100 translate-y-0 "
        >
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Foodie App Design
          </h5>
          <p className="mb-3 font-normal text-base text-gray-700 flex-grow">
            การออกแบบแอปพลิเคชันสำหรับสั่งอาหารออนไลน์
          </p>
              <p className="pb-4">
            {" "}
            <span className="font-semibold text-pink-400"> Tools:</span> Figma
          </p>
            <a
              href="https://www.figma.com/proto/lIdiV76fmsX6sYjYt40gY0/Foodie-App?node-id=30-881&p=f&t=KTGpTML9koqLKuVS-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
              target="_blank"
              className="inline-flex mt-auto ml-auto items-center px-3 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-white hover:text-black border hover:border-black w-fit transition-all duration-300"
            >
              View Design
            </a>
          </div>
      </div>
      
    </section>
  );
}

export default Projects;
